import { path, propEq } from 'ramda';

const { localStorage } = typeof window !== 'undefined' ? window : {
  localStorage: {
    getItem: () => false,
  },
};
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  error.status = response.status;
  return response.json().then((data) => {
    error.error = data.error;
    error.message = data.message;
    throw error;
  });
}

export function authHeader() {
  // return authorization header with jwt token
  const token = localStorage.getItem('pwaState') && path(['auth', 'data', 'token', 'accessToken'], JSON.parse(localStorage.getItem('pwaState')));
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
    };
  }
  return {};
}

const makeDefaultOptions = (options, isContentful) => {
  const contentType = !propEq('method', 'GET', options)
    ? { 'Content-Type': 'application/json;charset=UTF-8' }
    : {};

  const cacheControl = propEq('cache', 'no-store', options) 
    ? { 'Cache-Control': 'no-store' }
    : {};
  
  var header = isContentful ? 
    (
      {
        headers: {
          ...cacheControl,
          ...contentType,
          ...authHeader(),
        },
        ...options,
      }
    ) : 
    (
      {
        headers: {
          ...cacheControl,
          ...contentType,
          ...authHeader(),
          "isWeb" : true,
        },
        ...options,
      }
    )
  return header
};

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */

export default function request(url, options = { method: 'GET' }, isContentful = false) {
  return fetch(url, makeDefaultOptions(options, isContentful))
  .then(checkStatus)
  .then(parseJSON);
}

import config from 'config/env';

function makeOrGetClevertapObject() {
  const clevertap = {
    event: [], profile: [], account: [], onUserLogin: [], notifications: [], privacy: [],
  };
  if (!process.browser || !window) {
    pushBasicInfo(clevertap);
    return clevertap;
  }
  if (!window.clevertap) {
    window.clevertap = clevertap;
    pushBasicInfo(window.clevertap);
  }
  return window.clevertap;
}

function pushBasicInfo(clevertapObject) {
  clevertapObject.account.push({ id: `${config.clevertapKey}`});
  clevertapObject.privacy.push({ optOut: false });
  clevertapObject.privacy.push({ useIP: false });
}

export default makeOrGetClevertapObject;

export default function htmlToText(html) {
  if (process && process.browser) {
    const virtualElement = document.createElement('div');
    virtualElement.innerHTML = html;
    return virtualElement.innerText;
  }
  return '';
}

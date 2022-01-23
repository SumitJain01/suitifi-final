export default function detectMobile() {
  if (process.browser) {
    return window.innerWidth < 768;
  }
  return true;
}
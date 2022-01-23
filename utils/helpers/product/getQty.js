export default function getQty(pid, realQty) {
  if (realQty < 15) {
    return realQty;
  }
  const now = new Date();
  const salt = now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString() + pid;
  return ((((4 * (salt * salt)) + (3 * salt) + 7).toString().substring(3, 8) % 5) + 15) % realQty;
}

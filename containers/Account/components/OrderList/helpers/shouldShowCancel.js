export default function shouldShowCancel(status) {
  const testingStatus = String(status).toLowerCase();
  const whitelistedStatus = [
    'payment pending',
    'payment failed',
    'order placed',
    'processing',
    'packed',
    'ready to ship',
  ];
  return Boolean(
    whitelistedStatus.indexOf(testingStatus) > -1
  );
}

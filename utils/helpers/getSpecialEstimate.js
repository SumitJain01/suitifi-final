export default function getSpecialEstimate(normalEstimate) {
  const addDays = (target) => {
    return new Date(target.setDate(target.getDate()));
  };

  let specialEstimate;

  try {
    specialEstimate = addDays(new Date(normalEstimate));
  } catch (error) {
    console.error('getSpecialEstimate Requires Date Object!');
    console.error('Have you passed the same?');
    console.error(error);
  }

  return specialEstimate;
}

import cogotoast from 'cogo-toast';
cogotoast.errorDefault = cogotoast.error;
cogotoast.error = (...args) => {
  if (args[0].includes('%fieldName')) {
    cogotoast.info('Something went wrong, try again.');
    return;
  }
  if (args[0] === 'jwt expired') {
    return;
  }
  cogotoast.errorDefault(...args);
};

export default cogotoast;

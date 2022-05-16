/**
 * @param obj - The object to check if it's empty.
 * @returns A function that takes an object as an argument and returns a promise that resolves to an
 */
const isObjectEmpty = (obj) => {
  const names = Object.getOwnPropertyNames(obj);
  return Promise.resolve({ status: names.length === 0, names });
};

/**
 * object with a status and response property
 * @param parameters - An array of strings that contains the names of the fields that you want to
 * validate.
 * @param obj - The object to be validated
 */

const validation = (parameters, obj) => isObjectEmpty(obj).then(({ status, names }) => {
  if (!status) {
    const existedFields = {
      keys: names,
      emptyKeys: [],
    };
    parameters.forEach((element) => {
      if (obj[element] === undefined) {
        existedFields.emptyKeys.push({ fieldName: element, message: 'Required' });
      }
    });
    return Promise.resolve({
      status: !(existedFields.emptyKeys.length > 0),
      response: existedFields.emptyKeys,
    });
  }
  return Promise.resolve({ status: false, response: parameters });
});

export default validation;

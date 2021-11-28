/**
 * Check whether we have text or url and structure the data for the api
 * @param formInput The input captured by the textbox
 * @returns if it's text or url
 */
const urlChecker = (formInput) => {
  const regex = formInput.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );

  let data;

  if (regex == null) {
    // the data is text
    data = {
      txt: formInput,
    };
    return data;
  } else {
    // the data is a url
    data = {
      url: formInput,
    };
    return data;
  }
};

export { urlChecker };

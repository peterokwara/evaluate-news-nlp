// The url for the api
const apiUrl = `http://localhost:3000`;

// Create default options for making a request
let options = {
  method: "",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  body: "",
};

/**
 * Function to handle the submission of input data to the api
 * @param event Event generated from the click event
 */
const handleSubmit = async (event) => {
  event.preventDefault();
  let response;

  // Check what text was put into the form field
  let formText = document.getElementById("name").value;

  // Throw error if the URL is invalid
  if (!Client.urlChecker(formText)) {
    alert("Invalid URL!");
    throw new Error("Invalid url!");
  }

  if (formText) {
    // Set up the data
    const data = {
      text: formText,
    };

    // Build the url to post the data to
    const url = `${apiUrl}/topic`;

    // Describe how we send the data
    options["method"] = "POST";
    options["body"] = JSON.stringify(data);

    // Post data to the backend api
    response = await postData(url, options);
  }

  // Update UI
  await updateUI(response);
};

/**
 * Function to do fetch request
 * @param url the url to make requests to
 * @param options this may include whether it's get or post, with data or no data
 * @returns the response from openweatherapi or from the backend
 */
const postData = async (url = "", options = {}) => {
  const response = await fetch(url, options);
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("Something went wrong!", error);
  }
};

/**
 * Function to update the user interface
 * @param data the data to display in the user interface
 */
const updateUI = async (data) => {
  const results = document.getElementById("results");

  if (data) {
    results.innerHTML = JSON.stringify(data);
  }
};

export { handleSubmit };

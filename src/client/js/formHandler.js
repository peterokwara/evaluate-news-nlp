import modal from "./modal";

// The url for the api
const apiUrl = `http://localhost:3000`;

// Get the loader
const loader = document.getElementsByClassName("loader")[0];

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

  //Check to see if the value is empty
  if (!formText) {
    // Show up a modal
    modal();
    throw new Error("No data to post! Please put some data");
  }

  // Do a check on the data, whether it's text or url and structure it
  const data = Client.urlChecker(formText);

  if (data) {
    // Activate loader
    loader.style.display = "block";

    // Build the url to post the data to
    const url = `${apiUrl}/topic`;

    // Describe how we send the data
    options["method"] = "POST";
    options["body"] = JSON.stringify(data);

    // Post data to the backend api
    response = await postData(url, options);

    // Deactivate loader
    loader.style.display = "none";
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

const baseURL = "https://shrt.iran.liara.run";

const button = document.querySelector("#shorten");
const input = document.querySelector("#input-field");
const longUrl = document.querySelector("#input-url");
const shortUrl = document.querySelector("#new-url");
const resultDiv = document.querySelector("#output-div");
const errorDiv = document.querySelector("#error-div");
const errorMessage = document.querySelector("#error-text");
const clearButton = document.querySelector("#clear-btn");
const copyButton = document.querySelector("#copy-btn");

/* button action */
button.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value) {
    shorten(input.value);
  } else {
    showError();
    hideResult();
  }
});

/* function to handle errors */
function handleError(url, response) {
  if (!urlValidator(url)) {
    console.log("url fucked up");
    errorMessage.textContent = "Please enter a valid URL.";
    showError();
    hideResult();
    return;
  } else hideError();

  if (!response.ok) {
    errorMessage.textContent = "Please enter a valid URL.";
    showError();
    hideResult();
  } else {
    hideError();
    return response;
  }
}

function urlValidator(url) {
  try {
    new URL(url);
    hideError();
    return true;
  } catch (err) {
    console.log("url fucked up");
    errorMessage.textContent = "Please enter a valid URL.";
    showError();
    hideResult();
    return false;
  }
}

/* function to get shortened url with input "url" with fetch and deal with error */
function shorten(input) {
  if (!urlValidator(input)) return;

  fetch(baseURL + "/api/shortener", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ longUrl: input }),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      shortUrl.innerHTML = json.data.shortUrl;
      showResult();
    })
    .catch((err) => {
      console.log(err);
    });
}

/* Clipboard functions */

// const clipboard = new ClipboardJS("#copy-btn");

// clipboard.on('success', function(e) {
//     console.info('Action:', e.action);
//     console.info('Text:', e.text);
//     console.info('Trigger:', e.trigger);

//     e.clearSelection();
// });

// clipboard.on('error', function(e) {
//     console.error('Action:', e.action);
//     console.error('Trigger:', e.trigger);
// });

/* Clear fields */
function clearFields() {
  input.value = "";
  hideResult();
  hideError();
}

clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  clearFields();
});

/* display/hide results and errors */
function showResult() {
  shortUrl.style.display = "flex";
}

function hideResult() {
  shortUrl.style.display = "none";
}

function showError() {
  errorDiv.style.display = "block";
}

function hideError() {
  errorDiv.style.display = "none";
}

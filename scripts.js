//form and result elements from the HTML document
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

//an event listener to the form for the submit event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);// Creating a new FormData object from the form
  const { dividend, divider } = Object.fromEntries(entries);// Extracting values for dividend and divider from the FormData object

  try {
     // Checking if  dividend or divider is empty
    if (dividend === "" || divider === "") {
      result.textContent =
        "Division not performed. Both values are required in inputs. Try again";
        return;
    }
    // Checking if divider is 0
    if (dividend >= 0 && divider == 0) {
      result.textContent =
        "Division not performed. Invalid number provided. Try again";
      throw new Error(
        "Division not performed. Invalid number provided. Try again"
      );
    }
    // Checking if dividend or divider are not numbers
    if (isNaN(dividend) || isNaN(divider)) {
      document.body.innerHTML =
        "<div class='critical-error'>Something critical went wrong. Please reload the page.</div>";
      throw new Error("Something critical went wrong. Please reload the page");
    }
    // Performing the division and displaying the result
    result.innerText = Math.floor(dividend / divider);
  } catch (error) {
    // Catching and logging any errors that occur
    console.error(error.stack);
  }
});

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    if (dividend === "" || divider === "") {
      result.textContent =
        "Division not performed. Both values are required in inputs. Try again";
        return;
    }
    if (dividend >= 0 && divider == 0) {
      result.textContent =
        "Division not performed. Invalid number provided. Try again";
      throw new Error(
        "Division not performed. Invalid number provided. Try again"
      );
    }
    if (isNaN(dividend) || isNaN(divider)) {
      document.body.innerHTML =
        "<div class='critical-error'>Something critical went wrong. Please reload the page.</div>";
      throw new Error("Something critical went wrong. Please reload the page");
    }
    result.innerText = Math.floor(dividend / divider);
  } catch (error) {
    console.error(error.stack);
  }
});

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  

  if (dividend === "" || divider === "") {
    result.textContent =
      "Division not performed. Both values are required in inputs. Try again";
     
  }else if (divider === 0) {
    result.textContent =
      "Division not performed. Invalid number provided. Try again";
  }else if (isNaN(dividend) || isNaN(divider)) {
    result.textContent =
      "Something critical went wrong. Please reload the page";
  } else {
    result.innerText = Math.floor(dividend / divider);
  }
  // try {
  //   throw new Error(
  //     "Division not performed. Invalid number provided. Try again"
  //   );
  // } catch (error) {
  //   console.error("Error:", error.message);
  // }
});

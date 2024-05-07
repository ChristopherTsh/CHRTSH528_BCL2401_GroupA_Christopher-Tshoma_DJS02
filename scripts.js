const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = Math.floor(dividend / divider);
  
  if( dividend === '' ||divider === '' ){
    result.textContent = 'Division not performed. Both values are required in inputs. Try again'
   }

   if(divider === 0 ){
    result.textContent = 'Division not performed. Invalid number provided. Try again'
    
    }try{
      throw new Error('Division not performed. Invalid number provided. Try again')
    }
    catch(error){
      console.error('Error:', error.message)
    }
   

});
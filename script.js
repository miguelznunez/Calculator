const userInput =  document.querySelector("#user_input");

press = (digit) => {
  if(!userInput.value)
  userInput.value = "";
  
  userInput.value = userInput.value += digit;
}

equal = () => {
  userInput.value = eval(userInput.value);
}

erase = () => {
  userInput.value = "";
}

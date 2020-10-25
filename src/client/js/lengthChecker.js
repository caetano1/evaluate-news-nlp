function checkForLength(inputText) {
    console.log("::: Running checkForLength :::", inputText);

    if (inputText.length < 20) {
        alert("Please, use 20 or more characters.");
        return false;
    }
    
    return true;
}

export { checkForLength }

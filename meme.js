const imageInput = document.querySelector("#imageInput");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");
const generateBtn = document.querySelector("#generateBtn");

// make generateMeme form
function generateMeme (imageInput, topText, bottomText) {
    memeDiv = document.createElement("div");
    memeDiv.className = "memeImage";
    memeDiv.style.backgroundImage = `url(${imageInput.value})`;
//  top text
    let topTextDiv = document.createElement('div');
    topTextDiv.className = "memeTopText";
    topTextDiv.innerText = topText;
    memeDiv.append(topTextDiv);
// bottom text 
    let bottomTextDiv = document.createElement('div');
    bottomTextDiv.className = "memeBottomText";
    bottomTextDiv.innerText = bottomText;
    memeDiv.append(bottomTextDiv);
   
    let storeImage = document.getElementById("storeMeme");
    storeImage.append(memeDiv);
    
    memeDiv.addEventListener("click", removeHandler);
}
function clearInput () {
    imageInput.value = "";
    topTextInput.value = "";
    bottomTextInput.value = "";
}      
function removeHandler (e) {
    storeImage = document.querySelectorAll("storeMeme");
    e.target.remove();
}
// function to create meme
function generating () {
    generateBtn.addEventListener("click", function (e) {
            generateMeme (imageInput, topTextInput.value, bottomTextInput.value);  
            e.preventDefault();    
            clearInput();
    });
    
} 
generating();


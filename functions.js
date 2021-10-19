function changeBackgroundColor(color){
    var textBox = document.getElementById("textBox1");
    var textBoxClasses = "text-white p-2 bg-" + color;
    localStorage.setItem("textBoxColor",color);
    console.log(textBoxClasses);
    textBox.className = textBoxClasses;
}

function setDefaultName(){
    var defaultName = localStorage.getItem("name");
    if(!defaultName){
        localStorage.setItem("name", "username");
    }
}

function setUserName(username){
    console.log(username);
    document.getElementById("name").innerText = username;
}

function changeUserName(){
    var inputName =  document.getElementsByName("username")[0];
    if (inputName.value){
        localStorage.setItem("name", inputName.value);
        setUserName(inputName.value);
    }               
    inputName.value = "";
}

window.onload = function(){
    setDefaultName();
    document.getElementById("name").innerText = localStorage.getItem("name");

    // TODO: Make the text box color persist even when someone refreshes the page
    changeBackgroundColor(localStorage.getItem("textBoxColor"));
}



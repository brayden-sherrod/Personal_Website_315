
if (localStorage.getItem('darkMode') === null) {
    localStorage.setItem('darkMode', "false");
} else if (localStorage.getItem('darkMode')==="true") {
    document.body.classList.toggle("dark-theme");
}



function toggleDarkMode() {
    if (localStorage.getItem('darkMode')==="false") {
        localStorage.setItem('darkMode', "true");
    } else {
        localStorage.setItem('darkMode', "false");
    }
    document.body.classList.toggle("dark-theme");
}



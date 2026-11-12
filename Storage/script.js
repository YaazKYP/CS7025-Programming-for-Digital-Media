const themeButton = document.getElementById('themeButton');
const clickCounter = document.getElementById('clickCount');

let clickCount = Number(localStorage.getItem('clickCount')) || 0;
clickCounter.textContent = clickCount;

function saveCookie(name, value) {
    document.cookie = name + "=" + value +
        "; max-age=86400; path=/; SameSite=Lax"; // Cookie expires in 1 day
}

function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
        const parts = cookie.split("=");
        if (parts[0] === name) {
            return parts.slice(1).join("=");
        }
    }
    return null;
}

let savedTheme = getCookie("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme"); 
        themeButton.textContent = "Switch to Light Theme";
    } else {
        document.body.classList.remove("dark-theme");
        themeButton.textContent = "Switch to Dark Theme";
    }

themeButton.addEventListener('click', function() {

    clickCount++;
    clickCounter.textContent = clickCount;
    localStorage.setItem('clickCount', clickCount); // Save the updated count to localStorage

    document.body.classList.toggle('dark-theme'); //DOM manipulation to toggle the dark theme class
    if (document.body.classList.contains('dark-theme')) {
        themeButton.textContent = "Switch to Light Theme";
        saveCookie("theme", "dark");
    } else {
        themeButton.textContent = "Switch to Dark Theme";
        saveCookie("theme", "light");
    }
});


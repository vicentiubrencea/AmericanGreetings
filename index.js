// Functions for changing buttons style //

function changeColor(button) {
    button.style.backgroundColor = "#2c617e";
    button.style.color = "white";
}

function resetColor(button) {
    button.style.backgroundColor = "#fff";
    button.style.color = "#2c617e";
}

// Functions for getting the list of countries from an API 

async function getCountries() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countriesData = await response.json();
        return countriesData;
    } catch (error) {
        console.error(error);
    }
}

async function createCountries() {
    const countriesData = await getCountries();
    const countrySelect = document.getElementById("country-select");
    const sortedCountries = countriesData.sort((a, b) => a.name.common.localeCompare(b.name.common));

    sortedCountries.map((country) => {
        const option = document.createElement("option");
        option.value = country.name.common;
        option.textContent = country.name.common;
        countrySelect.appendChild(option);
    });
}

createCountries();

// Form validation function

function validateForm() {
    const codeValue = document.getElementById("code-input").value.trim();
    const emailValue = document.getElementById("email-input").value;
    const code = document.getElementById("code-input");
    const email = document.getElementById("email-input");

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    let valide = true;

    if (codeValue.length < 5) {
        document.getElementById("code-error").textContent = "Please enter your redemption code";
        code.classList.replace("fields-style", "error-message-fields");
        valide = false;
    }

    if (!regex.test(emailValue)) {
        document.getElementById("email-error").textContent = "Please enter your email adress";
        email.classList.replace("fields-style", "error-message-fields");
        valide = false;
    }
    
    if (valide) {
        alert("Check your Email for a Free Membership!");
        code.classList.replace("error-message-fields", "fields-style");
        email.classList.replace("error-message-fields", "fields-style");
        document.getElementById("code-error").textContent = "";
        document.getElementById("email-error").textContent = "";
        document.getElementById("code-input").value = "";
        document.getElementById("email-input").value = "";
    }
}

// Opening and closing the drop-down menu by pressing keys

const dropdownMenu = document.querySelector('.dropdown-menu');

function openDropdown(event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.visibility = 'visible';
    }
}

function closeDropdown(event) {
    if (event.key === 'Escape') {
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
    }
}

document.addEventListener('keydown', openDropdown);
document.addEventListener('keydown', closeDropdown);

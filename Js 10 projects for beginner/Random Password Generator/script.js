const copyBtn = document.getElementById("copy");
const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");

const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#\$%&\'()*+,-./:;<=>?@[\\]^_`{|}\~";

    let password = "";

    for (let i = 0; i < 8; i++){
        password +=chars.charAt(Math.floor(Math.random()*chars.length));
    }
    passwordBox.value = password;
};

button.addEventListener("click", generatePassword);


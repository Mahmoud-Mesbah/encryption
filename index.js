const passwordForm = document.getElementById('password-form');
const passwordInput = document.getElementById('password');
const encryptBtn = document.getElementById('encrypt-btn');
const encryptedPasswordPara = document.getElementById('encrypted-password');

encryptBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const password = passwordInput.value;
    const encryptedPassword = encryptPassword(password);
    encryptedPasswordPara.textContent = `encrypted password: [${encryptedPassword}] `;
});

function encryptPassword(password) {
    let encryptedPassword = '';
    for (let i = 0; i < password.length; i++) {
        const charCode = password.charCodeAt(i);
        encryptedPassword += String.fromCharCode(charCode + 3);  
    }
    return encryptedPassword;
}

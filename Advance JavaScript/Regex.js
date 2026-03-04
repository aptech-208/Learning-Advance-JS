const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailInput = document.getElementById('email');
const form = document.getElementById('Form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // const email = emailInput.value;
    if (!emailRegex.test(emailInput.value)) {
        const span = document.createElement('span');
        span.textContent = "Invalid email address!";
        span.style.color = 'red';
        emailInput.style.borderColor = 'red';
    } else {
        span.textContent = "";
        emailInput.style.borderColor = 'green';
    }
});
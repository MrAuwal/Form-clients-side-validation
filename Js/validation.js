const form = document.getElementById('form')
const fname = document.getElementById('fname')
const sname = document.getElementById('sname')
const email = document.getElementById('email')
const password = document.getElementById('password')


// Function for Error Display
const setError = (element, massage) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('small')

    errorDisplay.innerText = massage;

    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

// Function for Success Display
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('small')
    errorDisplay.innerText = '';

    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});
const validateForm = () => {
    const fnameValue = fname.value.trim();
    const snameValue = sname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (fnameValue === '') {
        setError(fname, 'Firts Name cannot be empty')
    } else {
        setSuccess(fname)
    }
    if (snameValue === '') {
        setError(sname, 'Last Name cannot be empty')
    } else {
        setSuccess(sname)
    }
    if (emailValue === '') {
        setError(email, 'Email cannot be empty')
    } else if (!emailValue.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        setError(email, 'Look like this is not an email')
    } else {
        setSuccess(email)
    }
    if (passwordValue === '') {
        setError(password, 'Password cannot be empty')
    } else {
        setSuccess(password)
    }
}
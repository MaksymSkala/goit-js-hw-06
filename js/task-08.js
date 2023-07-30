const loginForm = document.querySelector('.login-form');

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());

        if (!formDataObject.email || !formDataObject.password) {
        alert('Please fill in all fields.');
        return;
        }

        console.log(formDataObject);

        event.target.reset();
}

loginForm.addEventListener('submit', handleSubmit);
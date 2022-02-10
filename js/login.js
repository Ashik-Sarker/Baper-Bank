document.getElementById('submit-button').addEventListener('click', function () {
    // const getuser_email = document.getElementById('user_email').value;
    const user_email = document.getElementById('user-email');
    const user_password = document.getElementById('user-password');
    const email_text = user_email.value;
    const password_text = user_password.value;

    if (email_text == 'ashiksarker89@gmail.com' && password_text == 'secret') {
        window.location.href = 'banking.html'
    }
})
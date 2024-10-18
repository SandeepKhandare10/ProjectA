
    const form = document.querySelector('form');
    const nameInput = document.getElementById('Name');
    const numberInput = document.getElementById('number');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmpass');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameValue = nameInput.value.trim();
        const numberValue = numberInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();

        if (nameValue === '') {
            document.getElementById('Name').classList.add('error');
            document.getElementById('Name').placeholder = 'Please enter your name';
        } else {
            document.getElementById('Name').classList.remove('error');
        }

        if (numberValue === '') {
            document.getElementById('number').classList.add('error');
            document.getElementById('number').placeholder = 'Please enter your number';
        } else {
            document.getElementById('number').classList.remove('error');
        }

        if (emailValue === '') {
            document.getElementById('email').classList.add('error');
            document.getElementById('email').placeholder = 'Please enter your email';
        } else {
            document.getElementById('email').classList.remove('error');
        }

        if (passwordValue === '') {
            document.getElementById('password').classList.add('error');
            document.getElementById('password').placeholder = 'Please enter your password';
        } else {
            document.getElementById('password').classList.remove('error');
        }

        if (confirmPasswordValue === '') {
            document.getElementById('confirmpass').classList.add('error');
            document.getElementById('confirmpass').placeholder = 'Please confirm your password';
        } else if (passwordValue !== confirmPasswordValue) {
            document.getElementById('confirmpass').classList.add('error');
            document.getElementById('confirmpass').placeholder = 'Passwords do not match';
        } else {
            document.getElementById('confirmpass').classList.remove('error');
        }
    });

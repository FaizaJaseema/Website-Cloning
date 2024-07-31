document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('strength-text');
    
    let strength = 0;
    
    if (password.length > 5) strength++;
    if (password.length > 10) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    switch (strength) {
        case 0:
            strengthBar.style.width = '0%';
            strengthBar.style.background = '#ddd';
            strengthText.innerText = '';
            break;
        case 1:
            strengthBar.style.width = '20%';
            strengthBar.style.background = '#ff4b5c';
            strengthText.innerText = 'Very Weak';
            break;
        case 2:
            strengthBar.style.width = '40%';
            strengthBar.style.background = '#ff884b';
            strengthText.innerText = 'Weak';
            break;
        case 3:
            strengthBar.style.width = '60%';
            strengthBar.style.background = '#ffcc29';
            strengthText.innerText = 'Medium';
            break;
        case 4:
            strengthBar.style.width = '80%';
            strengthBar.style.background = '#00d084';
            strengthText.innerText = 'Strong';
            break;
        case 5:
            strengthBar.style.width = '100%';
            strengthBar.style.background = '#00b894';
            strengthText.innerText = 'Very Strong';
            break;
    }
});
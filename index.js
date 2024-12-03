document.getElementById('registration-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); 
   var username = document.getElementById('username').value;
   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;
    var existingUser = localStorage.getItem(email);
    var incorrectMessage = document.getElementById('incorrect');
    incorrectMessage.classList.add('d-none');
    if (existingUser) {
        incorrectMessage.textContent = 'This Email Is Already Exist';
        incorrectMessage.classList.remove('d-none');
        return;
    }

    var newUser = { username, email, password };
    localStorage.setItem(email, JSON.stringify(newUser));
    window.location.href = 'login.html';
});

document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); 

    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    var storedUser = localStorage.getItem(email);
    
    var incorrectMessage = document.getElementById('incorrect');
    incorrectMessage.classList.add('d-none');

    if (storedUser) {
        var user = JSON.parse(storedUser);
        
        if (user.password === password) {
            localStorage.setItem('loggedInUser', email);
            window.location.href = 'body.html';
        } else {
            incorrectMessage.textContent = 'incorrect email or password';
            incorrectMessage.classList.remove('d-none');
        }
    } else {
        incorrectMessage.textContent = 'incorrect email or password';
        incorrectMessage.classList.remove('d-none');
    }
    document.getElementById('login-form').reset();
});
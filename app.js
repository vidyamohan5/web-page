function login(){
    var username = parse(document.getElementById('username').value);
    var password = parse(document.getElementById('password').value);
    console.log(username);
    console.log(password);
    // document.forms["form-group"].onSubmit();
    if( username===""){
        alert('enter the username');
    }
    if( password===""){
    alert('enter the password')
    }
}

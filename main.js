var req = false;
function checkPassword(){
    var pwd = document.getElementById("pwd").value;

    var length = document.getElementById("length");
    var uppercase = document.getElementById("uppercase");
    var lowercase = document.getElementById("lowercase");
    var number = document.getElementById("number");
    var specialcharacter = document.getElementById("specialcharacter");

    var lengthRegex = /.{8,}/;
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var numberRegex = /[0-9]/;
    var specialcharacterRegex = /[^A-Za-z0-9]/;

    length.classList.toggle("valid", lengthRegex.test(pwd));
    uppercase.classList.toggle("valid",uppercaseRegex.test(pwd));
    lowercase.classList.toggle("valid",lowercaseRegex.test(pwd));
    number.classList.toggle("valid",numberRegex.test(pwd));
    specialcharacter.classList.toggle("valid",specialcharacterRegex.test(pwd));

    if(lengthRegex.test(pwd) && uppercaseRegex.test(pwd) && lowercaseRegex.test(pwd) && numberRegex.test(pwd) && specialcharacterRegex.test(pwd)){
      if(!req){
        alert("Password has been met all the requirements.");
        req = true;
      }
    }
    else{
        req = false;
    }
}
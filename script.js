const email = document.getElementById("email");
const password = document.getElementById("password");
const phonenumber = document.getElementById("phone");
const submitbtn = document.getElementById("submit");

function mail() {
  const emailValue = email.value;
  if (emailValue.includes("@")) {
    return true
  } else {
    console.log("@orson bh");
    return false
  }
}
function pass() {
  const passValue = password.value;
  if (passValue.length >= 8) {
   return true
  } else {
    console.log("8 orontoi bh");
    return false
  }
}
function phone() {
  const phoneValue = phonenumber.value;
  if (phoneValue.length == 8) {
    return true
  } else {
    console.log("8 orontoi bh");
    return false
  }
}
submitbtn.addEventListener("click", function (e) {
  e.preventDefault()
  const validEmail = mail();
  const validPass = pass();
  const validPhone = phone();
  if(validEmail == true && validPass == true && validPhone == true){
    window.location.href = "list.html"
  }
 
});
console.log("asdqwer")
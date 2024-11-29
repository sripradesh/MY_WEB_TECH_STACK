function login() {
  let EMAIL = document.querySelector("#email").value
  let USERNAME = document.querySelector("#username").value
  let PASSWORD = document.querySelector("#password").value

  if ( EMAIL == "sripradesh47@gmail.com" && USERNAME == "sripradesh" && PASSWORD == "leonalmessi10.") {
    alert("LOGIN SUCCESS");
  } 
  else {
    alert("LOGIN FAILED");
  }
}

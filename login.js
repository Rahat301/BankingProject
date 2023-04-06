//default Admin Access
const userGamil = 'admin@gmail.com';
const userPassword = '1234'


document.getElementById("login_btn").addEventListener("click",function(){
  const LoginEmail = document.getElementById("login_email");
  const givenEmail = LoginEmail.value;
  
  const LoginPassword = document.getElementById("login_password");
  const givenPassword = LoginPassword.value;


  if(givenEmail === userGamil && givenPassword === userPassword)
  {
    window.location.href = "home.html";
  }else{
    alert("User Access Denied");
  }

})
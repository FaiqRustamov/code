const forms = {
  baseURL: "http://127.0.0.1:8000/",
  register: () => {
    let data = $("#register-form").serializeArray();
    let registerData = {};
    if (data) {
      registerData.username = data[0].value;
      registerData.email = data[1].value;
      registerData.password = data[2].value;
      const request = new XMLHttpRequest();
      request.open("POST", forms.baseURL + "account/register", true);
      request.setRequestHeader("content-type", "application/json");
      request.send(JSON.stringify(registerData));
      request.onload = () => {
        if (request.status != 400) {
          forms.login(registerData.username, registerData.password);
        }
      };
    }
  },
  login: (username = null, password = null) => {
    let userdata = {};
    const request = new XMLHttpRequest();
    request.open("POST", forms.baseURL + "api/token/");
    if (!username || !password) {
      //formnan gelen data ucun burda emeliyyatlar aparilacaq
    } else {
      userdata = { username, password };
    }
    if (!userdata.username && !userdata.password) {
      alert("Invalid username or password");
    }
    request.setRequestHeader("content-type", "application/json");
    request.send(JSON.stringify(userdata));
    request.onload = () => {
      let TokenData = {};
      const expiry = new Date();
      expiry.setDate(1);
      TokenData = JSON.parse(request.responseText);
      document.cookie ="token=" +TokenData.access +"; expires=" + expiry.toUTCString() + "; path=/";
      document.cookie ="refresh_token=" + TokenData.refresh +"; expires=" + expiry.toUTCString() +"; path=/";
    };
  },



};



 $(document).ready(() => {
   document.getElementById("register-submit-btn")
.addEventListener("click", () => {
       forms.register();
     });


 });




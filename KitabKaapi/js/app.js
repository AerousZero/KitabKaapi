function submit$onClickListener() {
  let fname = document.getElementById("fname").value; //var is same as let for local variables except strict typing and scope
  let phoneno = document.getElementById("phoneno").value;
  let email = document.getElementById("email").value;
  let checkFname = (fname = "") => {
      //=> is a lambda function. Shorter way of writing function (*parameters*) {...}
      //based on the idea of functional interfaces in java but with own unique implementation of js
      if (!fname.trim()) {
        let newFname = prompt(
          "Your first name can not be blank. Please enter it here"
        );
        fname = fname.value = newFname;
        if (!newFname.trim()) {
          checkFname();
        }
      }
      return true;
    },
    checkphoneno = (phoneno = "") => {
      //if parameter is not passed during invocation, phoneno var will take "" as default value
      if (!phoneno.trim()) {
        //!phoneno checks if phoneno var is empty. trim() removes spaces from a string
        let newphoneno = prompt(
          "The phoneno can not be blank. Please enter it here"
        );
        phoneno = phoneno.value = newphoneno;
        if (!newphoneno.trim()) {
          checkphoneno();
        }
      }
      return true;
    },
    checkEmail = (email = "") => {
      let newEmail;
      if (!email.trim()) {
        newEmail = prompt(
          "Your email can not be blank because we need it for further contact. Please enter it here"
        );
        email = email.value = newEmail;
        if (!newEmail.trim()) {
          checkEmail();
        }
      } else {
        newEmail = email;
      }
      if (
        !newEmail.includes("@") ||
        !newEmail.includes(".com") ||
        newEmail.includes("@.com")
      ) {
        alert("Invalid email");
        checkEmail();
      }
      return true;
    };
  if (checkFname(fname) && checkEmail(email) && checkphoneno(phoneno)) {
    alert("Your response has been sent via email. Thank you :)");
  }
}



let blogIndex = 0;

const divBlog = ["product-1", "product-2", "product-3"];

function getBlogText() {
  divBlog.forEach(function (v, i) {
    var reqDiv = document.getElementById(v);
    reqDiv.style.display = i == blogIndex ? "block" : "none";
  });
}

function blogIncrement() {
  blogIndex = (blogIndex+1)%divBlog.length;
  getBlogText();
}
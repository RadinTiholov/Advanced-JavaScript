function validate() {

    document.getElementById("submit").type = "button";

    document.getElementById("company").addEventListener("change", (e) => {

        if (document.getElementById("company").checked) {
            document.getElementById("companyInfo").style.display = "block";
        } else {
            document.getElementById("companyInfo").style.display = "none";
        }
    });

    document.getElementById("submit").addEventListener("click", (e) => {

        let flagsArray = [];
        let username = document.getElementById("username");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let confirmPass = document.getElementById("confirm-password");
        let checkBox = document.getElementById("company");
        
        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
        let passwordPattern = /^[\w]{5,15}$/;

        if (usernamePattern.exec(username.value) === null) {
            username.style.borderColor = "red";
            flagsArray.push(false);
        } else {
            username.style.borderColor = "";
            flagsArray.push(true);
        }

        if (emailPattern.exec(email.value) === null) {
            email.style.borderColor = "red";
            flagsArray.push(false);
        } else {
            email.style.borderColor = "";
            flagsArray.push(true);
        }

        if (password.value === confirmPass.value &&
            passwordPattern.exec(confirmPass.value) != null &&
            passwordPattern.exec(password.value) != null) {

            confirmPass.style.borderColor = "";
            password.style.borderColor = "";
            flagsArray.push(true);
        } else {
            confirmPass.style.borderColor = "red";
            password.style.borderColor = "red";
            flagsArray.push(false);
        }
        if (checkBox.checked) {
            let company = document.getElementById("companyNumber");

            if (company.value < 1000 || company.value > 9999) {
                company.style.borderColor = "red";
                flagsArray.push(false);
            } else {
                company.style.borderColor = "";
                flagsArray.push(true);
            }
        }
        if (!flagsArray.includes(false)) {
            document.getElementById("valid").style.display = "block";
        } else {
            document.getElementById("valid").style.display = "none";
        }
    });
}
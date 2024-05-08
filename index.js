// Function to save login details
function saveLoginDetails(email, password) {
    const userDetails = {
        email: email,
        password: password
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
}

// Function to retrieve login details
function getLoginDetails() {
    const userDetailsJSON = localStorage.getItem('userDetails');
    if (userDetailsJSON) {
        return JSON.parse(userDetailsJSON);
    } else {
        return null;
    }
}

const signUpButton = document.getElementById('signUp');
const Forgotyourpassword = document.getElementById('sendMail3');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});


function signup() {
    const email = document.getElementById('upmail').value;
    const password = document.getElementById('uppass').value;
    saveLoginDetails(email, password);
    alert("Account Created Successfully");
}

function signin() {
    const email = document.getElementById('inmail').value;
    const password = document.getElementById('inpass').value;
    const userDetails = getLoginDetails();
    
    if (userDetails && email === userDetails.email && password === userDetails.password) {
        window.location.href = 'page.html'; 
    } else {
        alert("Login failed");
       // sendMail3();
    }
}

function sendMail3() {
    var params =
    {
    email_id : document.getElementById('inmail').value,
    message : document.getElementById('inpass').value,
    to_name : "XYZ"

}
    alert("Mail sent successfully");
    emailjs.send("service_jqn8c3q", "template_ug138h8", params ).then(function (res) {
        alert("Success! " + res.status);
    });
}

function sendMail2() {
    const email = document.getElementById('inmail').value;
    alert("Mail sent successfully");
    emailjs.send("service_jqn8c3q", "template_ug138h8", { emailid: email }).then(function (res) {
        alert("Success! " + res.status);
    });
}


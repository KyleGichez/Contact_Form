/** Form Validation */
const formValidate = () => {
    let name = document.contactus.name.value;
    let email = document.contactus.email.value;
    let subject = document.contactus.subject.value;
    let message = document.contactus.message.value;
    
    // Name Validation
    if (name.value == "" || name.value == null){
        alert("Please enter your name!");

        return false;
    };

    // Email Validation
    let atposition = email.indexOf("@");
    let dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        alert("Please enter a valid e-mail address!");

        return false;
    };

    // Subject Validation
    if (subject.value == "" || subject.value == null){
        alert("Please enter a subject!");

        return false;
    };

    // Message Validation
    if (message.value == "" || message.value == null){
        alert("Please enter a message!");

        return false;
    };
};
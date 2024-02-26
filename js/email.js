
(function() {
    emailjs.init({
    publicKey: "zAwfRINytFJAZfZ1l" //paller.peter
    //publicKey: "8MIUeQwrJghC6u4Xl"
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        
        var messageContainer = document.getElementById("emailResponseContainer");
        var message = document.getElementById("emailResponse");
        emailjs.sendForm('service_9gwm38t', 'template_oun59fs', this) //paller.peter
        //emailjs.sendForm('service_uiedg7x', 'template_o1jsn3m', this)
        .then(() => {
            //console.log('start_The message has been successfully sent.');
                //console.log("messageContainer, message:", messageContainer, message);
                if (messageContainer && message){
                    message.innerHTML = "The message has been successfully sent.";
                    messageContainer.classList.add("alert-success");
                    messageContainer.classList.remove("hidden");
                }
                //console.log('end_The message has been successfully sent.');
            }, (error) => {
                message.innerHTML = "The email sending failed. Please contact us at the provided email address.";
                messageContainer.classList.add("alert-danger");
                messageContainer.classList.remove("hidden");
            });
    });
}

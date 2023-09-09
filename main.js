document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const pseudo = document.getElementById("pseudo").value;
        const email = document.getElementById("email").value;

        const data = {
            content: `Nouvelle inscription - Pseudo: ${pseudo}, Email: ${email}`
        };

        fetch("https://discord.com/api/webhooks/1150048702333997056/mh1n1zE3iGKeY9NstkkVrMFSfm6jC69Q9Lau1C_4kNs0djT5lEpinQxDew-Ce8QRkjcw", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                // Redirection de l'utilisateur après un envoi réussi
                window.location.href = "https://discord.gg/nr9EzyFu";
            } else {
                // Gestion des erreurs en cas d'échec de l'envoi
                console.error("Erreur lors de l'envoi au webhook Discord.");
            }
        })
        .catch(error => {
            console.error("Une erreur s'est produite :", error);
        });
    });
});

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
  
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var classname = document.getElementsByClassName("confetti-button");
  
  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', animateButton, false);
  }
  
  
 
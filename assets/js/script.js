document.getElementById('voir-tout').addEventListener('click', function () {
    const galleryItems = document.querySelectorAll('.gallery-item.hidden');
    galleryItems.forEach(item => {
        item.classList.remove('hidden');
    });

    document.getElementById('voir-tout').style.display = 'none';
    document.getElementById('voir-moins').style.display = 'inline-block';
});

document.getElementById('voir-moins').addEventListener('click', function () {
    const galleryItems = document.querySelectorAll('.gallery-item:nth-child(n+3)');
    galleryItems.forEach(item => {
        item.classList.add('hidden');
    });

    document.getElementById('voir-moins').style.display = 'none';
    document.getElementById('voir-tout').style.display = 'inline-block';
});

function afficherMessage() {
    document.addEventListener('DOMContentLoaded', function() {
        // Récupérez le bouton par son ID
        var bouton = document.getElementById('monBouton');

        // Attachez un gestionnaire d'événement pour le clic sur le bouton
        bouton.addEventListener('click', function() {
            // Votre code JavaScript à exécuter après avoir cliqué sur le bouton
            alert("Votre réservation a bien été prise en compte !");
        });
    });
}

afficherMessage()



function fetchMusiques(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "musiques.json", true); // Assurez-vous que "musiques.json" est accessible
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                try {
                    const data = JSON.parse(xhr.responseText); // Parse le JSON
                    const musiques = [];
                    let index = 1;

                    // Parcours des personnes dans les données JSON
                    for (const person in data) {
                        if (data.hasOwnProperty(person)) {
                            data[person].musiques.forEach(function (musique) {
                                musiques.push({
                                    titre: musique.titre,
                                    image: musique.image,
                                    membre: person,
                                    index: index
                                });
                                index++;
                            });
                        }
                    }

                    callback(musiques); // Appelle le callback avec la liste des musiques
                } catch (error) {
                    console.error("Erreur lors du parsing du JSON :", error); // Gère une erreur JSON invalide
                }
            } else {
                console.error("Erreur lors du chargement du fichier JSON :", xhr.status, xhr.statusText);
            }
        }
    };

    xhr.onerror = function () {
        console.error("Erreur réseau ou problème lors de la requête.");
    };

    xhr.send(); // Envoi de la requête
}

// Exemple d'utilisation
fetchMusiques(function (musiques) {
    console.log(musiques);
    // Vous pouvez maintenant utiliser la constante `musiques` ici
});

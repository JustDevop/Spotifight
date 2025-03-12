function fetchMusiques(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "musiques.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            const musiques = [];
            let index = 1;
            for (var person in data) {
                if (data.hasOwnProperty(person)) {
                    data[person].musiques.forEach(function(musique) {
                        musiques.push({ titre: musique.titre, image: musique.image, membre: person, index: index });
                        index++;
                    });
                }
            }
            callback(musiques);
        }
    };
    xhr.send();
}

// Exemple d'utilisation
fetchMusiques(function(musiques) {
    console.log(musiques);
    // Vous pouvez maintenant utiliser la constante `musiques` ici ou l'exporter pour une utilisation dans un autre fichier
});
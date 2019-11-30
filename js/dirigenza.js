// USARE LA FUNZIONE addDirigent PER AGGIUNGERE UN DIRIGENTE

addDirigent("images/img_avatar1.png", "Alessandro Calchi", "Presidente");
addDirigent("images/img_avatar1.png", "Luca Massari", "Presidente e Giocatore");
addDirigent("images/img_avatar1.png", "Giulio Valerio Ottaviani", "Presidente e Allenatore");

function addDirigent(photopath, namestring, description) {
    var dirigents = document.getElementById("dirigents-jar");
    var card = document.createElement("div");
    card.className = "card text-center mx-auto";
    card.style = "width:400px";
    dirigents.appendChild(card);
    var img = document.createElement("img");
    img.className = "card-img-top";
    img.src = photopath;
    card.appendChild(img);
    var div = document.createElement("div");
    div.className = "card-body";
    card.appendChild(div);
    var title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = namestring;
    div.appendChild(title); var content = document.createElement("h5");
    content.className = "card-text";
    content.textContent = description;
    div.appendChild(content);
}
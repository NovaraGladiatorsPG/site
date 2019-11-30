// USARE LA FUNZIONE addPlayer PER AGGIUNGERE UN MEMBRO DELLA SQUADRA

addPlayer("images/img_avatar1.png", "Alfredo Aloi", "Portiere");
addPlayer("images/img_avatar1.png", "Marco Baravalle", "Portiere");
addPlayer("images/img_avatar1.png", "Luca Massari", "Difensore Centrale");
addPlayer("images/img_avatar1.png", "Marco Invernizzi", "Difensore Centrale");
addPlayer("images/img_avatar1.png", "Oliver Mayor", "Terzino Sinistro, Ala Sinistra");

function addPlayer(photopath, namestring, description) {
    var players = document.getElementById("players-jar");
    var card = document.createElement("div");
    card.className = "card text-center mx-auto";
    card.style = "width:400px";
    players.appendChild(card);
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
// PER CAMBIARE L'ORDINE DELLA CLASSIFICA SPOSTARE SEMPLICEMENTE LE FUNZIONI addTeam IN BASE ALL'ORDINE DESIDERATO

var i = 1;
addTeam(i++, "Parma", 11, 25);
addTeam(i++, "Empoli", 12, 24);
addTeam(i++, "Lucchese", 11, 24);
addTeam(i++, "Entella", 12, 23);
addTeam(i++, "Cagliari", 11, 22);
addTeam(i++, "Juve Domo", 11, 21);
addTeam(i++, "Novara", 12, 19);
addTeam(i++, "Akragas", 12, 19);
addTeam(i++, "Ancona", 11, 19);
addTeam(i++, "Roma", 11, 19);
addTeam(i++, "Trapani", 12, 18);
addTeam(i++, "Genoa", 11, 16);
addTeam(i++, "Frosinone", 11, 15);
addTeam(i++, "Fiorentina", 11, 15);
addTeam(i++, "Vicenza", 12, 14);
addTeam(i++, "Brescia", 12, 12);
addTeam(i++, "Palermo", 12, 12);
addTeam(i++, "Salernitana", 12, 12);
addTeam(i++, "Foggia", 11, 10);
addTeam(i++, "Siena", 12, 10);
addTeam(i++, "Cittadella", 12, 10);
addTeam(i++, "Lecce", 12, 0);

function addTeam(position, name, matches, points) {
    var table = document.getElementById("standing");
    var line = document.createElement("tr");
    if (position == 1 || position == 2) {
        line.className = "table-success table-row";
    } else if (position == 3 || position == 4 || position == 5 || position == 6 || position == 7 || position == 8) {
        line.className = "table-info table-row";
    } else if (position == 18 || position == 19) {
        line.className = "table-warning table-row";
    } else if (position == 20 || position == 21 || position == 22) {
        line.className = "table-danger table-row";
    }
    table.appendChild(line);
    var pos = document.createElement("td");
    pos.textContent = position + "°";
    line.appendChild(pos);
    var team = document.createElement("th");
    team.textContent = name;
    line.appendChild(team);
    var n = document.createElement("td");
    n.textContent = matches;
    line.appendChild(n);
    var pti = document.createElement("th");
    pti.textContent = points;
    line.appendChild(pti);
}
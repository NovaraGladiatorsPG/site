// USARE LA FUNZIONE addMonth PER AGGIUNGERE LA STRINGA DEL MESE
// USARE LA FUNZIONE add[ Vict | Draw | Lose ] PER AGGIUNGERE UNA PARTITA

addMonth("SETTEMBRE");
addLose("28 Settembre 2019", "2-5", "C", "Empoli", "Serie B PG");
addVict("24 Settembre 2019", "1-0", "T", "Cittadella", "Serie B PG");
addVict("21 Settembre 2019", "2-0", "C", "Genoa", "Serie B PG");
addDraw("17 Settembre 2019", "1-1", "T", "Palermo", "Serie B PG");
addLose("14 Settembre 2019", "2-3", "C", "Lucchese", "Serie B PG");
addLose("4 Settembre 2019", "1-5", "T", "Siena", "Serie B PG");

addMonth("AGOSTO");
addLose("31 Agosto 2019", "1-3", "T", "Brescia", "Serie B PG");
addVict("28 Agosto 2019", "4-0", "C", "Lecce", "Coppa Italia - 3°T");
addVict("25 Agosto 2019", "4-1", "C", "Fiorentina", "Serie B PG");
addVict("17 Agosto 2019", "5-1", "C", "Roma", "Serie B PG");
addVict("13 Agosto 2019", "3-2", "T", "Akragas", "Serie B PG");
addLose("10 Agosto 2019", "0-4", "C", "Parma", "Serie B PG");
addVict("4 Agosto 2019", "5-1", "T", "Salernitana", "Serie B PG");
addVict("1 Agosto 2019", "8-0", "T", "US Avramches", "Serie B PG");

addMonth("LUGLIO");
addVict("26 Luglio 2019", "2-1", "C", "Milan", "Amichevole");
addLose("22 Luglio 2019", "0-3", "N", "Entella", "Amichevole");
addVict("13 Luglio 2019", "3-0", "T", "FC Emmen", "Amichevole");
addVict("8 Luglio 2019", "4-0", "T", "Campobasso", "Amichevole");

function addMonth(month) {
    var matches = document.getElementById("matches-jar");
    var line = document.createElement("tr");
    matches.appendChild(line);
    line.className = "table-row";
    var name = document.createElement("th");
    name.textContent = month;
    line.appendChild(name);
}

function addVict(datestring, resultstring, placestring, teamstring, leaguestring) {
    var matches = document.getElementById("matches-jar");
    var line = document.createElement("tr");
    line.className = "table-success table-row";
    matches.appendChild(line);
    var date = document.createElement("td");
    date.textContent = datestring;
    line.appendChild(date);
    var result = document.createElement("td");
    var span = document.createElement("span");
    span.className = "badge badge-success";
    span.textContent = resultstring;
    result.appendChild(span);
    line.appendChild(result);
    var place = document.createElement("td");
    place.textContent = placestring;
    line.appendChild(place);
    var team = document.createElement("th");
    team.textContent = teamstring;
    line.appendChild(team);
    var league = document.createElement("td");
    league.textContent = leaguestring;
    line.appendChild(league);
}

function addDraw(datestring, resultstring, placestring, teamstring, leaguestring) {
    var matches = document.getElementById("matches-jar");
    var line = document.createElement("tr");
    line.className = "table-warning table-row";
    matches.appendChild(line);
    var date = document.createElement("td");
    date.textContent = datestring;
    line.appendChild(date);
    var result = document.createElement("td");
    var span = document.createElement("span");
    span.className = "badge badge-warning";
    span.textContent = resultstring;
    result.appendChild(span);
    line.appendChild(result);
    var place = document.createElement("td");
    place.textContent = placestring;
    line.appendChild(place);
    var team = document.createElement("th");
    team.textContent = teamstring;
    line.appendChild(team);
    var league = document.createElement("td");
    league.textContent = leaguestring;
    line.appendChild(league);
}

function addLose(datestring, resultstring, placestring, teamstring, leaguestring) {
    var matches = document.getElementById("matches-jar");
    var line = document.createElement("tr");
    line.className = "table-danger table-row";
    matches.appendChild(line);
    var date = document.createElement("td");
    date.textContent = datestring;
    line.appendChild(date);
    var result = document.createElement("td");
    var span = document.createElement("span");
    span.className = "badge badge-danger";
    span.textContent = resultstring;
    result.appendChild(span);
    line.appendChild(result);
    var place = document.createElement("td");
    place.textContent = placestring;
    line.appendChild(place);
    var team = document.createElement("th");
    team.textContent = teamstring;
    line.appendChild(team);
    var league = document.createElement("td");
    league.textContent = leaguestring;
    line.appendChild(league);
}
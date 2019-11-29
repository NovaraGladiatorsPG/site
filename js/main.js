// CONTENUTO ARTICOLI
var article20191129 = "Sconfitta pesante (2-5) per noi, contro l'Empoli FC esports! Per noi hanno segnato Oliver Mayor e Iacopo Mezzadri, entrambi i gol segnati passando noi in vantaggio. Secondo tempo disastroso per noi, a causa di un super Samuel Massessi che ha siglato una tripletta. Grazie a tutti per il supporto!!! #NovarAzzurra";
var article20191127 = "Novara Gladiators VS Empoli FC esports! Mercoledi 27 Novembre 2019, alle 20.30! Su https://www.twitch.tv/progettogaming/ Scrivi in chat \"!fan Novara\", per sostenerci. #NovarAzzurra #Matchday #ProgettoGaming"

// CREAZIONE ARTICOLI
createArticle("NOVARA GLADIATORS - Empoli FC esports 2-5", "2019-11-29", article20191129, "Oliver Mayor");
createArticle("NOVARA GLADIATORS - Empoli FC esports", "2019-11-27", article20191127, "Oliver Mayor (test)");

// FUNZIONE DI CREAZIONE ARTICOLO
function createArticle(title, date, articleText, articleAuthor) {
    var articles = document.getElementById("article-jar");
    var article = document.createElement("article");
    articles.appendChild(article);
    var header = document.createElement("header");
    article.appendChild(header);
    var h1 = document.createElement("h1");
    h1.className = "article-title";
    h1.textContent = title;
    header.appendChild(h1);
    var time = document.createElement("time");
    time.className = "article-time";
    time.dateTime = date + "T00:00-00:00";
    time.textContent = date;
    header.appendChild(time);
    var text = document.createElement("p");
    text.className = "article-text";
    text.textContent = articleText;
    article.appendChild(text);
    var footer = document.createElement("footer");
    article.appendChild(footer);
    var author = document.createElement("p");
    author.className = "article-author";
    author.textContent = articleAuthor;
    footer.appendChild(author);
}
// CONTENUTO ARTICOLI
var article20191129 = "Con l'inizio di dicembre (quasi) è finalemnte nato il nuovo sito web dei Novara Gladiators! Creato da Alfredo Aloi, portiere della squadra, sarà un punto di riferimento per i tifosi per rimanere aggiornati sulle sorti e le notizie della squadra!";

// CREAZIONE ARTICOLI
createArticle("Inaugurato il Sito Web dei Novara Gladiators", "2019-11-29", article20191129, "Alfredo Aloi");

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
/*1 fonction qui récupère le nombre d'article (les articles sont identifiés par la classe article et présents
 *dans la div ayant l'id newsList) sur la page et l'affiche dans la balise h3
 */
function displayArticleCount() { //pour déclarer une fonction on utilise le mot clé function, suivi du nom puis des paramètres entre parenthèses
    const newsList = document.querySelector('#newsList');
    const articles = newsList.querySelectorAll('#newsList .article'); //retourne une liste d'élément HTML
    const h3 = document.querySelector('h3');

    if (articles.length > 1)
        h3.innerText = `There are ${articles.length} articles`;
    else
        h3.innerText = `There is ${articles.length} article`;
}
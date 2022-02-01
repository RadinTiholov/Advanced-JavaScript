function getArticleGenerator(articles) {
    function showNext(){
        if (articles.length > 0) {
            let content = document.getElementById('content');
            let article = document.createElement('article');
            article.textContent = articles.shift();
            content.appendChild(article);
        }
    }
    return showNext;
}

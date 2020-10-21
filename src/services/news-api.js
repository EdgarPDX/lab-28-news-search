export const getArticles = keyword => {
    return fetch(`
    https://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.API_KEY}`)
    .then(res => res.json)
    .then(json => json.articles)
    .then(articles => articles.map(article => ({
        id: article.source.id,
        title: article.title,
        author: article.author,
        description: article.description
    })))
}
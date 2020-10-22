

export const getArticles = keyword => {
  return fetch(`
  https://newsapi.org/v2/everything?q=
    ${keyword}&apiKey=e87d32e59f9a4846be060f46555c13b3`)
    .then(res => res.json())
    .then(json => json.articles)
    .then(articles => articles.map(article => ({
      title: article.title,
      author: article.author,
      description: article.description
    })));
};

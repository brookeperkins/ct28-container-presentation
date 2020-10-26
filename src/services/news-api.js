const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const getHeadlines = () => {
  // eslint-disable-next-line max-len
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`)
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
      title: article.title,
      author: article.author,
      description: article.description
    })));
};

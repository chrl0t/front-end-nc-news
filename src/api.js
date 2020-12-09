import axios from 'axios';

export const fetchArticles = (query) => {
  return axios
    .get('https://chazzys-nc-news.herokuapp.com/api/articles', {
      params: query
    })
    .then((response) => {
      return response.data.articles;
    });
};

export const fetchArticle = (article_id) => {
  return axios
    .get(`https://chazzys-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article[0];
    });
};

export const changeArticleVotes = (article_id, votes) => {
  return axios
    .patch(`https://chazzys-nc-news.herokuapp.com/api/articles/${article_id}`, {
      inc_votes: votes
    })
    .then(({ data }) => {
      return data.article[0];
    });
};

export const fetchComments = (article_id) => {
  return axios
    .get(
      `https://chazzys-nc-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then((response) => {
      return response.data.comments;
    });
};

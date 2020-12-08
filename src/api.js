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

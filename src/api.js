import axios from 'axios';

export const fetchArticles = () => {
  return axios
    .get('https://chazzys-nc-news.herokuapp.com/api/articles')
    .then((response) => {
      return response.data.articles;
    });
};

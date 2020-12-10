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

export const postComment = (comment, article_id) => {
  return axios
    .post(
      `https://chazzys-nc-news.herokuapp.com/api/articles/${article_id}`,
      comment
    )
    .then((response) => {
      return response.data.newComment[0];
    });
};

export const changeCommentVotes = (votes, comments_id) => {
  return axios
    .patch(
      `https://chazzys-nc-news.herokuapp.com/api/comments/${comments_id}`,
      {
        inc_votes: votes
      }
    )
    .then(({ data }) => {
      return data.comment[0];
    });
};

export const removeComment = (comments_id) => {
  return axios.delete(
    `https://chazzys-nc-news.herokuapp.com/api/comments/${comments_id}`
  );
};

export const fetchUser = (username) => {
  return axios
    .get(`https://chazzys-nc-news.herokuapp.com/api/users/${username}`)
    .then(({ data }) => {
      return data.user[0];
    });
};

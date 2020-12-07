import React from 'react';
import axios from 'axios';

class Article extends React.Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    this.fetchArticle().then((article) => {
      this.setState({ article, isLoading: false });
    });
  }

  fetchArticle = () => {
    const { article_id } = this.props;
    return axios
      .get(`https://chazzys-nc-news.herokuapp.com/api/articles/${article_id}`)
      .then(({ data }) => {
        return data.article;
      });
  };

  render() {
    const { article, isLoading } = this.state;
    if (isLoading) {
      return <h1>Loading Article...</h1>;
    }
    return (
      <div className='article'>
        <h1 className='article-title'>{article[0].title}</h1>
        <p className='article-body'>{article[0].body}</p>
      </div>
    );
  }
}

export default Article;

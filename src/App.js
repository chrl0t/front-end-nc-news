import './App.css';
import Header from './components/Header';
import Topics from './components/Topics';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import { Router } from '@reach/router';

function App() {
  return (
    <div className='body'>
      <Header />
      <Router className='container'>
        <ArticlesList path='/' />
        <Article path='/:article_id' />
        <Topics path='/topics' />
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Topics from './components/Topics';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import { Router } from '@reach/router';

function App() {
  return (
    <div className='body'>
      <Header />
      <Nav />
      <Topics />
      <Router>
        <ArticlesList path='/' />
        <Article path='/:article_id' />
      </Router>
    </div>
  );
}

export default App;

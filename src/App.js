import './App.css';
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import User from './components/User';
import { Router } from '@reach/router';

function App() {
  return (
    <div className='body'>
      <Header />
      <Router className='container'>
        <ArticlesList path='/' />
        <Article path='/:article_id' />
        <User path='/users/:username' />
      </Router>
    </div>
  );
}

export default App;

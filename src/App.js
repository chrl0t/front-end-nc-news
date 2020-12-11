import './App.css';
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import ErrorMessage from './components/ErrorMessage';
import User from './components/User';
import { Router } from '@reach/router';

function App() {
  return (
    <div className='body'>
      <Header />
      <Router className='container'>
        <ArticlesList path='/' />
        <Article path='/articles/:article_id' />
        <User path='/users/:username' />
        <ErrorMessage default errorMessage='404 - Page Not Found' />
      </Router>
    </div>
  );
}

export default App;

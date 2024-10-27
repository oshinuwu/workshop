
import './App.css';
import Home from './home';
import About from './about';
import Example from './head';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import css from './App.module.css';
function App() {

  return (
    <BrowserRouter>
      <nav className={css.menu}>
        <ul>
        <li><Link to="/">Home</Link></li>

        <span></span>
        <li><Link to="/about">About</Link></li>
       

        <span></span>
        <li><Link to="/examples">Example</Link></li>
        </ul>
      </nav>

      {2 > 5 ? <h1 style={{ color: 'azure' }}>it is more than 5</h1> : <h1 style={{ color: 'azure' }}>it is less than or equal to 5</h1>}
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/examples" Component={Example} />
      </Routes>
    </BrowserRouter>
  );


}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import ProjectPage from './pages/ProjectPage.tsx';
/*
<nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
*/ 
const App = () => {
  return (
    <Router>
      <div>
        

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
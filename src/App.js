import './App.css';
import Header from './Components/landingPage/Header';
import ProjectName from './Components/landingPage/ProjectName';
import SectionTitle from './Components/landingPage/SectionTitle';
import classes from './CSS/landing.module.css'

function App() {
  return (
    <div className="App">
      {/* opening section */}
      <Header></Header>
      <img src="" alt="" className="banner-img" />
      <ProjectName></ProjectName>

      <div className="project-section">
        <SectionTitle></SectionTitle>
        <p></p>
        <img src="" alt="" />
      </div>
      <div className="history-section">

      </div>

      <div className="footer-section"></div>

    </div>
  );
}

export default App;

//TEST COMMENT BY JORDAN
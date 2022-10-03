import './App.css';
import PermanentDrawerLeft from './components/Sidebar'
import NavBar from './components/Appbar'
import TopRow from './components/TopRow'
import SecondRow from './components/SecondRow'
import ThirdRow from './components/ThirdRow'
import FourthRow from './components/FourthRow'

function App() {
  return (
    <div className="App">
      
        <div className="left-container">  
          <PermanentDrawerLeft/>
        </div>
        <div className="right-container">
          <div className="AppBar">
            <NavBar/>
          </div>
          <div className="main-body">
            <div className="top-row">
              <TopRow/>
            </div>
            <div className="second-row">
              <SecondRow/>
            </div>
            <div className="third-row">
              <ThirdRow/>
            </div>
            <div className="fourth-row">
              <FourthRow/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;

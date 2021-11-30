import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Banner from './components/Home/Banner/Banner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="banner" element={<Banner />} /> */}
          {/* <Route path=":teamId" element={<Team />} /> */}
          {/* <Route path="new" element={<NewTeamForm />} /> */}

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from "./components/MainPage";
import Chungus from "./components/Chungus";

/*

Best place to leave notes. Roughly good idea to proceed as listed. Mark done:
-make pages somewhat functional
-add router
-add elements/header, footer, search etc.
-make pages somewhat interconnected
-make pages actually functional (connect to db, be)
-make pages actually ACTUALLY functional and not poopy
-clean up css
-add tests
-remove all this chatter

 */

/* 25.3
oh god oh fuck how do i add roter - DONE
anyway i wanna ping /chungus and /sendnudes&nude_type=tasteful
i forgot we was fuckin in react and not vue AAAAAAAAAAAAAAhh :( - well im sorry i can't do anything about that
 */

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/chungus" element={<Chungus/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;

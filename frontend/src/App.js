import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage";

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
 */

function App() {
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;

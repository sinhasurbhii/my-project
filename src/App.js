import './App.css'; 
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

function App() {
  return (
    <> 
<Router>   
<Navbar title = "TextUtils" aboutText= "About us"/>
<div className="container my-3">
        <Switch>
            <Route path="/about">
              <About />
            </Route>
            
            <Route path="/">
              <TextForm heading= "Enter the text to analyse"/>
            </Route>
        </Switch>      
 </div>   
</Router>

  </>
  );
}

export default App;

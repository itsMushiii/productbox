import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Items from "./Components/Items";
import Checkout from "./Components/Checkout";
import NewItem from "./Components/NewItem";
import ItemDetails from "./Components/ItemDetails";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/add-item' component={NewItem} />
          <Route exact path='/items' component={Items} />
          <Route path='/checkout' component={Checkout} />
          <Route exact path='/item/:id' component={ItemDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

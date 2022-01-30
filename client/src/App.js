import './App.css';
import {Switch, Route} from 'react-router-dom';
import Products from './components/Products';
import Detail from './components/Detail';
import Update from './components/Update';

function App() {

  return (
      <div className="App">
        <Switch>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/products/:id" component={Detail}/>
          <Route exact path="/products/update/:id" component={Update}/>  
        </Switch>
      </div>
  );
}

export default App;
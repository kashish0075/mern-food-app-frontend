import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom';
import AllFood from './pages/AllFoods';
import MyCart from './pages/MyCart';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
      <Route path="/" exact>
           <Redirect to="/allfoods"/>
        </Route>
        <Route path="/allfoods" exact>
           <AllFood/>
        </Route>
        <Route path="/my-cart" exact>
          <MyCart/>
        </Route>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;

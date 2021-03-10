import { Route, Switch } from 'react-router';
import Layout from './containers/Layout/Layout';
import Profile from './containers/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Layout>        
        <Switch>
          <Route exact path="/"><Profile/></Route>
          <Route exact path="/profile"><Profile/></Route>
          <Route exact path="/" render={() => <div>hello world</div>}/>
        </Switch>
        
      </Layout>
    </div>
  );
}

export default App;

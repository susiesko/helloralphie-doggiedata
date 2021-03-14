import { Route, Switch } from 'react-router';

import Layout from './containers/Layout/Layout';
import Profile from './containers/Profile/Profile';
import DogLog from './containers/DogLog/DogLog';
import BasicInfo from './containers/DogLog/BasicInfo/BasicInfo';
import AdditionalInfo from './containers/DogLog/AdditionalInfo/AdditionalInfo';

function App() {
  return (
    <div className="App">
      <Layout>        
        <Switch>
          <Route exact path="/"><Profile/></Route>
          <Route exact path="/doglog/additional-info"><AdditionalInfo/></Route>
          <Route exact path="/doglog/basic-info"><BasicInfo/></Route>
          <Route exact path="/doglog"><DogLog/></Route>
          <Route exact path="/profile"><Profile/></Route>
          <Route exact path="/" render={() => <div>hello world</div>}/>
        </Switch>          
      </Layout>
    </div>
  );
}

export default App;

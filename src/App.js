import { Route, Switch } from 'react-router';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Layout from './containers/Layout/Layout';
import Profile from './containers/Profile/Profile';
import DogLog from './containers/DogLog/DogLog';
import BasicInfo from './containers/DogLog/BasicInfo/BasicInfo';
import AdditionalInfo from './containers/DogLog/AdditionalInfo/AdditionalInfo';

import ButtonStyled from './components/Elements/ButtonStyled/ButtonStyled';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#553635'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout>        
          <ButtonStyled>Hello World</ButtonStyled>
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
    </ThemeProvider>
  );
}

export default App;

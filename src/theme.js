import { createMuiTheme } from '@material-ui/core/styles';

const primaryMain = '#553635';
const primaryLight = '#B69593';
const primaryContrastText = '#FCEFD5';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: primaryLight,
      main: primaryMain,
      contrastText: primaryContrastText
    }
  }
});

export default theme;
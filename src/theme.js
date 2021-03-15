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
  },
  typography: {
    fontFamily: [
      'Lato',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue'
    ].join(','),
    color: primaryLight
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '10px'
      }
    },
    MuiNativeSelect: {
      root: {
        borderRadius: '5px'
      }
    },
    MuiSelect: {
      filled: {
        padding: '8px',
        backgroundColor: primaryLight,
        color: primaryContrastText,
        '&:focus': {
          backgroundColor: primaryLight,
          color: primaryContrastText
        }
      },
      iconFilled: {
        color: primaryContrastText
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottomColor: primaryLight
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottomColor: primaryLight
        }
      }
    },
    MuiInputBase: {
      input: {
        color: primaryLight,
        '&:focus': {
          color: primaryMain
        }
      }
    },
    MuiInputLabel: {
      root: {
        color: primaryLight
      }
    }
  }
});

export default theme;
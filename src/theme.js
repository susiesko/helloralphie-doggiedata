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
    color: primaryLight,    
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '10px'
      },
      containedSizeLarge: {
        padding: '20px',
        fontSize: '14px',
        letterSpacing: '1.4px',
        fontWeight: 700
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
    },
    MuiToggleButton: {
      root: {
        backgroundColor: primaryLight,
        color: primaryContrastText,
        borderRadius: '0px',
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '1rem',
        '&$selected': {
          backgroundColor: primaryMain,
          color: primaryContrastText
        },
        '&:hover': {
          color: primaryMain
        }
      },
    }
    // MuiToggleButtonGroup: {
    //   root: {
    //     flexWrap: 'wrap',
    //     justifyContent: 'space-between'
    //   }
    // }
  }
});

export default theme;
import { createTheme } from '@material-ui/core/styles';
/* import purple from '@material-ui/core/colors/purple'; */

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true 
    }
  },
  typography: {
    // Use the system font.
    fontFamily: 'fontCirXxttReg',
    fontSize: 12
  },
});

export default theme;
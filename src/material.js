import { 
    Button,
    Toolbar,
    AppBar,
    IconButton,
    Typography,
    Container,
    Card
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

export {
    Button,
    Toolbar,
    AppBar,
    IconButton,
    Typography,
    Container,
    Card
}

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
      grayscale: {
        ultralight: '#dadada',
        light: '#909090',
        medium: '#707070',
        dark: '#505050',
      }
    },
  });

export function MatStyle() {
    return ({
        toolbar: {
            color: theme.palette.primary.contrastText,
            'background-color': theme.palette.primary.main,
            width: '100%'
        },
        button: {
            position: 'fixed',
            right: '2%'
        },
        card: {
            margin: 'auto',
            'margin-top': '2rem',
            width: '50%',
            padding: '10px',
            'background-color': theme.palette.grayscale.ultralight
        },
        'text-center': {
            'text-align': 'center',
        }
    })
}
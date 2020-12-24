import { 
    IconButton, Button, Icon,
    Toolbar, AppBar,
    Typography,
    Container,
    Card,
    TextField, FormControl, Input, FilledInput, OutlinedInput, InputLabel, FormHelperText, InputAdornment,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { createMuiTheme } from '@material-ui/core/styles';

export {
    IconButton, Button, Icon,
    Toolbar, AppBar,
    Typography,
    Container,
    Card,
    TextField, FormControl, InputLabel, Input, FilledInput, OutlinedInput, FormHelperText, InputAdornment,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    Visibility, VisibilityOff,
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
        submitBtn: {
          color: theme.palette.primary.contrastText,
          'background-color': theme.palette.primary.main
        },
        card: {
            margin: 'auto',
            'margin-top': '2rem',
            width: '50%',
            padding: '10px',
            'background-color': theme.palette.grayscale.ultralight
        },
        uploadBtn: {
          'background-color': theme.palette.grayscale.light,
          color: theme.palette.primary.contrastText
        },
        red : {
          color: theme.palette.secondary.main,
          'background-color': theme.palette.grayscale.dark,
          'border-radius': '1rem',
          'cursor': 'pointer'
        },
        textCenter: {
            'text-align': 'center',
        },
        'mt-1': {
          'margin-top': '1rem'
        },
        'mr-1': {
          'margin-right': '1rem'
        },
        input: {
          'font-family': 'Verdana,sans-serif',
          height: '3.5rem',
        }
    })
}
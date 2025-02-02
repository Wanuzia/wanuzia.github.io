import { createTheme } from '@mui/material/styles';

const colors = {
    sandyBrown: '#EE9B63',
    burntUmber: '#933731',
    licorice: '#240D07',
    sealBrown: '#5E341B',
    rose: '#E93C81',
    primary: '#C44B03',
    secondary: '#dc004e',
    text: {
        primary: '#000000',
        secondary: '#666666',
    },
    background: {
        default: '#f5f5f5',
        paper: '#ffffff',
    },
    };

const theme = createTheme({
palette: {
        primary: {
          main: colors.sandyBrown,
          contrastText: '#ffffff', // Cor do texto contrastante
        },
        secondary: {
          main: '#dc004e', // Cor secundária
          contrastText: '#ffffff', // Cor do texto contrastante
        },
        text: {
          primary: '#000000', // Cor do texto principal
          secondary: '#666666', // Cor do texto secundário
        },
        background: {
          default: '#f5f5f5', // Cor de fundo padrão
          paper: '#ffffff', // Cor do papel
        },
      },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.sandyBrown,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colors.text.primary,
        },
        h1: {
        color: colors.text.primary,
        fontSize: '2rem',
        fontWeight: 700,
        },
        h2: {
        color: colors.text.primary,
        fontSize: '1.5rem',
        fontWeight: 700,
        },
        h3: {
        color: colors.text.primary,
        fontSize: '1.17rem',
        fontWeight: 700,
        },
        h4: {
        color: colors.text.primary,
        fontSize: '1rem',
        fontWeight: 700,
        },
        h5: {
        color: colors.text.primary,
        fontSize: '0.83rem',
        fontWeight: 700,
        },
        h6: {
        color: 'red',
        fontSize: '0.67rem',
        fontWeight: 700,
        },
    },
    },
  },
});

export default theme;

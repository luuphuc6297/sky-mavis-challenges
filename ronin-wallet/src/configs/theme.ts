import { createTheme } from '@mui/material/styles';
import SFProText from '../assets/fonts/SFProText-Regular.ttf';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1C94F4',
        },
        text: {
            primary: '#151A30',
        },
    },
    typography: {
        fontFamily: 'SF Pro Text',
        h1: { fontSize: 32, fontWeight: 700, lineHeight: '32px' },
        caption: { fontSize: 14, fontWeight: 400, lineHeight: '20px' },
        button: { fontSize: 14, fontWeight: 600, lineHeight: '20px', textTransform: 'none' },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                font-family: 'SF Pro Text';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('SFProText'), local('SFProText-Regular'), url(${SFProText}) format('ttf');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
            `,
        },
    },
});

export default theme;

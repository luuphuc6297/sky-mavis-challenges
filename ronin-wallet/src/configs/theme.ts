import { createTheme } from '@mui/material/styles';
import SFProText from 'assets/fonts/SFProText-Regular.ttf';

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
                src: url(${SFProText}) format('ttf');
                }
            `,
        },
    },
    shape: {
        borderRadius: 8,
    },
});

export default theme;

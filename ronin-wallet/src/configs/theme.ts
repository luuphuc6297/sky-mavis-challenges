import { createTheme } from '@mui/material/styles';
const SFProTextTTF = '/fonts/SFProText-Regular.ttf';
const SFProTextHeavyTFF = '/fonts/SFProText-Heavy.ttf';
declare module '@mui/material/styles/createTypography' {
    interface TypographyOptions {
        heavy: string;
    }
    interface Typography {
        heavy: string;
    }
}

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
        fontFamily: ['SF Pro Text'].join(','),
        heavy: 'SF Pro Text Heavy',
        h1: { fontSize: 32, fontWeight: 700, lineHeight: '32px' },
        body1: { fontSize: 16, fontWeight: 700, lineHeight: '20px' },
        body2: { fontSize: 14, fontWeight: 600, lineHeight: '20px' },
        caption: { fontSize: 14, fontWeight: 400, lineHeight: '20px' },
        button: { fontSize: 14, fontWeight: 600, lineHeight: '20px', textTransform: 'none' },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderColor: '#C5CEE0',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: SF Pro Text;
                    src: url('${SFProTextTTF}') format('truetype');
                    font-weight: normal;
                    font-style: normal;
                }
            `,
        },
    },
    shape: {
        borderRadius: 8,
    },
    breakpoints: {
        values: {
            xs: 480,
            sm: 768,
            md: 1080,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;

import { createTheme } from '@mui/material/styles';
const SFProTextTTF = '/fonts/SFProText-Regular.ttf';
const SFProTextMediumTFF = '/fonts/SFProText-Medium.ttf';
declare module '@mui/material/styles/createTypography' {
    interface TypographyOptions {
        medium: string;
    }
    interface Typography {
        medium: string;
    }
}

const SFProText = `@font-face {
    font-family: SF Pro Text;
    src: url(${SFProTextTTF}) format("opentype");
}`;

const SFProTextMedium = `@font-face {
    font-family: SF Pro Text Medium;
    src: url(${SFProTextMediumTFF}) format("opentype");
}`;

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
        medium: 'SF Pro Text Medium',
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
            ${SFProText}
            ${SFProTextMedium}
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

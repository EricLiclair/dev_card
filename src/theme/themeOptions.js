import { createTheme } from '@mui/material/styles';

const themeOptions = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#376CF5',
            light: '#5AA2FB',
            dark: '#3777F5',
        },
        secondary: {
            main: '#111622',
            dark: '#090b12',
        },
        background: {
            default: '#F6F8FA',
            paper: '#FFFFFF',
        },
        text: {
            secondary: '#858C9A',
            primary: '#111622',
        },
    },
    typography: {
        fontFamily: 'Poppins',
    },

    components: {
        MuiTooltip: {
            defaultProps: {
                arrow: true,
                placement: 'bottom-end'
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#111622'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    border: 0,
                    borderRadius: 10,
                    height: 56,
                },
            },
        },
        MuiAppBar: {
            defaultProps: {
                color: 'transparent',
                elevation: 0,
                position: 'static'
            }
        }
    },
    shape: {
        borderRadius: 10,
    },
});

export default themeOptions;
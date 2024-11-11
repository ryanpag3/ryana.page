
export type ColorType = 'dark' | 'light';

export type Theme = {
    background: {
        primary: string;
        secondary: string;
    },
    text: {
        primary: string;
        secondary: string;
        accent: string;
    },
    button: {
        primary: {
            background: string;
            onHover: string;
            text: string;
            textOnHover: string;
        }
    }
}

type Colors = {
    dark: Theme,
    light: Theme
}


const Colors: Colors = {
    dark: {
        background: {
            primary: '#333',
            secondary: '#222'
        },
        text: {
            primary: '#fff',
            secondary: '#b6b6b6',
            accent: '#00beae'
        },
        button: {
            primary: {
                background: '#80b8b4',
                onHover: '#5d8784',
                text: '#000000',
                textOnHover: '#ffffff'
            }
        }

    },
    light: {
        background: {
            primary: '#fff',
            secondary: '#eee'
        },
        text: {
            primary: '#333',
            secondary: '#555',
            accent: '#006675'
        },
        button: {
            primary: {
                background: '#006675',
                onHover: '#80b8b4',
                text: '#fff',
                textOnHover: '#000000'
            }
        }
    }
}

export default Colors;

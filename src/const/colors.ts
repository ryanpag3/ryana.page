
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
        }
    }
}

export default Colors;

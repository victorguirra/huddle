import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: '#FFF',
            black: string;

            pink: string;
            lightPink: string;
            red: string;
            darkCyan: string;
            paleBlue: string;
        }
    }
}
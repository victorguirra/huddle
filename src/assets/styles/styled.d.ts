import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string;
            black: string;

            pink: string;
            lightPink: string;
            red: string;
            darkCyan: string;
            paleBlue: string;
            gray: string;
        }
    }
}
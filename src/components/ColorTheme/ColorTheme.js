import { createGlobalStyle } from 'styled-components/macro';

const ColorTheme = createGlobalStyle`
:root {
    
    --color-values-white: 0deg 0% 100%;

    --color-values-gray-100: 185deg 5% 95%;
    --color-values-gray-300: 190deg 5% 80%;
    --color-values-gray-500: 196deg 4% 60%;
    --color-values-gray-700: 220deg 5% 40%;
    --color-values-gray-900: 220deg 3% 20%;

    --color-values-primary: 340deg 65% 47%;
    --color-values-secondary: 240deg 60% 63%;
    

    --color-white: hsl(var(--color-values-white));
    --color-primary: hsl(var(--color-values-primary));
    --color-secondary: hsl(var(--color-values-secondary));

    --color-gray-100: hsl(var(--color-values-gray-100));
    --color-gray-300: hsl(var(--color-values-gray-300));
    --color-gray-500: hsl(var(--color-values-gray-500));
    --color-gray-700: hsl(var(--color-values-gray-700));
    --color-gray-900: hsl(var(--color-values-gray-900));
}`;

export default ColorTheme;
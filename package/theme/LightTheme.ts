import type { ThemeTypes } from '@/types/theme/ThemeTypes';

const LIGHT_THEME: ThemeTypes = {
    name: 'LIGHT_THEME',
    dark: false,
    variables: {
        'border-color': '#e0e6eb',
        'border-opacity': 1,
    },
    colors: {
        // Brand colors: Navy primary and Glaucous secondary (no yellow)
        primary: '#0E0971', // Navy Blue (R14 G9 B113)
        secondary: '#507CC8', // Glaucous as a supporting blue
        muted: '#E0E0E0',
        white: '#ffffff',
        lightgray: '#F4F8FA',
        dark: '#1f2a2e',
        surface: '#F4F8FA',
        accent: '#507CC8'
    }
};

export { LIGHT_THEME };

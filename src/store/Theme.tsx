import {create} from 'zustand'


interface themes {
    name: 'dark' | "light",
    colors: {
        primary: string,
        secondary: string,
        font: string,
        accent: string
    }
}

interface themeStore {
    theme: themes["name"]
    setTheme: (theme: themes["name"]) => void
    getTheme: () => themes

}

const Themes: themes[] = [
    {
        name: 'dark',
        colors: {
            primary: 'bg-blue-500',
            secondary: 's',
            font: 'S',
            accent: 's'
        }
    },
    {
        name: 'light',
        colors: {
            primary: 'bg-amber-500',
            secondary: 's',
            font: 'S',
            accent: 's'
        }
    }
]

export const useThemeStore = create<themeStore>()((set,get) => (
    {
        theme: 'dark',
        setTheme: (newTheme) => set(() => ({theme: newTheme})),
        getTheme: () => {
            let currentThemeName = get().theme
            let currentTheme = Themes.find((curr) => curr.name === currentThemeName)
            return currentTheme ?? Themes[0]
            
        } 

    }
))


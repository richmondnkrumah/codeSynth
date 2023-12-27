import {create} from 'zustand'
import THEMES from '@/Constant/themes'


interface themes {
    name: 'dark' | "light" | "test",
    colors: {
        primary: string,
        secondary: string,
        accent: string,
        editor: string
    }
}

interface themeStore {
    theme: themes["name"]
    setTheme: (theme: themes["name"]) => void
    getTheme: () => themes

}


export const useThemeStore = create<themeStore>()((set,get) => (
    {
        theme: 'dark',
        setTheme: (newTheme) => set(() => ({theme: newTheme})),
        getTheme: () => {
            let currentThemeName = get().theme
            let currentTheme = THEMES.find((curr) => curr.name === currentThemeName)
            return currentTheme ?? THEMES[0]
            
        } 

    }
))


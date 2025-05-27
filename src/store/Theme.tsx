import {create} from 'zustand'
import THEMES from '@/constant/themes'

export type themesTypes = {
    name: string,
    colors: {
        primary: string,
        secondary: string,
        accent: string,
        editor: string,
        font: string,
        foreground: string,
        editorFont: string

    }
}

interface themeStore {
    theme: themesTypes["name"]
    setTheme: (theme: themesTypes["name"]) => void
    getTheme: () => themesTypes

}

export const useThemeStore = create<themeStore>()((set,get) => (
    {
        theme: 'light',
        setTheme: (newTheme) => set(() => ({theme: newTheme})),
        getTheme: () => {
            let currentThemeName = get().theme
            let currentTheme = THEMES.find((curr) => curr.name === currentThemeName)
            return currentTheme ?? THEMES[0]
        } 
    }
))


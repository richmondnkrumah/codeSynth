import {create} from 'zustand'
import THEMES from '@/constant/themes'

// safety purposes
// "dark"|"light"|"test"|"red"|"green"|"purple"|"blue"|"orange"|"yellow"|"silver"|"teal"|"maroon"|"olive"|"navy"|"pink"|"cyan"|"coral"|"indigo"|"gold"|"salmon"|"sky-blue"|"dark-olive"|"orchid"|"lime"|"tan"|"cadet-blue"|"tomato"|"medium-slate-blue"|"light-coral"|"dark-khaki"|"slate-gray"|"sandy-brown"|"firebrick"|"plum"|"dark-cyan"|"thistle"|"medium-purple"|"dark-salmon"|"yellow-green"|"sienna"|"cadmium-yellow"|"rosy-brown"|"medium-aquamarine"|"indian-red"|"pale-violet-red"|"medium-sea-green"|"orange-red"|"dark-orchid"|"steel-blue"|"dark-green"|"light-pink"|"medium-spring-green"|"dark-turquoise"|"medium-violet-red"|"peru"|"chocolate"|"dark-olive-green"|"dark-magenta"|"dark-orange"|"dark-violet"|"deep-pink"|"firebrick"|"green-yellow"|"light-blue"|"light-green"|"light-salmon"|"navajo-white"|"royal-blue""dark"|"light"|"test"|"red"|"green"|"purple"|"blue"|"orange"|"yellow"|"silver"|"teal"|"maroon"|"olive"|"navy"|"pink"|"cyan"|"coral"|"indigo"|"gold"|"salmon"|"sky-blue"|"dark-olive"|"orchid"|"lime"|"tan"|"cadet-blue"|"tomato"|"medium-slate-blue"|"light-coral"|"dark-khaki"|"slate-gray"|"sandy-brown"|"firebrick"|"plum"|"dark-cyan"|"thistle"|"medium-purple"|"dark-salmon"|"yellow-green"|"sienna"|"cadmium-yellow"|"rosy-brown"|"medium-aquamarine"|"indian-red"|"pale-violet-red"|"medium-sea-green"|"orange-red"|"dark-orchid"|"steel-blue"|"dark-green"|"light-pink"|"medium-spring-green"|"dark-turquoise"|"medium-violet-red"|"peru"|"chocolate"|"dark-olive-green"|"dark-magenta"|"dark-orange"|"dark-violet"|"deep-pink"|"firebrick"|"green-yellow"|"light-blue"|"light-green"|"light-salmon"|"navajo-white"|"royal-blue"
export type themesTypes = {
    name: string,
    colors: {
        primary: string,
        secondary: string,
        accent: string,
        editor: string,
        font: string
    }
}

interface themeStore {
    theme: themesTypes["name"]
    setTheme: (theme: themesTypes["name"]) => void
    getTheme: () => themesTypes

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


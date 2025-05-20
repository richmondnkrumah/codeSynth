// TODO: define monaco config to each theme object for easy integration for monaco
interface themes {
    name: "dark"|"light"|"test"|"red"|"green"|"purple"|"blue"|"orange"|"yellow"|"silver"|"teal"|"maroon"|"olive"|"navy"|"pink"|"cyan"|"coral"|"indigo"|"gold"|"salmon"|"sky-blue"|"dark-olive"|"orchid"|"lime"|"tan"|"cadet-blue"|"tomato"|"medium-slate-blue"|"light-coral"|"dark-khaki"|"slate-gray"|"sandy-brown"|"firebrick"|"plum"|"dark-cyan"|"thistle"|"medium-purple"|"dark-salmon"|"yellow-green"|"sienna"|"cadmium-yellow"|"rosy-brown"|"medium-aquamarine"|"indian-red"|"pale-violet-red"|"medium-sea-green"|"orange-red"|"dark-orchid"|"steel-blue"|"dark-green"|"light-pink"|"medium-spring-green"|"dark-turquoise"|"medium-violet-red"|"peru"|"chocolate"|"dark-olive-green"|"dark-magenta"|"dark-orange"|"dark-violet"|"deep-pink"|"firebrick"|"green-yellow"|"light-blue"|"light-green"|"light-salmon"|"navajo-white"|"royal-blue"

    colors: {
        primary: string,
        secondary: string,
        editor: string
        accent: string
        font: string,
        foreground: string,
        editorFont: string
    }
}

const THEMES: themes[] = [
    {
        name: 'dark',
        colors: {
            primary: 'bg-[#1A1020]',
            secondary: 'bg-[#23272e]',
            accent: 'before:bg-[#AB85C1]',
            editor: 'bg-[#2C1B36]',
            font: 'text-[#EBEBEB]',
            foreground: '#372244',
            editorFont: '#FFFFFF'
        }
    },
    {
        name: 'light',
        colors: {
            primary: 'bg-[#F0F0F0]',
            secondary: 'bg-[#EBEBEB]',  
            accent: 'before:bg-[#999999]',
            editor: 'bg-[#FFFFFF]',
            font: 'text-[#333333]',
            foreground: '#f5f5f5',
            editorFont: '#000000'

        }
    },
   
];


export default THEMES
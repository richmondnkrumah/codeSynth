
interface themes {
    name: "dark"|"light"|"test"|"red"|"green"|"purple"|"blue"|"orange"|"yellow"|"silver"|"teal"|"maroon"|"olive"|"navy"|"pink"|"cyan"|"coral"|"indigo"|"gold"|"salmon"|"sky-blue"|"dark-olive"|"orchid"|"lime"|"tan"|"cadet-blue"|"tomato"|"medium-slate-blue"|"light-coral"|"dark-khaki"|"slate-gray"|"sandy-brown"|"firebrick"|"plum"|"dark-cyan"|"thistle"|"medium-purple"|"dark-salmon"|"yellow-green"|"sienna"|"cadmium-yellow"|"rosy-brown"|"medium-aquamarine"|"indian-red"|"pale-violet-red"|"medium-sea-green"|"orange-red"|"dark-orchid"|"steel-blue"|"dark-green"|"light-pink"|"medium-spring-green"|"dark-turquoise"|"medium-violet-red"|"peru"|"chocolate"|"dark-olive-green"|"dark-magenta"|"dark-orange"|"dark-violet"|"deep-pink"|"firebrick"|"green-yellow"|"light-blue"|"light-green"|"light-salmon"|"navajo-white"|"royal-blue"

    colors: {
        primary: string,
        secondary: string,
        editor: string
        accent: string
        font: string
    }
}

const THEMES: themes[] = [
    {
        name: 'dark',
        colors: {
            primary: 'bg-[#232244]',
            secondary: 'bg-[#23272e]',
            accent: 'before:bg-[#7799f2]',
            editor: 'bg-[#2f2f62]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'light',
        colors: {
            primary: 'bg-[#FFFFFF]',
            secondary: 'bg-[#F5F5F5]',  
            accent: 'before:bg-[#CCCCCC]',
            editor: 'bg-[#F0F0F0]',
            font: 'text-[#333333]'
        }
    },
    {
        name: 'test',
        colors: {
            primary: 'bg-[#001F3F]',
            secondary: 'bg-[#003366]',
            accent: 'before:bg-[#66B2FF]',
            editor: 'bg-[#004080]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'red',
        colors: {
            primary: 'bg-[#FF0000]',
            secondary: 'bg-[#990000]',
            accent: 'before:bg-[#FF6666]',
            editor: 'bg-[#660000]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'green',
        colors: {
            primary: 'bg-[#00FF00]',
            secondary: 'bg-[#009900]',
            accent: 'before:bg-[#66FF66]',
            editor: 'bg-[#006600]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'purple',
        colors: {
            primary: 'bg-[#800080]',
            secondary: 'bg-[#4B0082]',
            accent: 'before:bg-[#D8BFD8]',
            editor: 'bg-[#9400D3]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'blue',
        colors: {
            primary: 'bg-[#0000FF]',
            secondary: 'bg-[#000080]',
            accent: 'before:bg-[#6666FF]',
            editor: 'bg-[#000066]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'orange',
        colors: {
            primary: 'bg-[#FFA500]',
            secondary: 'bg-[#FF8C00]',
            accent: 'before:bg-[#FFD700]',
            editor: 'bg-[#FF7F00]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'yellow',
        colors: {
            primary: 'bg-[#FFFF00]',
            secondary: 'bg-[#FFD700]',
            accent: 'before:bg-[#FFFF66]',
            editor: 'bg-[#CCCC00]',
            font: 'text-[#333333]'
        }
    },

    {
        name: 'silver',
        colors: {
            primary: 'bg-[#C0C0C0]',
            secondary: 'bg-[#A9A9A9]',
            accent: 'before:bg-[#808080]',
            editor: 'bg-[#D3D3D3]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'teal',
        colors: {
            primary: 'bg-[#008080]',
            secondary: 'bg-[#006666]',
            accent: 'before:bg-[#00CCCC]',
            editor: 'bg-[#004C4C]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'maroon',
        colors: {
            primary: 'bg-[#800000]',
            secondary: 'bg-[#660000]',
            accent: 'before:bg-[#B22222]',
            editor: 'bg-[#8B0000]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'olive',
        colors: {
            primary: 'bg-[#808000]',
            secondary: 'bg-[#556B2F]',
            accent: 'before:bg-[#BDB76B]',
            editor: 'bg-[#6B8E23]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'navy',
        colors: {
            primary: 'bg-[#000080]',
            secondary: 'bg-[#000066]',
            accent: 'before:bg-[#0000CD]',
            editor: 'bg-[#00008B]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'pink',
        colors: {
            primary: 'bg-[#FFC0CB]',
            secondary: 'bg-[#FF69B4]',
            accent: 'before:bg-[#FF1493]',
            editor: 'bg-[#DB7093]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'cyan',
        colors: {
            primary: 'bg-[#00FFFF]',
            secondary: 'bg-[#00CED1]',
            accent: 'before:bg-[#20B2AA]',
            editor: 'bg-[#008B8B]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'coral',
        colors: {
            primary: 'bg-[#FF7F50]',
            secondary: 'bg-[#FF6347]',
            accent: 'before:bg-[#FF4500]',
            editor: 'bg-[#FF8C00]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'indigo',
        colors: {
            primary: 'bg-[#4B0082]',
            secondary: 'bg-[#3D2B1F]',
            accent: 'before:bg-[#8A2BE2]',
            editor: 'bg-[#6A5ACD]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'gold',
        colors: {
            primary: 'bg-[#FFD700]',
            secondary: 'bg-[#FFC125]',
            accent: 'before:bg-[#DAA520]',
            editor: 'bg-[#B8860B]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'salmon',
        colors: {
            primary: 'bg-[#FA8072]',
            secondary: 'bg-[#E9967A]',
            accent: 'before:bg-[#FFA07A]',
            editor: 'bg-[#FF6347]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'sky-blue',
        colors: {
            primary: 'bg-[#87CEEB]',
            secondary: 'bg-[#ADD8E6]',
            accent: 'before:bg-[#B0E0E6]',
            editor: 'bg-[#4682B4]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'dark-olive',
        colors: {
            primary: 'bg-[#556B2F]',
            secondary: 'bg-[#6B8E23]',
            accent: 'before:bg-[#808000]',
            editor: 'bg-[#8FBC8F]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'orchid',
        colors: {
            primary: 'bg-[#DA70D6]',
            secondary: 'bg-[#9932CC]',
            accent: 'before:bg-[#8A2BE2]',
            editor: 'bg-[#9400D3]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'lime',
        colors: {
            primary: 'bg-[#00FF00]',
            secondary: 'bg-[#32CD32]',
            accent: 'before:bg-[#7CFC00]',
            editor: 'bg-[#008000]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'tan',
        colors: {
            primary: 'bg-[#D2B48C]',
            secondary: 'bg-[#F0E68C]',
            accent: 'before:bg-[#DAA520]',
            editor: 'bg-[#B8860B]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'cadet-blue',
        colors: {
            primary: 'bg-[#5F9EA0]',
            secondary: 'bg-[#4682B4]',
            accent: 'before:bg-[#B0C4DE]',
            editor: 'bg-[#6495ED]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'tomato',
        colors: {
            primary: 'bg-[#FF6347]',
            secondary: 'bg-[#FF4500]',
            accent: 'before:bg-[#DC143C]',
            editor: 'bg-[#B22222]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'medium-slate-blue',
        colors: {
            primary: 'bg-[#7B68EE]',
            secondary: 'bg-[#6A5ACD]',
            accent: 'before:bg-[#8A2BE2]',
            editor: 'bg-[#483D8B]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'light-coral',
        colors: {
            primary: 'bg-[#F08080]',
            secondary: 'bg-[#CD5C5C]',
            accent: 'before:bg-[#FF6347]',
            editor: 'bg-[#DC143C]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'dark-khaki',
        colors: {
            primary: 'bg-[#BDB76B]',
            secondary: 'bg-[#8B4513]',
            accent: 'before:bg-[#FFFACD]',
            editor: 'bg-[#F0E68C]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'slate-gray',
        colors: {
            primary: 'bg-[#708090]',
            secondary: 'bg-[#778899]',
            accent: 'before:bg-[#B0C4DE]',
            editor: 'bg-[#A9A9A9]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'sandy-brown',
        colors: {
            primary: 'bg-[#F4A460]',
            secondary: 'bg-[#D2B48C]',
            accent: 'before:bg-[#DEB887]',
            editor: 'bg-[#8B4513]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'firebrick',
        colors: {
            primary: 'bg-[#B22222]',
            secondary: 'bg-[#8B0000]',
            accent: 'before:bg-[#DC143C]',
            editor: 'bg-[#CD5C5C]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'plum',
        colors: {
            primary: 'bg-[#DDA0DD]',
            secondary: 'bg-[#DA70D6]',
            accent: 'before:bg-[#8B008B]',
            editor: 'bg-[#9400D3]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'dark-cyan',
        colors: {
            primary: 'bg-[#008B8B]',
            secondary: 'bg-[#006666]',
            accent: 'before:bg-[#20B2AA]',
            editor: 'bg-[#004C4C]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'thistle',
        colors: {
            primary: 'bg-[#D8BFD8]',
            secondary: 'bg-[#C0C0D8]',
            accent: 'before:bg-[#FFE4E1]',
            editor: 'bg-[#D3D3D3]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'medium-purple',
        colors: {
            primary: 'bg-[#9370DB]',
            secondary: 'bg-[#8A2BE2]',
            accent: 'before:bg-[#800080]',
            editor: 'bg-[#483D8B]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'dark-salmon',
        colors: {
            primary: 'bg-[#E9967A]',
            secondary: 'bg-[#8B4513]',
            accent: 'before:bg-[#CD5C5C]',
            editor: 'bg-[#B22222]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'yellow-green',
        colors: {
            primary: 'bg-[#9ACD32]',
            secondary: 'bg-[#8FBC8F]',
            accent: 'before:bg-[#ADFF2F]',
            editor: 'bg-[#556B2F]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'sienna',
        colors: {
            primary: 'bg-[#A0522D]',
            secondary: 'bg-[#8B4513]',
            accent: 'before:bg-[#D2691E]',
            editor: 'bg-[#A52A2A]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'cadmium-yellow',
        colors: {
            primary: 'bg-[#FFF600]',
            secondary: 'bg-[#FFD700]',
            accent: 'before:bg-[#FFEC38]',
            editor: 'bg-[#E1C200]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'rosy-brown',
        colors: {
            primary: 'bg-[#BC8F8F]',
            secondary: 'bg-[#A52A2A]',
            accent: 'before:bg-[#D2B48C]',
            editor: 'bg-[#8B4513]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'medium-aquamarine',
        colors: {
            primary: 'bg-[#66CDAA]',
            secondary: 'bg-[#20B2AA]',
            accent: 'before:bg-[#00FA9A]',
            editor: 'bg-[#008B8B]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'indian-red',
        colors: {
            primary: 'bg-[#CD5C5C]',
            secondary: 'bg-[#8B3A3A]',
            accent: 'before:bg-[#FF6A6A]',
            editor: 'bg-[#B22222]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'pale-violet-red',
        colors: {
            primary: 'bg-[#DB7093]',
            secondary: 'bg-[#C71585]',
            accent: 'before:bg-[#FF69B4]',
            editor: 'bg-[#FF1493]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'medium-sea-green',
        colors: {
            primary: 'bg-[#3CB371]',
            secondary: 'bg-[#2E8B57]',
            accent: 'before:bg-[#20B2AA]',
            editor: 'bg-[#008B8B]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'orange-red',
        colors: {
            primary: 'bg-[#FF4500]',
            secondary: 'bg-[#FF6347]',
            accent: 'before:bg-[#FFA07A]',
            editor: 'bg-[#CD5C5C]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'dark-orchid',
        colors: {
            primary: 'bg-[#9932CC]',
            secondary: 'bg-[#8B008B]',
            accent: 'before:bg-[#9400D3]',
            editor: 'bg-[#800080]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'steel-blue',
        colors: {
            primary: 'bg-[#4682B4]',
            secondary: 'bg-[#5F9EA0]',
            accent: 'before:bg-[#B0C4DE]',
            editor: 'bg-[#6495ED]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'dark-green',
        colors: {
            primary: 'bg-[#006400]',
            secondary: 'bg-[#008000]',
            accent: 'before:bg-[#228B22]',
            editor: 'bg-[#006400]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'light-pink',
        colors: {
            primary: 'bg-[#FFB6C1]',
            secondary: 'bg-[#FFC0CB]',
            accent: 'before:bg-[#FF69B4]',
            editor: 'bg-[#FF1493]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'medium-spring-green',
        colors: {
            primary: 'bg-[#00FA9A]',
            secondary: 'bg-[#00FF7F]',
            accent: 'before:bg-[#3CB371]',
            editor: 'bg-[#2E8B57]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'dark-turquoise',
        colors: {
            primary: 'bg-[#00CED1]',
            secondary: 'bg-[#008B8B]',
            accent: 'before:bg-[#40E0D0]',
            editor: 'bg-[#00CED1]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'medium-violet-red',
        colors: {
            primary: 'bg-[#C71585]',
            secondary: 'bg-[#8B008B]',
            accent: 'before:bg-[#DB7093]',
            editor: 'bg-[#FF1493]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'peru',
        colors: {
            primary: 'bg-[#CD853F]',
            secondary: 'bg-[#D2691E]',
            accent: 'before:bg-[#FFD700]',
            editor: 'bg-[#8B4513]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'chocolate',
        colors: {
            primary: 'bg-[#D2691E]',
            secondary: 'bg-[#8B4513]',
            accent: 'before:bg-[#A0522D]',
            editor: 'bg-[#D2691E]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'dark-olive-green',
        colors: {
            primary: 'bg-[#556B2F]',
            secondary: 'bg-[#6B8E23]',
            accent: 'before:bg-[#8FBC8F]',
            editor: 'bg-[#556B2F]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'dark-magenta',
        colors: {
            primary: 'bg-[#8B008B]',
            secondary: 'bg-[#800080]',
            accent: 'before:bg-[#9932CC]',
            editor: 'bg-[#8B008B]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'dark-orange',
        colors: {
            primary: 'bg-[#FF8C00]',
            secondary: 'bg-[#FFA500]',
            accent: 'before:bg-[#FF4500]',
            editor: 'bg-[#FF8C00]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'dark-violet',
        colors: {
            primary: 'bg-[#9400D3]',
            secondary: 'bg-[#8A2BE2]',
            accent: 'before:bg-[#800080]',
            editor: 'bg-[#4B0082]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'deep-pink',
        colors: {
            primary: 'bg-[#FF1493]',
            secondary: 'bg-[#FF69B4]',
            accent: 'before:bg-[#C71585]',
            editor: 'bg-[#FF1493]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'firebrick',
        colors: {
            primary: 'bg-[#B22222]',
            secondary: 'bg-[#8B0000]',
            accent: 'before:bg-[#DC143C]',
            editor: 'bg-[#CD5C5C]',
            font: 'text-[#FFFFFF]'
        }
    },
    {
        name: 'green-yellow',
        colors: {
            primary: 'bg-[#ADFF2F]',
            secondary: 'bg-[#9ACD32]',
            accent: 'before:bg-[#7FFF00]',
            editor: 'bg-[#32CD32]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'light-blue',
        colors: {
            primary: 'bg-[#ADD8E6]',
            secondary: 'bg-[#87CEEB]',
            accent: 'before:bg-[#B0E0E6]',
            editor: 'bg-[#4682B4]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'light-green',
        colors: {
            primary: 'bg-[#90EE90]',
            secondary: 'bg-[#98FB98]',
            accent: 'before:bg-[#00FA9A]',
            editor: 'bg-[#00FF00]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'light-salmon',
        colors: {
            primary: 'bg-[#FFA07A]',
            secondary: 'bg-[#FA8072]',
            accent: 'before:bg-[#FF6347]',
            editor: 'bg-[#FF4500]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'navajo-white',
        colors: {
            primary: 'bg-[#FFDEAD]',
            secondary: 'bg-[#FFD700]',
            accent: 'before:bg-[#FFFAF0]',
            editor: 'bg-[#FAEBD7]',
            font: 'text-[#000000]'
        }
    },
    {
        name: 'royal-blue',
        colors: {
            primary: 'bg-[#4169E1]',
            secondary: 'bg-[#000080]',
            accent: 'before:bg-[#0000CD]',
            editor: 'bg-[#4169E1]',
            font: 'text-[#FFFFFF]'
        }
    }
];


export default THEMES
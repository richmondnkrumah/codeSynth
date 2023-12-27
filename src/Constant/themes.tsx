
interface themes {
  name: "dark" | "light" | "test";
    colors: {
        primary: string,
        secondary: string,
        editor: string
        accent: string
    }
}
const THEMES: themes[] = 
    [
        {
            name: 'dark',
            colors: {
                primary: 'bg-[#000000]',
                secondary: 'bg-[#1B2A41]',
                accent: 'before:bg-[#1E1B18]',
                editor: 'bg-[#0C1821]'
            }
        },
        {
            name: 'light',
            colors: {
                primary: 'bg-[#D3AB9E]',
                secondary: 'bg-[#EBD8D0]',  
                accent: 'before:bg-[#C7CCDB]',
                editor: 'bg-[#FEFEFF]'
            }
        },
        {
            name: 'test',
            colors: {
                primary: 'bg-[#00072D]',
                secondary: 'bg-[#001C55]',
                accent: 'before:bg-[#A6E1FA]',
                editor: 'bg-[#0A2472]'
            }
        }
    ]

export default THEMES
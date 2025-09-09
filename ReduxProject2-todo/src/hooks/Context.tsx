import { createContext, useContext, useState, useEffect } from "react";

type themeType = {
    theme: 'light' | 'dark',
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}

const themeContext = createContext<themeType | undefined>(undefined)

export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<'light' | 'dark'>(():'light'|'dark'=> localStorage.getItem('theme')?localStorage.getItem('theme')as 'light'|'dark':'light')

    // Persist theme to localStorage
    useEffect(() => {
        localStorage.setItem('theme', theme)
        // Update document class for Tailwind dark mode
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            {children}
        </themeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(themeContext)

    if (!context) {
        throw new Error('useTheme must be used within a ThemeContextProvider')
    }

    return context
}

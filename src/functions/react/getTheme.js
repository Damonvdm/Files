import { useEffect, useState } from "react"

export default function getTheme()
{
    const [value, setTheme] = useState("mint")
        const [, setComponentMounted] = useState(false)
        
        const set = mode =>
        {
            window.localStorage.setItem("theme", mode)
            setTheme(mode)
        }

        useEffect(() => 
        {
            const localTheme = window.localStorage.getItem("theme")
            window.matchMedia && window.matchMedia("(perfers-color-scheme: dark)").matches && !localTheme
                ? set("dark")
                : localTheme
                    ? set(localTheme)
                    : set("mint")
            setComponentMounted(true)
        }, [])

        return { value, set }
}
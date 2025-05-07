import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./styles.module.css"
import React, { useState, useEffect } from "react";

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        return localStorage.getItem('theme') as AvailableThemes || 'dark';
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) {
        event.preventDefault();
        setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <nav className={styles.menu}>
            <a href="#" className={styles.menuLink} aria-label="Ir para a home" title="Ir para a home">
                <HouseIcon />
            </a>
            <a href="#" className={styles.menuLink} aria-label="Ver histórico" title="Ver histórico">
                <HistoryIcon />
            </a>
            <a href="#" className={styles.menuLink} aria-label="Ver configurações" title="Ver configurações">
                <SettingsIcon />
            </a>
            <a
                href="#"
                className={styles.menuLink}
                aria-label="Trocar o tema"
                title="Trocar o tema"
                onClick={handleThemeChange}
            >
                {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}
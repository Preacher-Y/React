import React, { useState } from 'react';
import Button from './button';
import { BiMoon, BiSun } from 'react-icons/bi';

export default function Theme(): React.JSX.Element {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme==='dark');
    };

    const Icon = theme === 'dark' ? BiSun : BiMoon;

    return (
        <div className="fixed right-6 top-1 flex justify-center items-center max-sm:mt-5 mt-3">
            <Button
                text={<Icon size={20} className="text-white" />}
                color="bg-black/90"
                size="p-2 flex items-center rounded-full dark:bg-gray-700 justify-center hover:scale-110 hover:shadow-[0px_0px_8px_black] transition-all duration-500"
                onClick={toggleTheme}
            />
        </div>
    );
}

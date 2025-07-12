import React, { useState } from 'react';
import Button from './button';
import { BiMoon, BiSun } from 'react-icons/bi';
export default function Theme(): React.JSX.Element {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };
    return (
        <div className=" fixed right-3 top-0 flex justify-center items-center max-sm:mt-5 mt-3">
            <Button
                text={<BiMoon size={20} className='text-black dark:text-white' />}
                color="bg-black/90"
                size="p-2 flex items-center rounded-full dark:bg-gray-700 justify-center hover:scale-110 hover:shadow-[0px_0px_8px_black] transition-all duration-500"
                onClick={toggleTheme}
            />
        </div>
    )
}
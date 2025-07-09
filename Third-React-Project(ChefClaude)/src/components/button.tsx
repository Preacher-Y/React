import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
    size?: string;
    text: React.ReactNode;
}

export default function Button({ color = "bg-blue-500",size = "py-2 px-4", text, ...props}: ButtonProps) {
    return (
        <button
            className={`${color} ${size} text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
            {...props}
        >
            {text}
        </button>
    );
}   
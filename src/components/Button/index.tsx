import React from 'react';

import s from './button.module.scss';

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>)=>void
    width? : string
    height?: string
    background?: string
    fontSize?: string
    color?: string
    
}

const Button: React.FC<ButtonProps> = ({ children, onClick, background, fontSize,width,height,color}) => {
    return (
        <button
            type='button'
            className={s.root}
            onClick={onClick}
            style={{
                background:`${background}`,
                fontSize:`${fontSize}px`,
                width:`${width}px`,
                height:`${height}px`,
                color:`${color}`
            }}>
                { children }
        </button>
    );
};

export default Button;
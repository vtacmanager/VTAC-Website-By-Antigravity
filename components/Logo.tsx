import React from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={className}>
            <img
                src="/logo.png"
                alt="VTAC Logo"
                className="w-full h-full object-contain"
            />
        </div>
    );
};

export default Logo;

import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <img
      src="https://i.ibb.co/8n1mt66z/Picsart-25-12-19-10-09-28-899.jpg"
      alt="Pluto Cloud Logo"
      className={`${className} object-contain select-none`}
      style={{ minWidth: "40px", minHeight: "40px" }}
      loading="lazy"
    />
  );
};

export default Logo;

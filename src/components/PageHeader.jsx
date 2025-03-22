import React from "react";

const PageHeader = ({ title, subtitle, backgroundImage }) => {
    return (
        <div className="text-center bg-my-8 bg-cover bg-[#242424]/10 bg-center text-white py-20 opacity-10" 
        style={{backgroundImage: `url(${backgroundImage})`}}>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg mt-2">{subtitle}</p>
        </div>
    );
};

export default PageHeader;
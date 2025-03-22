import React from "react";

const PageHeader = ({ title, subtitle, backgroundImage }) => {
    return (
        <div className="text-center bg-my-8 bg-cover bg-center text-white py-20" 
        style={{backgroundImage: `url(${backgroundImage})`}}>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg mt-2 px-4 md:px-0">{subtitle}</p>
        </div>
    );
};

export default PageHeader;
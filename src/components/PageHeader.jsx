import React from "react";

const PageHeader = ({ title, subtitle, headerBG }) => {
    return (
        <div className="text-center my-8 bg-[image:var(--image-url)] bg-cover bg-center text-white py-20" 
        style={{'--image-url': 'url(${headerBG})'}}>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg mt-2">{subtitle}</p>
        </div>
    );
};

export default PageHeader;
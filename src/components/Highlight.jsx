import React from 'react'

const Highlight = ({ highlightTitle, highlightSubtitle, highlightImage, highlightParagraph, highlightCTA }) => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={highlightImage} alt="Digital wallet displaying out of a laptop" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#1bb8d7] font-bold">{highlightSubtitle}</p>
                    <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black">{highlightTitle}</h2>
                    <p className="text-black">{highlightParagraph}</p>
                    <button className="bg-[#000] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#1bb8d7]">{highlightCTA}</button>
                </div>
            </div>
        </div>
    )
}

export default Highlight
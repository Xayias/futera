import React from 'react'

const Newsletter = () => {
    return (
        <div class="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 align-middle">
                <div className="lg:col-span-2 lg:my-12">
                    <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h2>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center w-full">
                        <input className="p-3 w-full rounded-md text-black" type="email" placeholder="Enter Email" />
                        <button className="bg-[#1bb8d7] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black sm:ml-4 px-6">Notify Me</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className='text-[#1bb8d7]'>Privacy Policy</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
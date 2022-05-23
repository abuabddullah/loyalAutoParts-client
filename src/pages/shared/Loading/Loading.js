import React from 'react';
import './Loading.css'
const Loading = () => {
    return (
        <section className='w-full h-[25vh] flex justify-center items-center'>
            <div className="loader">
                <div></div>
            </div>
        </section>
    );
};

export default Loading;
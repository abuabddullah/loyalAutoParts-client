import React from 'react';
import logo from './../../assets/logoIcons/Loyal Cars-logos_black.png'

const Location = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="absolute inset-0 bg-gray-300">
                <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.96421875146!2d90.18487271430048!3d23.926321087951504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ef0a78bedfdf%3A0xba355d038cac047a!2sFukutia%20masjid!5e0!3m2!1sen!2sus!4v1653284459433!5m2!1sen!2sus" style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary">Our Location</h2>
                    <address className="leading-relaxed mb-5 text-gray-600">
                        <p>Vill : Fukutia</p>
                        <p>P/O : Dhamrai</p>
                        <p>Dhaka, Bangladesh</p>
                    </address>
                    <div className="relative mb-4">
                        <img className='max-w-full' src={logo} alt="" />
                    </div>
                    <p className="text-xs text-secondary mt-3">ride loylty of your cars . . .</p>
                </div>
            </div>
        </section>
    );
};

export default Location;
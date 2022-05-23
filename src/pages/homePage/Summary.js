import React from 'react';
import { GrDeliver } from "react-icons/gr";
import { FaUserFriends } from "react-icons/fa";
import { GiTakeMyMoney, GiAutoRepair } from "react-icons/gi";
import CountUp from 'react-countup';

const Summary = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary">Business Summary</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here we've provide a compiled a list of the  auto parts statistics ideas, infos, business summary and sayings we could find.</p>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-primary px-4 py-6 rounded-lg">
                            <GrDeliver
                                className="w-12 h-12 mb-3 inline-block"
                            />
                            <h2 className="title-font font-medium text-3xl text-gray-900">
                            <CountUp end={207} />
                                K</h2>
                            <p className="leading-relaxed">Delivered</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-primary px-4 py-6 rounded-lg">
                            <FaUserFriends
                                className="w-12 h-12 mb-3 inline-block"
                            />
                            <h2 className="title-font font-medium text-3xl text-gray-900">
                            <CountUp end={103} />
                                K</h2>
                            <p className="leading-relaxed">Consumers</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-primary px-4 py-6 rounded-lg">
                            <GiTakeMyMoney
                                className="w-12 h-12 mb-3 inline-block"
                            />
                            <h2 className="title-font font-medium text-3xl text-gray-900">
                            <CountUp end={74} />
                                M</h2>
                            <p className="leading-relaxed">Net worth</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-primary px-4 py-6 rounded-lg">
                            <GiAutoRepair
                                className="w-12 h-12 mb-3 inline-block"
                            />
                            <h2 className="title-font font-medium text-3xl text-gray-900">
                            <CountUp end={406} />
                                k</h2>
                            <p className="leading-relaxed">Parts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;
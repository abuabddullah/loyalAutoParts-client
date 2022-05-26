import React from 'react';

const Blogs = () => {
    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-secondary">Blogs</h1>
                </div>

                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 pb-24 mx-auto">
                        <div className="-my-8 divide-y-2 divide-gray-100">
                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-primary">14.1 How will you improve the performance of a React Application?</span>
                                    <span className="mt-1 text-gray-500 text-sm">26 May 2022</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2"> improve the performance of a React Application</h2>
                                    <p className="leading-relaxed">By keeping component state local <br />

                                        use lazyloading for images <br />

                                        use memorization technique also to prevent unnecessary re-renders</p>
                                </div>
                            </div>

                        </div>

                        <div className="-my-8 divide-y-2 divide-gray-100">
                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-primary">14.2 What are the different ways to manage a state in a React application?</span>
                                    <span className="mt-1 text-gray-500 text-sm">26 May 2022</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2"> different ways to manage a state in a React</h2>
                                    <p className="leading-relaxed">we have four kinds of state in react
                                        local state : Local state is the data that we manage on one or the other component.
                                        <br /><br />
                                        Global state : The global state is the data that we manage across multiple elements.
                                        <br /><br />
                                        Server state :
                                        <br /><br />
                                        url state : useHistory or UseLocation used  To manage URL states
                                        <br /><br />
                                        all these can mange by different hooks
                                        <br /><br />
                                        useState : Server states and React Query
                                        <br /><br />
                                        UseEffect  : Server states and React Query
                                        <br /><br />
                                        useReducer : we  use useReducer  To manage global states &  local states
                                        <br /><br />
                                        useCallback,
                                        useContext etc.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="-my-8 divide-y-2 divide-gray-100">
                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-primary">14.3 How does prototypical inheritance work?</span>
                                    <span className="mt-1 text-gray-500 text-sm">26 May 2022</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2"> prototypical inheritance</h2>
                                    <p className="leading-relaxed">prototypical inheritance is the process of accessing an object's properties by another object.  it is used to add methods and features to objects by which an object can inherit the properties and methods of another object
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="-my-8 divide-y-2 divide-gray-100">
                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-primary">14.4 Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</span>
                                    <span className="mt-1 text-gray-500 text-sm">26 May 2022</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2"> not set the state directly in React</h2>
                                    <p className="leading-relaxed">it will show us an error & will break our app  because doing so will not change the value of the state immediately it will replace the value instantly without causing other component re-render
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="-my-8 divide-y-2 divide-gray-100">
                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-primary">14.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</span>
                                    <span className="mt-1 text-gray-500 text-sm">26 May 2022</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">implement a search to find products by name</h2>
                                    <p className="leading-relaxed">code : const result = arrOfProducts.filter(product => product.name === "keyword")
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="-my-8 divide-y-2 divide-gray-100">
                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-primary">14.6 What is a unit test? Why should write unit tests?</span>
                                    <span className="mt-1 text-gray-500 text-sm">26 May 2022</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2"> unit test? Why</h2>
                                    <p className="leading-relaxed">software development process
                                        In this process an application is broken apart into small tastable parts called units where each and every units are independently and individually tested to fix bugs and errors Unit testing ensures that all code meets quality standards before it's deployed. this is the why
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </section>
    );
};

export default Blogs;
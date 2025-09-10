"use clint";

import FancyButton from "@/app/components/FancyButton";

const Foot = () => {
    return (
        <section className="p-8 bg-white">
            <div className="">
                <div className="flex flex-row justify-between m-4">
                    <div className="flex-1">
                        <FancyButton>
                            <div className="flex flex-row gap-4">
                                <p>
                                    Email Us
                                </p>


                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     className="size-5">
                                    <path
                                        d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"/>
                                    <path
                                        d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"/>
                                </svg>
                                
                            </div>

                        </FancyButton>

                    </div>
                    <div className="flex flex-1 flex-row">
                        <div className="flex-1">
                            <ul>
                                <li>
                                    <FancyButton className="text-black text-sm">Press &
                                        Media</FancyButton>
                                </li>
                                <br/>
                                <li>
                                    <FancyButton className="text-black text-sm">Technology</FancyButton>
                                </li>
                                <br/>
                                <li>
                                    <FancyButton className="text-black text-sm ">Events</FancyButton>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <ul>
                                <li>
                                    <FancyButton className="text-black text-sm">Our
                                        company</FancyButton>
                                </li>
                                <br/>
                                <li>
                                    <FancyButton className="text-black text-sm">Product
                                        specs</FancyButton>
                                </li>
                                <br/>
                                <li>
                                    <FancyButton className="text-black text-sm">Upcoming
                                        products</FancyButton>
                                </li>
                            </ul>
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-1 flex-wrap justify-end flex-col gap-2">
                                <div className="flex flex-wrap justify-between flex-row gap-2">
                                    <div className="border-2 border-black rounded-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="border-2 border-black rounded-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                                            />
                                        </svg>
                                    </div>

                                    <div className="border-2 border-black rounded-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-t border-gray-200"/>

                <div className="mb-8">
                    <p className="text-black text-xs p-4">copyright &copy; {new Date().getFullYear()}, sumdynamics</p>
                </div>
            </div>
        </section>
    );
};

export default Foot;

import React, { useState } from "react";

export default function Navbar() {
    let links = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/" },
        { name: "job seeker", link: "/" },
        { name: "Recruiter", link: "/" },
        { name: "Contact", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between py-4 bg-white md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                    <span className="text-3xl text-pink-600 mr-1 pt-1">
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                    Jobify
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                >
                    <ion-icon name={open ? "close" : "menu"}></ion-icon>
                </div>

                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? "top-20 " : "top-[-490px]"
                    }`}
                >
                    {links.map((link) => (
                        <li
                            key={link.name}
                            className="md:ml-8 text-xl md:my-0 my-7"
                        >
                            <a
                                href={link.link}
                                className="text-gray-800 hover:text-gray-400 duration-500"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <button className="bg-pink-500 text-white text-lg font-[Poppins] py-2 px-6 rounded-md md:ml-8 hover:bg-pink-400 duration-500 font-medium">
                        Get Started
                    </button>
                </ul>
            </div>
        </div>
    );
}

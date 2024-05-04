import React from "react";

const Header: React.FC = () => {
    return (
        <>
            <div className="max-w-[100%] bg-red-500 flex py-3 px-2">
                <div className="text-left"><img src="https://www.technogiq.com/images/WhiteLogo.png" alt="" /></div>
                <div className="text-right absolute right-4">
                    <ul className="flex px-6 py-6 space-x-36 text-white ">
                        <li className="relative">
                            <div className="group ">
                                <p className="cursor-pointer hover:text-black">Home</p>
                                <ul className="hidden group-hover:block absolute  top-6 left-0  border  py-2 px-4 rounded-md  bg-green-400 w-40">
                                    <li className="hover:bg-gray-200 py-1 px-2 ">Option 1</li>
                                    <li className="hover:bg-gray-200 py-1 px-2">Option 2</li>
                                    <li className="hover:bg-gray-200 py-1 px-2">Option 3</li>
                                    <li className="hover:bg-gray-200 py-1 px-2">Option 4</li>
                                </ul>
                            </div>
                        </li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;

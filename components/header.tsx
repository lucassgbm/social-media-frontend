'use client';

import { useState } from "react";
import SearchIcon from "./icons/search";
import CloseIcon from "./icons/close";
import MenuIcon from "./icons/menu";
import ThemeToggle from "./theme-toggle";

export default function Header() {

const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <header className="flex w-full bg-white dark:bg-gray-900">
            <nav className="w-full shadow-md px-4 py-2 flex items-center justify-between">

                <div className="w-1/4 text-xl font-bold text-blue-600">Logo</div>

                <div className="w-2/4 hidden md:flex bg-gray-100 dark:bg-gray-700 p-2 rounded-lg px-5 pl-5">
                    <SearchIcon className="dark:text-white"/>
                    <input className="ml-2 w-full focus:outline-none w-full text-gray-600 dark:text-white rounded-sm ml-2 pr-4" type="text" placeholder="Search"></input>
                </div>

                <div className="hidden md:flex w-1/4 justify-end items-center gap-4">
                    <ThemeToggle /> 
                    <span className="text-sm font-semibold text-gray-600 dark:text-white">Olá, Lucas</span>
                    <img
                    src="https://i.pravatar.cc/40"
                    alt="perfil"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    />
                </div>

                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <CloseIcon className="dark:text-white cursor-pointer" /> : <MenuIcon className="dark:text-white cursor-pointer" />}
                </button>

                {mobileOpen && (
                    <div className="absolute top-14 left-0 w-full dark:bg-gray-800 bg-white shadow-md flex flex-col p-4 gap-4 md:hidden">
                        <div className="flex w-full bg-gray-100 dark:bg-gray-700 p-2 rounded-lg px-5 pl-5">
                            <SearchIcon className="dark:text-white"/>
                            <input className="ml-2 w-full focus:outline-none w-full text-gray-600 dark:text-white rounded-sm ml-2 pr-4" type="text" placeholder="Search"></input>
                        </div>
                        <div className="flex w-full">
                            <div className="flex w-3/4 items-center gap-3">
                                <img
                                src="https://i.pravatar.cc/40"
                                alt="perfil"
                                className="w-10 h-10 rounded-full"
                                />
                                <span className="text-sm font-semibold text-gray-600 dark:text-white">Olá, Lucas</span>
                            </div>
                            <div className="flex w-1/4 justify-end">
                                <ThemeToggle /> 
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>

    );
}
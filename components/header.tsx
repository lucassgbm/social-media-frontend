import SearchIcon from "./icons/search";

export default function Header() {

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
                <div className="flex w-1/7">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" className="h-8 w-auto" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="flex w-4/7">
                    <div className="flex w-full bg-gray-100 p-2 rounded-full px-5 pl-5">
                        <SearchIcon/>
                        <input className="ml-2 w-full focus:outline-none w-full rounded-full ml-2 pl-4 pr-4 hover:text-border-0" type="text" placeholder="Search"></input>
                    </div>
                    
                </div>
                <div className="flex w-1/7">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
            
        </header>

    );
}
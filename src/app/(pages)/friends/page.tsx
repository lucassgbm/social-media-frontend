
import ListFriends from "../../../../components/friends/list-friends";
import Header from "../../../../components/header";
import Sidebar from "../../../../components/sidebar";


export default function Home(){
    return(
        <>
        
            <Header />
            <div className="flex bg-gray-100 min-h-screen p-6 gap-6 text-gray-600">    
                <Sidebar />

                <div className="w-3/6 flex flex-col">
                    <div className="bg-white h-full hover:shadow-lg cursor-pointer rounded-2xl p-4">
                        <ListFriends />
                    </div>

                </div>
                <div className="w-2/6 flex flex-col">

                </div>
            </div>

        </>
    )
}
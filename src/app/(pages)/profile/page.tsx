import Image from "next/image";
import ProfileInfo from "../../../../components/profile/profile-info";
import Sidebar from "../../../../components/sidebar";
import ListCommunities from "../../../../components/communities/list-communities";
import ListFriends from "../../../../components/friends/list-friends";

export default function Profile(){
    return(
        <div className="flex bg-gray-100 min-h-screen p-6 gap-6 text-gray-600">    
            <Sidebar />

            <div className="w-3/6 flex flex-col">
                <div className="w-full flex flex-row gap-4 mb-4">
                    <div className="w-1/3 bg-white h-[100px] rounded-lg p-4">
                        <h2 className="text-xs font-semibold">Amigos</h2>
                    </div>
                    <div className="w-1/3 bg-white h-[100px] rounded-lg p-4">
                        <h2 className="text-xs font-semibold">Comunidades</h2>
                    </div>
                    <div className="w-1/3 bg-white h-[100px] rounded-lg p-4">
                        <h2 className="text-xs font-semibold">Eventos</h2>

                    </div>
                </div>
                <ProfileInfo />
                <div className="w-full ">
                    <ListCommunities />
                </div>
                <div className="w-full ">
                    <ListFriends />
                </div>
            </div>
            
        </div>
    )
}
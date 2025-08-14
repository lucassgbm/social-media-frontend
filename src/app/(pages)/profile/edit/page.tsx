import Header from "../../../../../components/header";
import ProfileInfo from "../../../../../components/profile/profile-info";
import Sidebar from "../../../../../components/sidebar";


export default function Edit(){
    return(
        <>
            <Header />
            <div className="flex bg-gray-100 min-h-screen p-6 gap-6 text-gray-600">    
                <Sidebar />

                <div className="w-3/6 flex flex-col">
                    
                    <ProfileInfo />
                    
                </div>
                <div className="w-2/6 flex flex-col">

                    
                </div>
                
            </div>
        </>
    )
}
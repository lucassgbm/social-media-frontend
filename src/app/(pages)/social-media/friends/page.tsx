
import Container from "../../../../../components/container";
import ListFriends from "../../../../../components/friends/list-friends";
import Header from "../../../../../components/header";
import Sidebar from "../../../../../components/sidebar";


export default function Home(){
    return(
        <>
        
            <Header />
            
            <div className="flex flex-col sm:flex-row dark:bg-neutral-950 bg-neutral-100 min-h-screen p-6 gap-6 text-gray-600">
    
                <Sidebar />

                <div className="w-4/6 flex flex-col">
                    <Container className="h-full hover:shadow-lg cursor-pointer">
                        <ListFriends />
                    </Container>

                </div>
                <div className="w-1/6 flex flex-col">

                </div>
            </div>

        </>
    )
}
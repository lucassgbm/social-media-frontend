export default function Home(){
    return (

    <div className="flex">

        <aside className="w-64 h-screen sticky top-0 bg-gray-800 text-white p-6">
            <h2 className="text-xl font-bold mb-6">Menu</h2>
            <ul className="space-y-4">
            <li><a href="#" className="hover:text-gray-300">🏠 Home</a></li>
            <li><a href="#" className="hover:text-gray-300">👤 Perfil</a></li>
            <li><a href="#" className="hover:text-gray-300">💬 Mensagens</a></li>
            <li><a href="#" className="hover:text-gray-300">⚙️ Configurações</a></li>
            </ul>
        </aside>


        <main className="flex-1 p-6 h-[200vh] bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Role para ver o sidebar preso.</p>
            <div className="mt-10 space-y-6">
            <p className="bg-white p-4 rounded shadow">Conteúdo 1</p>
            <p className="bg-white p-4 rounded shadow">Conteúdo 2</p>
            <p className="bg-white p-4 rounded shadow">Conteúdo 3</p>
            <p className="bg-white p-4 rounded shadow">Conteúdo 4</p>
            </div>
        </main>
    </div>
    )

}
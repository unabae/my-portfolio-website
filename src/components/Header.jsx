export default function Header() {
    return (
        <header className="px-10 py-5 md:flex justify-between">
            <div className="w-3/5">
                <h1 className="text-white text-6xl font-semibold pb-5 transition-all ease-out delay-1000 hover:text-lime-500">HELLO!</h1>
                <h2 className="text-white text-5xl font-extralight hover:text-lime-500">I'm Laurence, <br />a Web Developer</h2>
            </div>
            <div className="bg-lime-950 w-full h-4"></div>

        </header>
    )   
}
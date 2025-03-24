import { useRouter } from "next/router";
import { useAppContext } from "../context/appContext";

const NavButton = ({children, ...props}) => {
    return (
        <button className="flex items-center px-4" {...props}>{children}</button>
    )
}




const Nav = () => {
    const { isSignedIn, brandName } = useAppContext();
    const links = [
        {label: 'Home', href: '/'},
        {label: 'About', href: '/about'},
        {label: 'Blog', href: '/blog'},
        {label: 'Practice Areas', href: '/pracetice-areas'},
        {label: 'Staff', href: '/staff'},
        {label: 'Contact', href: '/contact'},
    ];
    const router = useRouter();
    return (
        <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
            <div className="flex">
                <div rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full text-tahiti">
                        <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                    </svg>
                    <h2 className="font-bold text-midnight">{brandName}</h2>
                </div>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    {links.map((link, index) => (
                        <li className="flex text-midnight">
                            <NavButton key={index} onClick={() => router.push(link.href)}>{link.label}</NavButton>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="items-center flex-shrink-0 hidden lg:flex text-midnight">
                {!isSignedIn && (
                    <button className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50" onClick={() => router.push("/client/login")}>Log in</button>
                )}
                {isSignedIn && (
                    <>
                        <button className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50" onClick={() => router.push("/client/portal")}>Dashboard</button>
                        <button className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50" onClick={() => router.push("/client/profile")}>Profile</button>
                    </>
                )}
            </div>
            <button className="p-4 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </header>
    )
}

export default Nav;
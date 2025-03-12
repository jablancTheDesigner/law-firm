import { useRouter } from "next/router";
import { useAppContext } from "../context/appContext";

const Nav = () => {
    const { isSignedIn, brandName } = useAppContext();
    const router = useRouter();
    return (
        <nav>
            <h1>{brandName}</h1>
            <div className="nav__inner">
                <button onClick={() => router.push("/")}>Home</button>
                <button onClick={() => router.push("/blog")}>Blog</button>
                <button onClick={() => router.push("/pracetice-areas")}>Practice Areas</button>
                <button onClick={() => router.push("/staff")}>Staff</button>
                <button onClick={() => router.push("/blog")}>Contact</button>
                {!isSignedIn && (
                    <button onClick={() => router.push("/client/login")}>Login</button>
                )}
                {isSignedIn && (
                    <>
                        <button onClick={() => router.push("/client/portal")}>Dashboard</button>
                        <button onClick={() => router.push("/client/profile")}>Profile</button>
                    </>
                )}
                
            </div>
        </nav>
    )
}

export default Nav;
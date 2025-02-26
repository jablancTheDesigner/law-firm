import { useRouter } from "next/router";

const Nav = () => {
    const router = useRouter();
    return (
        <nav>
            <h1>the<b>Law</b>Firm</h1>
            <div className="nav__inner">
                <button onClick={() => router.push("/")}>Home</button>
                <button onClick={() => router.push("/blog")}>Blog</button>
                <button onClick={() => router.push("/client/login")}>Login</button>
                <button onClick={() => router.push("/client/portal")}>Dashboard</button>
                <button onClick={() => router.push("/client/profile")}>Profile</button>
            </div>
        </nav>
    )
}

export default Nav;
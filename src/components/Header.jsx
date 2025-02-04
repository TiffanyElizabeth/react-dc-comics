import links from "../data/headerMenu";

export default function Header() {
    return (
        <header className="container">
            <div className="flex-container header-container">
                <a href="#"><img src="../img/dc-logo.png" alt="dc logo" /></a>
                <nav className="main-nav">
                    <ul>
                        {links.map((link) => (
                            <li key={link.id} className="line">
                                <a href={link.url}>{link.text}</a>
                            </li>
                        ))}
                        {/*<li className="line">
                            <a href="#">characters</a>
                        </li>
                        <li className="line">
                            <a href="#">comics</a>
                        </li>
                        <li className="line">
                            <a href="#">movies</a>
                        </li>
                        <li className="line">
                            <a href="#">tv</a>
                        </li>
                        <li className="line">
                            <a href="#">games</a>
                        </li>
                        <li className="line">
                            <a href="#">collectibles</a>
                        </li>
                        <li className="line">
                            <a href="#">videos</a>
                        </li>
                        <li className="line">
                            <a href="#">fans</a>
                        </li>
                        <li className="line">
                            <a href="#">news</a>
                        </li>
                        <li className="line">
                            <a href="#">shop</a>
                        </li>*/}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
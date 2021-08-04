import Link from 'next/link'

const Navbar = props => {
    return (
        <div className="navbar">
            <ul className="navbar_menu">
                <Link href="/">
                    <li className="zoom">Menu</li>
                </Link>
                <Link href="/catalogue">
                    <li className="zoom-dropdown">Catalogue</li>
                </Link>
                <Link href="/about">
                    <li className="zoom">About</li>
                </Link>
                <Link href="/about">
                    <li className="zoom">Admin</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar
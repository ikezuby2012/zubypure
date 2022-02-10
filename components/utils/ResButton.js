import Link from 'next/link';

const ResButton = () => {
    return (
        <div className="navigation-box">
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__items">
                        <Link href="/portfolio">
                            <a href="" className="navigation__link">portfolio</a>
                        </Link>
                    </li>
                    <li className="navigation__items">
                        <Link href="/contact">
                            <a href="/contact" className="navigation__link">contact</a>
                        </Link>
                    </li>
                    <li className="navigation__items">
                        <Link href="/about">
                            <a href="/about" className="navigation__link">about</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default ResButton;
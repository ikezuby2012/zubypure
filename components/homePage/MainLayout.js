import { useState } from "react";
import Link from 'next/link';

import NavLink from "../utils/NavLink";
import ResButton from "../utils/ResButton";

const MainLayout = ({ children }) => {
    const [res, setIsRes] = useState(false);

    const toggleButton = (e) => setIsRes(!res);
    return (
        <section className="container">
            <>
                <div className="header-top">
                    <div className="header-icon">
                        <Link href="/">
                            <a className="header-icon_link">
                                <h2 className={"header-icon_txt"}>zubyPure</h2>
                            </a>
                        </Link>

                    </div>
                    {/* responsive button */}
                    <div className="navigation">
                        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" onClick={(e) => toggleButton(e)} />
                        <label htmlFor="navi-toggle" className="navigation__button">
                            <span className="navigation__icon">&nbsp;</span>
                        </label>
                    </div>
                    {res && <ResButton />}
                    <div className="header_nav">
                        <nav>
                            <ul className={"header_nav-list"}>
                                <li className={"header_nav-item"}>
                                    <NavLink href={"/portfolio"} className={"header_nav-link"} active=" active-link">portfolio</NavLink>
                                </li>
                                <li className={"header_nav-item"}>
                                    <NavLink href={"/contact"} className={"header_nav-link"} active=" active-link">say hello</NavLink>
                                </li>
                                <li className={"header_nav-item"}>
                                    <NavLink href={"/about"} className={"header_nav-link"} active=" active-link">about</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {children}
            </>
        </section>
    )
}

export default MainLayout;
import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

NavLink.PropTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
}
NavLink.defaultProps = {
    exact: false
}

export default function NavLink({ href, exact, children, active, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += active
    }
    return <Link href={href}>
        <a {...props}>
            {children}
        </a>
    </Link>
}
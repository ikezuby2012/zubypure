import Image from "next/image";
import Link from "next/link";

import { GitHub } from "@material-ui/icons";

const PortfolioBox = ({ image, caption, link }) => {
    return (
        <div className="portfolio-card">
            <figure className="portfolio-shape">
                <Image src={image}
                    width={400} className="portfolio-image"
                    alt={caption} height={300} layout={"intrinsic"} sharp/>

                <figcaption className="portfolio-figcaption">
                    <Link href={link}>
                        <a className="" target={"_blank"}>
                            <GitHub className="portfolio-icon" />
                        </a>
                    </Link>
                </figcaption>
                <div className="portfolio-caption">
                    <span>{caption}</span>
                </div>
            </figure>
        </div>
    )
}

export default PortfolioBox;
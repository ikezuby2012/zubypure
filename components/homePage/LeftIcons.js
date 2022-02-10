import { useRef, useEffect } from "react";
import gsap, { Power3 } from "gsap";
import {
    Facebook, WhatsApp, Twitter, LinkedIn, GitHub
} from "@material-ui/icons";

const LeftIcons = () => {
    let left = useRef(null);
    let icon1 = useRef(null);
    let icon2 = useRef(null);
    let icon3 = useRef(null);
    let icon4 = useRef(null);
    let icon5 = useRef(null);

    useEffect(() => {
        gsap.from(icon1, .8, {
            opacity: 0,
            x: 40,
            ease: Power3.easeOut 
        });

        gsap.from(icon2, .8, {
            opacity: 0,
            x: 40,
            ease: Power3.easeOut,
            delay: .2
        });

        gsap.from(icon3, .8, {
            opacity: 0,
            x: 40,
            ease: Power3.easeOut,
            delay: .4 
        })

        gsap.from(icon4, .8, {
            opacity: 0,
            x: 40,
            ease: Power3.easeOut,
            delay: .6 
        })

        gsap.from(icon5, .9, {
            opacity: 0,
            x: 42,
            ease: Power3.easeOut,
            delay: .8 
        })

    }, []);

    return (
        <div className="left" ref={el => left = el}>
            <div className="left-icons">
                <a href="">
                <Facebook className="left-icon fb" ref={el => icon1 = el} />
                </a>
                <a href="/wa.me/2349060311932" target="_blank" rel="noopener noreferrer">
                <WhatsApp className="left-icon wa" ref={el => icon2 = el} />
                </a>
                <a href="https://twitter.com/@ikezuby2012" target="blank">
                <Twitter className="left-icon tw" ref={el => icon3 = el} />
                </a>
                <a href="">
                <LinkedIn className="left-icon ln" ref={el => icon4 = el} />
                </a>
                <a href="https://github.com/ikezuby2012">
                <GitHub className="left-icon gt" ref={el => icon5 = el} />
                </a>
                
            </div>
        </div>
    )
}

export default LeftIcons;
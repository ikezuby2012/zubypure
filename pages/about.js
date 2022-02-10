import Link from "next/link";
import MainLayout from "../components/homePage/MainLayout";

//icons

import {
    Computer, SaveAlt, Security, ImportantDevices, Layers
} from "@material-ui/icons";

const About = () => {
    let Dob = new Date("01/02/2000");
    let monthDiff = Date.now() - Dob.getTime();
    let ageDt = new Date(monthDiff);
    let year = ageDt.getUTCFullYear();
    let age = Math.abs(year - 1970);

    return (
        <section>
            <MainLayout>
                <main className="personal">
                    <div className="personal-mirror">
                        <div className="about">
                            <h1 className="about-hdText">
                                about me
                            </h1>
                            <h2 className="about-spanText">
                                <span>{age} years / full-stack developer</span>
                            </h2>
                            <p>
                                i'm a fullstack developer with passion for building world class web applications and
                                improving my skills through learning and development works. consistently receive high user
                                experience score for all web development projects.
                            </p>

                            {/* <Link href={"#"} onClick={onSave}> */}
                                <a href={"/zuby's-resume.pdf"} className="about-link" target="_blank" download rel="noopener noreferrer">
                                    <span>download cv</span>
                                    <span>
                                        <SaveAlt className="about-icon" />
                                    </span>
                                </a>
                            {/* </Link> */}
                        </div>

                        <div className="services">
                            <div className="services-hdText">
                                my services
                            </div>
                            <div className="services-cards">
                                <div className="services-card">
                                    <span>
                                        <Computer className="services-card-icon"/>
                                    </span>
                                    <h2 className="services-card-hdText">
                                        software development
                                    </h2>
                                    <p>
                                        building a custom tailored solution based on your technical specification
                                    </p>
                                </div>

                                <div className="services-card">
                                    <span>
                                        <ImportantDevices className="services-card-icon"/>
                                    </span>
                                    <h2 className="services-card-hdText">
                                        SEO optimization
                                    </h2>
                                    <p>
                                       audit your websites, perform technical improvements and write meta tags 
                                    </p>
                                </div>

                                <div className="services-card">
                                    <span>
                                        <Layers className="services-card-icon"/>
                                    </span>
                                    <h2 className="services-card-hdText">
                                        database 
                                    </h2>
                                    <p>
                                       managing your website data using a NoSql database eg mongoDB, SSL certificate installation and configuration on your website.
                                    </p>
                                </div>

                                <div className="services-card">
                                    <span>
                                        <Security className="services-card-icon"/>
                                    </span>
                                    <h2 className="services-card-hdText">
                                        data security
                                    </h2>
                                    <p>
                                       Strategy with leading data protection technology to safeguard your critical data.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </MainLayout>
        </section>
    )
}

export default About;
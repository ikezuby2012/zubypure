import MainLayout from "../components/homePage/MainLayout";
import PortfolioBox from "../components/homePage/portfolioBox";

//images
import photo1 from "../public/utils/bg-img1.png";
import photo2 from "../public/utils/bg-img2.png";
import photo3 from "../public/utils/bg-img3.png";
import photo4 from "../public/utils/bg-img4.png";
import photo5 from "../public/utils/bg-img5.png";
import photo6 from "../public/utils/bg-img6.jpg";

const data = [
    {
        image: photo1,
        caption: "an investment website",
        link: "https://github.com/ikezuby2012/Cloud-invest",
        tools: ["react js", "scss", "node js", "express", "mongoDB"]
    },
    {
        image: photo2,
        caption: "a website for zedxog",
        link: "https://github.com/ikezuby2012/zedxog",
        tools: ["react js", "scss", "node js", "express", "mongoDB"]
    },
    {
        image: photo3,
        caption: "an E-commerce website",
        link: "https://github.com/ikezuby2012/ruby-stores",
        tools: ["react js", "scss", "node js", "express", "mongoDB"]
    },
    {
        image: photo4,
        caption: "my portfolio website",
        link: "https://github.com/ikezuby2012/",
        tools: ["next js", "scss", "node js", "express", "mongoDB"]
    },
    {
        image: photo5,
        caption: "a corporate society website",
        link: "https://github.com/ikezuby2012/corporateProject",
        tools: ["react js", "scss", "node js", "express", "mongoDB"]
    },
    {
        image: photo6,
        caption: "cheche-it website",
        link: "cheche-it.herokuapp.com",
        tools: ["react js", "scss", "node js", "express", "mongoDB"]
    },

]

const Portfolio = () => {
    return <section>
        <MainLayout>
            <div className="portfolio">
                <div className="portfolio-row">
                    <PortfolioBox image={data[0].image} caption={data[0].caption} link={data[0].link} />
                    <PortfolioBox image={data[1].image} caption={data[1].caption} link={data[1].link} />
                    <PortfolioBox image={data[2].image} caption={data[2].caption} link={data[2].link} />
                    <PortfolioBox image={data[3].image} caption={data[3].caption} link={data[3].link} />
                    <PortfolioBox image={data[4].image} caption={data[4].caption} link={data[4].link} />
                    <PortfolioBox image={data[5].image} caption={data[5].caption} link={data[5].link} />
                </div>
            </div>
        </MainLayout>
    </section>
}

export default Portfolio;
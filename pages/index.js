import { useState, useEffect } from "react";
import Head from 'next/head';
import Link from "next/link";
import Image from 'next/image';

import MainLayout from "../components/homePage/MainLayout";
import LeftIcons from "../components/homePage/LeftIcons";

export default function Home({ tools }) {
  const [skills, setSkills] = useState(tools);
  console.log(skills);


  const removeTool = (el) => {
    // let id = e.target.getAttribute("id");
    setSkills(skills.filter((tool) => tool.id !== el.id));
  }

  // setSkills(skills);

  return (
    <>
      <Head>
        <title>mr zuby</title>
        <meta name="description" content="a portfolio website for mr zuby, zuby is looking for a cool job" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <MainLayout>

          <div className="header_text-box">
            <div className="mr-5">
              <h1 className="header_text-h1">
                <span className={"header_text-primary"} contentEditable={true}>Hi, i'm Zuby.👋</span>
                <span className={"header_text-secondary"} contentEditable={true}>
                  i'm a full-stack developer and my tools are
                </span>
              </h1>
              <div className="header-tools">
                <ul className={"header_nav-list"}>
                  {skills.map((el, i) =>
                    <li key={i} className={"header-tools-item"}>
                      <span>{el.name}</span>
                      <button id={el.id} className={"header-tools-btn"} onClick={() => removeTool(el)}>&times;</button>
                    </li>
                  )
                  }
                </ul>
              </div>
              <div className="header-btns">
                <Link href={"/portfolio"}>
                  <a className={"header-btns-1"}>
                    visit portfolio
                  </a>
                </Link>
                <Link href={"/contact"}>
                  < a className={"header-btns-1"}>
                    get in touch
                  </a>
                </Link>
              </div>
            </div>
            <LeftIcons />
          </div>
        </MainLayout>
      </header>
    </>
  )
}

export async function getStaticProps(context) {

  return {
    props: {
      tools: [
        {
          "id": 2,
          "name": "scss"
        },
        {
          "id": 3,
          "name": "reactJs"
        },
        {
          "id": 4,
          "name": "nodeJs"
        },
        {
          "id": 5,
          "name": "nextJs"
        },
        {
          "id": 6,
          "name": "mongoDB"
        },
        {
          "id": 7,
          "name": "express"
        },
        {
          "id": 8,
          "name": "typescript"
        }
      ]
    }
  }
}
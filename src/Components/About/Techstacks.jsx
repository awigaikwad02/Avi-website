import React from "react";
import "./Techstacks.css";
// import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiTableau,
  SiMicrosoftexcel,
  SiMysql,
  SiPowerbi,
  SiR,
  SiPython,
  SiMicrosoftpowerpoint
} from "react-icons/si";
// import { DiCss3, DiMongodb } from "react-icons/di";
// import { SiJavascript, SiHeroku, SiPhp, SiSwift} from "react-icons/si";
// import { VscGithub } from "react-icons/vsc";
// import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiMicrosoftexcel />
            <h5>Excel</h5>
          </div>
          <div>
            <SiTableau />
            <h5>Tableau</h5>
          </div>
          <div>
            <SiMysql />
            <h5>SQL</h5>
          </div>
          <div>
            <SiPowerbi />
            <h5>Power BI</h5>
          </div>
          <div>
            <SiR />
            <h5>R</h5>
          </div>
          <div>
            <SiPython />
            <h5>Python</h5>
          </div>

          

          <div>
            <SiMicrosoftpowerpoint />
            <h5>Power Point</h5>
          </div>
          {/* <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          
          <div>
            <SiSwift />
            <h5>Swift</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div> */}
        </div>
      </div>
    </>
  );
};

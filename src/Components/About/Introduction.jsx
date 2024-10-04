import React from "react";
import "./Introduction.css";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">


            {/* 
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Vatsal Doshi </span> and I am pursing my{" "}
                <span className="different">
                  {" "}
                  Masters of Science in Information Systems
                </span>

                &nbsp;from{" "}
                <span className="different">Northeastern University </span>


                . I have completed my Bachelor of Engineering
                from{" "}
                <span className="different">
                  University Of Mumbai
                </span>
                . Then I joined full stack development course by{" "}
                <span className="different">Masai School</span> a military type
                coding school.
              </h4>
            
            */}

            <h4>
            Hello! I'm Avishkar Naresh Gaikwad, currently pursuing a Master’s in Business Analytics at 
Northeastern University. I hold a Bachelor’s in Management Studies from Sydenham College. I 
recently completed an internship at Honeywell, where I worked with tools like Tableau, Alteryx, 
Snowflake, and Salesforce to generate data insights for strategic decisions. Prior to this, I worked at 
KPMG as a Risk Analyst, focusing on forensic services and data analytics. I also have experience in 
marketing and business consulting, where I worked on client acquisition and retention strategies. My 
technical skills include Python, R, SQL, Power BI, and Microsoft Office, making me a versatile 
contributor to business analytics. 
            </h4>
              



            {/* 
            
            <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Entrepreneure{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Chess Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                YouTuber{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Poet{" "}
              </h4>
            
            */}
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

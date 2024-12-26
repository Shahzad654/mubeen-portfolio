import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Networking from "../assets/networking-05-svgrepo-com (1).svg";
import ReactJS from "../assets/reactjs.svg";
import HTML from "../assets/html.svg";
import CSS from "../assets/css-removebg-preview.png";
import JS from "../assets/JS.svg";
import Node from "../assets/nodejs.png";
import Firebase from "../assets/firebase.png";
import MUI from "../assets/mui.png";

import { motion } from "framer-motion";

export default function Skills() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      if (document.body.classList.contains("dark-mode")) {
        setIsDarkTheme(true);
      } else {
        setIsDarkTheme(false);
      }
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <StyledSkils
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h1>Skills</h1>
        {/* <div className="main_skills">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tabs
              onChange={handleChange}
              value={value}
              aria-label="Tabs where selection follows focus"
              selectionFollowsFocus
              sx={{
                "& .MuiTabs-indicator": {
                  top: 0,
                  bottom: "auto",
                  backgroundColor: "var(--primary-color-light)",
                },

                "& .MuiTab-root": {
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "2rem",
                  textTransform: "none",
                  color: "var(--background-color-dark)",
                },

                "& .MuiTab-root.Mui-selected": {
                  color: "var(--primary-color-light) !important",
                },

                //  body: {
                "body.light-mode &": {
                  "& .MuiTab-root": {
                    color: "black",
                  },
                  "& .MuiTab-root.Mui-selected": {
                    color: "var(--secondary-color-light) !important",
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "var(--secondary-color-light)",
                  },
                },
                // },

                "body.dark-mode &": {
                  "& .MuiTab-root": {
                    color: "var(--background-color-light)",
                  },
                  "& .MuiTab-root.Mui-selected": {
                    color: "var(--primary-color-light) !important",
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "var(--primary-color-light)",
                  },
                },
              }}
            >
              <Tab label="Robotics" />
              <Tab label="DevOps" />
            </Tabs>
          </Box>
        </div>
        <div className="tab_content">
          {value === 0 && <Robotics />} {value === 1 && <Devops />}
        </div> */}

        <StyledDevops>
          <div className="main_devops">
            <div className="skill_cards">
              <motion.div
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: false }}
              >
                <img src={ReactJS} alt="react" />

                <h4>ReactJS</h4>
              </motion.div>

              <motion.div
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: false }}
              >
                
                <img src={ReactJS} alt="react native" />

                <h4>React Native</h4>
              </motion.div>
              <motion.div
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: false }}
              >
                
                <img src={HTML} alt="html" />

                <h4>HTML</h4>
              </motion.div>

              <motion.div
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: false }}
              >
             
                <img src={CSS} alt="css" />

                <h4>CSS</h4>
              </motion.div>

              <motion.div
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: false }}
              >
               
                <img src={JS} alt="js" />

                <h4>JavaScript</h4>
              </motion.div>

              <motion.div
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: false }}
              >
              
                <img src={Node} alt="node" />

                <h4>NodeJS</h4>
              </motion.div>

              <motion.div
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: false }}
              >
                
                <img src={MUI} alt="mui" />

                <h4>MUI</h4>
              </motion.div>

             
            </div>
          </div>
        </StyledDevops>
      </StyledSkils>
    </>
  );
}


const StyledSkils = styled(motion.div)`
  width: 80%;
  margin: var(--section-margin) auto;
  height: max-content;
  h1 {
    font-size: var(--xl-heading);
    color: white;
    margin-bottom: var(--heading-margin);
  }
  .main_skills {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1024px) {
    h1 {
      text-align: center;
    }
  }

  @media (max-width: 640px) {
    h1 {
      text-align: center;
    }

    .main_skills {
      margin: var(--section-margin) auto;
    }
  }
`;

const StyledDevops = styled.div`
  .skill_cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.6rem;
    margin-top: var(--section-margin);
    .card {
      width: 250px;
      height: 150px;
      /* background-color: var(--background-color-light); */
      /* background: #1e3a8a99;
      box-shadow: -20px -20px 60px #1a317580, 20px 20px 60px white; */
      /* background:linear-gradient(to right, var(--background-color), #fdfeff);
      box-shadow: 20px 20px 60px #c1c9d2, -20px -20px 60px #ffffff; */
      border-radius: var(--m-radius);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      cursor: pointer;

      h4 {
        font-weight: 300;
      }
      .image_border {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        background-color: var(--primary-color);
        border-radius: var(--m-radius);
      }
      img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 28%;
        height: auto;
      }
    }
  }

  body.light-mode & {
    .skill_cards {
      .card {
        /* background-color: var(--secondary-color-dark); */
        background: linear-gradient(
          to right,
          var(--background-color-light-mode),
          #fdfeff
        );
        h4 {
          color: black;
        }
      }
    }
  }

  body.dark-mode & {
    .skill_cards {
      .card {
        /* background-color: var(--background-color-light); */
        box-shadow: 4px 4px 8px var(--shadow-color-dark),
          -4px -4px 8px var(--shadow-color-light);
      }
    }
  }
`;

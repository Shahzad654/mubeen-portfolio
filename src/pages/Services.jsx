import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import WebBlue from '../assets/web-development-svgrepo-com.svg'
import WebRed from '../assets/web-development-svgrepo-com (1).svg'
import AppBlue from '../assets/mobile-app-developing-svgrepo-com.svg'
import AppRed from '../assets/mobile-app-developing-svgrepo-com (1).svg'
import UIBlue from '../assets/ui-basic-write-pen-pencil-edit-svgrepo-com.svg'
import UIRed from '../assets/ui-basic-write-pen-pencil-edit-svgrepo-com (1).svg'

export default function Services() {
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
    <StyledService
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h1>Services</h1>
      <div className="services_cards">
        <motion.div
          className="cards"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img src={isDarkTheme ? WebRed : WebBlue} alt="Idea" />
          <h2>$199</h2>
          <h4>Web Development</h4>
          <ul>
            <li>Responsive Design</li>
            <li>Frontend and Backend</li>
            <li>Scalable and Secure</li>
          </ul>
          <button>Buy Now</button>
        </motion.div>

        <motion.div
          className="cards_center"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={isDarkTheme ? AppRed : WebBlue} alt="Idea" />
          <h2>$399</h2>
          <h4>App Development</h4>
          <ul>
            <li>User-Friendly</li>
            <li>Cross-Platform</li>
            <li>Performance-Optimized</li>
          </ul>
          <button>Buy Now</button>
        </motion.div>

        <motion.div
          className="cards"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <img src={isDarkTheme ? UIRed : UIBlue} alt="Idea" />
          <h2>$299</h2>
          <h4>UI/UX</h4>
          <ul>
            <li>Intuitive User Interfaces</li>
            <li>Seamless User Experiences</li>
            <li>Human-Centered Design</li>
          </ul>
          <button>Buy Now</button>
        </motion.div>
      </div>
    </StyledService>
  );
}

const StyledService = styled(motion.div)`
  width: 80%;
  margin: var(--section-margin) auto;
  height: max-content;
  h1 {
    font-size: var(--xl-heading);
    color: white;
    margin-bottom: var(--heading-margin);
  }

  .services_cards {
    display: flex;
    /* justify-content: center; */
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    .cards {
      width: 300px;
      height: 400px;
      /* background-color: var(--background-color-light); */
      /* background: #1e3a8a99;
      box-shadow: -20px -20px 60px #1a317580, 20px 20px 60px white; */
      /* background: #e3edf7;
      box-shadow: 20px 20px 60px #c1c9d2, -20px -20px 60px #ffffff; */

      border-radius: var(--l-radius);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 28%;
        height: auto;
      }

      h4,
      h2 {
        /* color: white; */
        word-wrap: break-word;
        text-align: center;
      }
      /* ul {
        list-style: none;
        li::marker {
          content: "✓"; 
         margin-right: 55px;
         text-align: start;
        }
      } */
      ul {
        list-style: none;
      }

      ul li {
        position: relative;
        padding-left: 20px;
      }

      ul li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: var(--secondary-color-light);
        font-weight: bold;
      }
      button {
        &:hover {
          background-color: var(--primary-color-dark);
        }
      }
    }
  }

  .cards_center {
    width: 300px;
    height: 450px;
    /* background-color: var(--background-color-light); */
    /* background: #1e3a8a99;
    box-shadow: -20px -20px 60px #1a317580, 20px 20px 60px white; */
    /* background: #e3edf7;
    box-shadow: 20px 20px 60px #c1c9d2, -20px -20px 60px #ffffff; */

    border-radius: var(--l-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    overflow: hidden;

    img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 28%;
      height: auto;
    }

    h4,
    h2 {
      /* color: white; */
      word-wrap: break-word;
      text-align: center;
    }
    ul {
        list-style: none;
      }

      ul li {
        position: relative;
        padding-left: 20px;
      }

      ul li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: var(--secondary-color-light);
        font-weight: bold;
      }
    button {
      &:hover {
        background-color: var(--primary-color-dark);
      }
    }
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

    .services_cards {
      .cards_center {
        height: 400px;
      }
    }
  }

  @media (max-width: 1200px) {
    .services_cards {
      justify-content: center;
      .cards_center {
        height: 400px;
      }
    }
  }

  body.light-mode & {
    .services_cards {
      .cards {
        /* background-color: var(--secondary-color-dark); */
        background: #e3edf7;
        box-shadow: 20px 20px 60px #c1c9d2, -20px -20px 60px #ffffff;
        h4,
        h2 {
          color: black;
        }
        ul {
          li {
            color: black;
          }
        }
        button {
          background-color: var(--secondary-color-light);
          &:hover {
            background-color: var(--secondary-color-dark);
          }
        }
      }
      .cards_center {
        /* background-color: var(--secondary-color-dark); */
        background: #e3edf7;
        box-shadow: 20px 20px 60px #c1c9d2, -20px -20px 60px #ffffff;
        h4,
        h2 {
          color: black;
        }
        ul {
          li {
            color: black;
          }
        }
        button {
          background-color: var(--secondary-color-light);
          &:hover {
            background-color: var(--secondary-color-dark);
          }
        }
      }
    }
  }

  body.dark-mode & {
    .cards {
      box-shadow: 4px 4px 8px var(--shadow-color-dark),
          -4px -4px 8px var(--shadow-color-light);
      
      ul li {
        color: white;
      }

      ul li::before {
        color: var(--primary-color);
      }
    }
    .cards_center {
      /* background-color: var(--background-color-light); */
      box-shadow: 4px 4px 8px var(--shadow-color-dark),
          -4px -4px 8px var(--shadow-color-light);
     
       ul li {
        color: white;
      }

      ul li::before {
        color: var(--primary-color);
      }
    }
  }
`;

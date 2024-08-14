// SCOPING CSS FILE INTO THIS COMPONENTS USING CSS MODULE
// import logo from '../assets/logo.png';
// import styles from '../components/header.module.css'

// export default function Header() {
//   return (
//     <header>
//       <img src={logo} alt="A canvas" />
//       <h1>ReactArt</h1>
//       <p className={styles.paragraph}>A community of artists and art-lovers.</p>
//     </header>
//   );
// }

//SCOPING CSS WITH STYLED COMPONENTS USING PSEUDO SELECTORS(WHICH IS BUTTON SIGN IN AT AUTHINPUT), NESTED RULES & MEDIA QUERIES
// import logo from "../assets/logo.png";
// import { styled } from "styled-components";

// const StyledHeader = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 2rem;
//   margin-bottom: 2rem;

//   & img {
//     object-fit: contain;
//     margin-bottom: 2rem;
//     width: 11rem;
//     height: 11rem;
//   }

//   & h1 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     letter-spacing: 0.4em;
//     text-align: center;
//     text-transform: uppercase;
//     color: #9a3412;
//     font-family: "Pacifico", cursive;
//     margin: 0;
//   }

//   & p {
//     text-align: center;
//     color: #a39191;
//     margin: 0;
//   }

//   @media (min-width: 768px) {
//     margin-bottom: 4rem;

//     & h1 {
//       font-size: 2.25rem;
//     }
//   }
// `;

// export default function Header() {
//   return (
//     <StyledHeader>
//       <img src={logo} alt="A canvas"/>
//       <h1>ReactArt</h1>
//       <p>A community of artists and art-lovers.</p>
//     </StyledHeader>
//   );
// }

//SCOPING CSS USING TAILWIND CSS
import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img
        className="object-contain mb-8 w-44 h-44"
        src={logo}
        alt="A canvas"
      />
      <h1 className="text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}

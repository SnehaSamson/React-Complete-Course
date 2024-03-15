
// import { styled } from 'styled-components';
import logo from '../assets/logo.png';
// import classes from './Header.module.css';

// const StyledHeader = styled.header`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center; 
//      margin-top: 2rem;
//     margin-bottom: 2rem;

//   //  - All other components or html elements comes under header will have the styles by adding the styles to the header styled 
//   //    components.
//   //  - By adding the & to the img tag and other tags comes under header the styles will be applied based on the css styles written.
//   //  - Replace header with & to apply the styles to all nested elements in the header.

     
//     & img {
//       object-fit: contain;
//       margin-bottom: 2rem;
//       width: 11rem;
//       height: 11rem;
//     }
    
//     & h1 {
//       font-size: 1.5rem;
//       font-weight: 600;
//       letter-spacing: 0.4em;
//       text-align: center;
//       text-transform: uppercase;
//       color: #9a3412;
//       font-family: 'Pacifico', cursive;
//       margin: 0;
//     }
    
//    & p{
//       text-align: center;
//       color: #a39191;
//       margin: 0;
//     }
    
//     @media (min-width: 768px) {
//       & {
//         margin-bottom: 4rem;
//       }
    
//       & h1 {
//         font-size: 2.25rem;
//       }
//     }
// `;

export default function Header() {
  return (
    // <StyledHeader>
    <header className=''>
      <img src={logo} alt="A canvas"  />
      <h1 >ReactArt</h1>

      {/* adding inline css */}
      {/* <p style={{
        color: 'red',
      }}>A community of artists and art-lovers.</p> */}

      {/* By adding the css module file and importing that file and giving that name to the class.  */}
      {/* <p className={classes.paragraph}>A community of artists and art-lovers.</p> */}

      {/* By using the styled components  */}
      <p>A community of artists and art-lovers.</p>
    {/*  </StyledHeader> */}
    </header>
    
  );
}

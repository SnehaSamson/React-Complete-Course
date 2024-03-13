import logo from '../assets/logo.png';
import classes from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>

     {/* adding inline css */}
      {/* <p style={{
        color: 'red',
      }}>A community of artists and art-lovers.</p> */}

      {/* By adding the css module file and importing that file and giving that name to the class.  */}
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}

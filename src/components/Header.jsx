import logo from '../assets/logo.png';
import classes from '../components/header.module.css'
// the module makes me import a javaScript object and access the classes from this object as properties then this class will be unique to this component by renaming the class in the dom when rendered to the browser so that it doesn't conflict with other classes in the global scope this mains my css now is scoped to this component only

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}

import { ActiveLink } from "./ActiveLink";
import style from './Navbar.module.css';

const menuItems = [
  { text: 'Index', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
  { text: 'Map', href: '/map' },
  { text: 'Pricing', href: '/pricing' },
];

export const Navbar = () => {
  return (
    <nav className={ style.navbar_wrap }>
      {
        menuItems.map( ( { href, text } ) => (
          <ActiveLink  key={ href } href={ href } text={ text } />
          ))
      }

      {/* { 
      <ActiveLink text="Index" href="ª/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" />
      <ActiveLink text="Map" href="/map" /> 
      } */}

      {/* {
        menuItems.map( e => (
          <ActiveLink href={ e.href } text={ e.text } />
        ))
      } */}
    </nav>
  )
}

import { NavLink } from "react-router";
import styled from 'styled-components'

export default function Header() {
    return (
        <header>
            <nav style={style.nav}>
                <Link to="/" end> Home </Link>
                <Link to="/about" end> About </Link>
                <Link to="/contactMe">Contact Me</Link>
            </nav>
            <hr></hr>
        </header>
    )
}

const style = {
    nav: {
        marginLeft: '2%'
    },
}

const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  margin-right: 1%;

  &:visited {
    text-decoration: none;
    color: white;
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:hover,
  &:active {
    text-decoration: none;
    color: gray;
  }
`;
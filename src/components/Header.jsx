import { NavLink } from "react-router";
import styled from 'styled-components'
import GhostWriter from '../assets/favicon.svg'

export default function Header() {
    return (
        <header style={style.container}>
            <h1 style={style.title}>Leo's Portfolio</h1>
            <img style={style.image} src={GhostWriter} alt="ghostWriter" width="30vh" height="30vh"></img>
            <nav style={style.nav}>
                <Link to="/" end> Home </Link>
                <Link to="/about" end> About Me </Link>
                <Link to="/contactMe">Contact Me</Link>
            </nav>
            <hr></hr>
        </header>
    )
}

const style = {
    container: {
      marginTop: '-1vh',
      color: 'white',
      width: '100vw'
    },
    title: {
      display: 'inline',
      marginRight: '1vw',
    },
    image:{
      //display: 'block'
    },
    nav: {
        marginLeft: '2%',
        marginTop: '1vh'
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
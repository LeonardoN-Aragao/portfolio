import { NavLink } from "react-router";
import styled from 'styled-components'
import Github from '../assets/social/github.svg'
import Linkedin from '../assets/social/linkedin.png'

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={style.container}>
            <hr></hr>
                <div style={style.links}>
                    <Link to="/" end> Home </Link>
                    <Link to="/about" end> About Me</Link>
                    <Link to="/contactMe">Contact Me</Link>
                </div>

                <p>Leonardo Nunes © {year}</p> 

                {/* Social */}
                <div>
                    <a href="https://www.github.com/leonardon-aragao" style={style.a} target="_blank" rel="noopener noreferrer">
                        <img src={Github} title="Github" alt="Github" style={style.image}></img>
                    </a>
                    <a href="https://www.linkedin.com/in/leonardo-nunes-aragão-156872164" style={style.social} target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} title="LinkedIn" alt="LinkedIn" style={style.image}></img>
                    </a>
                </div>
        </footer>
    )
}

const style = {
    container:{
        color: 'white',
        width: '100vw'
    },
    links: {
        marginLeft: '1vw',
        marginTop: '2vh'
    },
    a: {
        marginRight: '1vw'
    },
    image: {
        width: "4vh",
        height: "4vh"
    }
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


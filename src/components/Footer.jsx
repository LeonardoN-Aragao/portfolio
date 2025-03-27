import Github from '../assets/social/github.svg'
import Linkedin from '../assets/social/linkedin.png'

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={style}>
            <hr></hr>
            <p>Home</p>
            <p>About</p>
            <p>Contact Me</p>
            <p>Leonardo Nunes © {year}</p> 

            {/* Social */}
            <div>
                <a href="https://www.github.com/leonardon-aragao" target="_blank" rel="noopener noreferrer">
                    <img src={Github} title="Github" alt="Github" width="30px" height="30"></img>
                </a>
                <a href="https://www.linkedin.com/in/leonardo-nunes-aragão-156872164" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} title="LinkedIn" alt="LinkedIn" width="30px" height="30"></img>
                </a>
            </div>
        </footer>
    )
}

const style = {
    color: 'white'
}


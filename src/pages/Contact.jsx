import Footer from '../components/Footer'
import Header from '../components/Header'
import styled from 'styled-components'

export default function ContactMe() {
    return (
        <>
            <Header />
            <div style={style.container}>
                <h1>Contact Information</h1>
                <h2>Email</h2>
                <Link href="mailto:leonardonunesaragao@gmail.com?subject=Message from Portfolio Page">leonardonunesaragao@gmail.com</Link>
                <h2>Github</h2>
                <Link href="https://www.github.com/leonardon-aragao" target="_blank" rel="noopener noreferrer">LeonardoN-aragao</Link>
                <h2>Linkedin</h2>
                <Link href="https://www.linkedin.com/in/leonardo-nunes-aragão-156872164" target="_blank" rel="noopener noreferrer">Leonardo Nunes Aragão</Link>
            </div>
            <Footer />    
        </>
    )
}

const style = {
    container:{
        color: 'white',
        marginLeft: '2%'
    }
}

const Link = styled.a`
  text-decoration: none;
  color: lightSkyBlue;
  margin-right: 1%;

  &:visited {
    text-decoration: none;
    color: lightSkyBlue;
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
`
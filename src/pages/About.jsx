import Footer from "../components/Footer"
import Header from '../components/Header'
import styled from 'styled-components'

const image = require ('../assets/essa.png')

export default function About(){
    return (
        <>
            <Header />
            <div style={style.container}>
                <img style={style.image} src={image} alt="me" width="175px" height="175"></img>
                <h1> About me</h1>
                
                <h2> Resume </h2>
                <p>Leonardo Nunes Aragão, 27 years old</p>
                <p>Married</p>
                <p>FullStack Developer with focus in React and Java</p>
                <p>Currently working at <Link href="https://compass.uol/en/home/">Compass</Link></p>
                <p>My Degree Conclusion Work was <b>Using Data Warehouse to Analyse Energy Consumption in Brazil</b> it used python, sqlite and Data Science techniques to work with Big Data.</p>
                
                <h2>Skills</h2>
                    
                <h2> Education</h2>
                <h3>Computer Science - Bachelor's Degree</h3>
                <p>Universidade Federal De Juiz de Fora</p>
            </div>
            <Footer />    
        </>
    )
}

const style = {
    container: {
        marginLeft: '2%',
        color: 'white'
    },
    image:{
        //position: 'relative',
        clipPath: 'circle()'
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
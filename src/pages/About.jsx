import Footer from "../components/Footer"
import Header from '../components/Header'

const image = require ('../assets/essa.png')

export default function About(){
    return (
        <>
            <Header />
            <div style={style.container}>
                <img style={style.image} src={image} alt="me" width="175px" height="175"></img>
                <h1> About me</h1>
                <h2> Resume </h2>
                <p>FullStack Developer focus in React and Java</p>
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
        clipPath: 'circle()'
    }
}
import './Pages.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Timeline from '../components/Timeline'


export default function Home () {
    return (
        <>
        <Header />
        <div style={style.container}>
            <main>
               <h2>Hi, good to have you here!</h2>
                <p>I'm Leonardo, but call me Leo. </p>
                <p>A computer scientist, aka. Software Engeenier, FullStack Developer... </p>
                <p>Some of my projects and Experiencies are show above in a diferent way. Really didn't found any simple way to do it, so I plan to create a simple timeline component that doesn't need much to be render.</p>
                <p style={{color: 'red'}}>This page still a work in progress... (side projects while working can be really hard and demanding)</p>
                <Timeline />
            </main> 
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
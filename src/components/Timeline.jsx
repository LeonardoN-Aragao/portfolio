import { itens } from '../itemList'
import styled from 'styled-components'
import '../pages/Pages.css'

export default function Timeline(){
    return (
    <div className="tg-wrap timeline">
         <h2>Projects</h2>
        <table className="tg">
        <tbody>
        {itens.map((item,index) => (
            <tr key={index}>
                <td className="dataline"><p style={{ alignSelf: 'end'}}> {item.date} </p></td>
                <td className="tg-0pky">
                    <div className="card">
                        <img className="image" style={style.image} src={item.image} alt=""></img>
                        <div style={style.content}>
                            <h3> {item.title} </h3>
                            <p> {item.name} </p>
                            <p> {item.description} </p>
                            <Link href={item.link}>{item.link}</Link>
                            <div style={style.keywords}>
                                <p >Keywords: </p>
                                {item.keywords.map( (key,index) => (
                                    <p key={index} className="keywords" style={{marginLeft: '1vw'}}> {key} </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </td>
            </tr> 
        ))}
        </tbody>
        </table>
    </div>
    )
}

const style = {
    container:{
        color: 'white',
        marginLeft: '1%',
        display: 'flex',
    },
    content: {
        marginLeft: '2%',
        heigth: '10vh'
    },
    keywords: {
        display: 'flex'
    },
    image: {
        borderRadius: '2vh',
        width: '15vw',
        heigth: '15vw'
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
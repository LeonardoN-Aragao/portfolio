import { itens } from '../itemList'
import styled from 'styled-components'
import '../pages/Pages.css'

export default function Timeline(){
    return (
    <div class="tg-wrap timeline">
         <h2>Projects</h2>
        <table class="tg"><tbody>
        {itens.map(item => (
        <tr>
            <td class="dataline"><p style={{ alignSelf: 'end'}}> {item.date} </p></td>
            <td class="tg-0pky">
                <div class="card">
                    <img class="image" style={style.image} src={item.image} alt=""></img>
                    <div style={style.content}>
                        <h3> {item.title} </h3>
                        <p> {item.name} </p>
                        <p> {item.description} </p>
                        <Link href={item.link}>{item.link}</Link>
                        <div style={style.keywords}>
                            <p >Keywords: </p>
                            {item.keywords.map( key => (
                                <p class="keywords" style={{marginLeft: '1vw'}}> {key} </p>
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
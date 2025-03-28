import '../pages/Pages.css'
import { itens } from '../itemList'

export default function Timeline(){
    return (
    <div class="tg-wrap timeline">
         <h2>Projects</h2>
        <table class="tg"><tbody>
        {itens.map(item => (
        <tr>
            <td class="dataline"><p style={{ alignSelf: 'end'}}> {item.date} </p></td>
            <td class="tg-0pky">
                <div style={style.card}>
                    {item.images.map ( image => (
                    <img class="image" style={{borderRadius: '5px'}} src={image} alt="" width="300px" minHeight="30vh" maxHeight="30vh"></img>
                    ))}
                    <div style={style.content}>
                        <h2> {item.title} </h2>
                        <p> {item.name} </p>
                        <p> {item.description} </p>
                        <a href={item.link}>{item.link}</a>
                        <div style={style.keywords}>
                            <p>Keywords: </p>
                            {item.keywords.map( key => (
                                <p style={{marginLeft: '1vh'}}> {key} </p>
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
    card: {
        display: 'flex',
        border: '1px solid white',
        borderRadius: '1vh',
        margin: '1vh',
        padding: '1vh',
        height: '22vh',
        maxWidth: '90vh'
    },
    content: {
        marginLeft: '2%',
    },
    keywords: {
        display: 'flex'
    }
}


// const style = {
    //     container:{
        //         color: 'white',
        //         marginLeft: '1%',
        //         display: 'flex',
        //     },
        //     line: {
            //         left: '2px', display: 'flex', height: '30vh', width: '7vh'
            //     },
//     card: {
//         display: 'flex',
//         border: '1px solid white',
//         margin: '1vh',
//         padding: '1vh'
//     },
//     content: {
//         marginLeft: '2%',
//     },
//     keywords: {
//         display: 'flex'
//     }
// }

/*
const style2 = {
    background: 'pink'
}

const style3 = {
    background: 'blue'
}

const style4 = {
    background: 'green'
}


 <div class="timeline-item">
                <div class="timeline-item-content">
                    <span class="tag" style={style}>app-ideas</span>
                    <time>February 25 2019</time>
                    <p>Started working on the app-ideas repository</p>
                    <a href="#!" target="_blank" rel="noopener noreferrer">Check it out on GitHub</a>
                    <span class="circle"></span>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-item-content">
                    <span class="tag" style={style2}>blog</span>
                    <time>March 04 2019</time><p>Started the Weekly Coding Challenge program</p>
                    <a href="#!" target="_blank" rel="noopener noreferrer">Check it out here</a>
                    <span class="circle"></span>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-item-content">
                    <span class="tag" style={style3}>twitter</span>
                    <time>March 07 2019</time>
                    <p>Got 1.000 followers on Twitter</p>
                    <a href="#!" target="_blank" rel="noopener noreferrer">See profile</a><span class="circle"></span>
                </div>
            </div>
                <div class="timeline-item"><div class="timeline-item-content">
                    <span class="tag" style={style4}>medium</span>
                    <time>March 18 2019</time>
                    <p>I published my first article in the FreeCodeCamp Medium Publication</p>
                    <a href="#!" target="_blank" rel="noopener noreferrer">Check it out here</a>
                    <span class="circle"></span>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-item-content">
                    <span class="tag" style={style4}>medium</span>
                    <time>April 05 2019</time>
                    <p>Over 12.000 views in a single day on my Medium posts</p>
                    <a href="#!" target="_blank" rel="noopener noreferrer">See profile</a>
                    <span class="circle"></span>
                </div>
            </div> 
            */
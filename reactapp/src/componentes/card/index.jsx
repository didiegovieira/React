import './styles.css';

export function Card(props){
    return(
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}

// desta forma abaixo tambme funciona passar as propriedades
// export function Card(name , time){
//     return(
//         <div className='card'>
//             <strong>{name}</strong>
//             <small>{time}</small>
//         </div>
//     )
// }

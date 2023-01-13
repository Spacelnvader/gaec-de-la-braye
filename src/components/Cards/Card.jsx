import "./Card.css"

function Card(props)  {
    return  (
        <article>
            <img src={props.cover} alt={props.title} />
            <div></div>
            <h2>{props.title}</h2>
        </article>
    )
}

export default Card
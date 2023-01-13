import "./Card.css"

function Card(props)  {
    return  (
        <article>
            <img src={props.cover} alt={props.title} />
            <h2>{props.title}</h2>
            <div>{props.description}</div>
        </article>
    )
}

export default Card
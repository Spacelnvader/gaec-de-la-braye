import "./Card.css"

function Card(props)  {
    return  (
        <article className="card">
            <img src={props.cover} alt={props.title} />
            <h2>{props.title}</h2>
            <div>{props.description}</div>
            <span>{props.price}</span>
        </article>
    )
}

export default Card
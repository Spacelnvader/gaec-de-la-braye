import "../style/Page404.css"
import { Link } from "react-router-dom"

export default function Page404() {
    return (
        <section className="page404Section">
            <h6>404</h6>
            <p>Il n'y a pas une vache ici</p>
            <Link to="/" className="backHomeLink">
                Retourner sur la page d'accueil
            </Link>
        </section>
    )
}
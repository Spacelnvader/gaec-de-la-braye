import "../style/Accueil.css"
import prairieVaches from "../assets/prairie-vaches.jpg"
import { FaLeaf } from 'react-icons/fa'
import { SiHappycow } from 'react-icons/si'
import { GiFarmTractor } from 'react-icons/gi'



function Accueil() {
    return (
        <><div className="home">
            <img src={prairieVaches} alt="prairie avec des vaches" className="prairieVaches" />
            <section className="aboutus">
                <GiFarmTractor className='cow' /><h3>Bonjour et bienvenue à tous!</h3><SiHappycow className='cow' />
                <p>Nous vous proposons ici la découverte de viande rouge issue de notre ferme à Sargé sur braye (41170) dans le Loir et Cher.
                    Nous vous proposons de la vache et du veau Blonde d'Aquitaine nourries avec des céréales et du fourrage que nous produisons sur la ferme. Nous vous garantissons qualité et traçabilité.</p>
                <span className="green-bald-text"> <FaLeaf className='leaf' />Nous sommes en agriculture conventionnelle, mais raisonnée et sans OGM!<FaLeaf className='leaf' /></span>
                <p>Nos vaches pâturent dans de grands champs de prairies naturelles de mars à novembre chaque année et sont rentrées au chaud l'hiver en étable (en air paillé) où elles sont nourries au maïs ensilage, foin de bonne qualité, enrubannage et céréales, le tout produit sur la ferme ! Nous donnons des granulés si nécessaire (sans OGM) que nous achetons à un partenaire local.
                    Nous avons projet de développer notre viande en d'autre formats style saucisson, carpaccio etc. Mais pour l'instant nous nous renseignons, je mettrai sur le site le déroulement de ce projet. Si vous avez d'autres questions, ou besoin d'un renseignement n'hésitez pas je vous répondrai avec plaisir !</p>
            </section>
        </div></>
        

    )
}

export default Accueil
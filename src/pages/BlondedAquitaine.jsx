import vache from '../assets/BlondeAquitaine.jpg'
import platViande1 from '../assets/plat-viande-1.jpg'
import '../style/BlondedAquitaine.css'
import {CiMedal} from 'react-icons/ci'


function BlondedAquitaine() {
    return(
        <div className='BAquitaine-container'>
        <h3>Pourquoi préférer la blonde d'Aquitaine?</h3>
            <article className='BAquitaine-article'>Race bovine de grand format dédiée à la production de viande, la Blonde d'Aquitaine ne cesse de se développer depuis sa création en 1962. Vache à viande spécialisée à fort développement corporel, la Blonde d'Aquitaine exprime une musculature puissante et rebondie, une ossature fine. Elle génère une croissance remarquable à tous les âges, avec du gabarit et un gros potentiel musculaire. Animal docile dans la plupart des cas (pas toutes mignonnes mais presque !) et facile d'entretien.</article>
            <img src={vache} alt='vache blonde aquitaine'></img>
            <h3><CiMedal className='Medal'/>Ses qualités bouchères</h3>
            <article className='BAquitaine-article'>La viande de Blonde d'Aquitaine se différencie par son persillé, la finesse de ses fibres musculaires. Avec peu de couverture de gras, c'est une viande goûteuse, diététique et festive. Un élevage de qualité par des femmes et des hommes passionnés, qui permettent au consommateur de retrouver dans son assiette une viande rouge peu grasse (moins de perte à la cuisson et diététique) et tendre (sur le podium des viandes les plus tendres). Les morceaux généreux raviront les gourmands tandis que la finesse gustative séduira les gourmets.</article>
            <img src={platViande1} alt='plat de viande'></img>
        </div>
        
    )
}

export default BlondedAquitaine
import Card from '../components/Cards/Card'
import {getAllColis} from '../services/datamanager'
import '../style/Colis.css'

function Colis() {
    return (
        <><div className="colis">
            {getAllColis().map((colis) => (
                <Card
                    key={colis.id}
                    title={colis.title}
                    cover={colis.cover}
                    description={colis.description}
                    price={colis.price} />
            ))}
        </div>
        <div className='disclaimer'>
            
            <p>Nos morceaux de viande ne pèsent évidemment pas tous le même poids, donc les colis sont toujours au poids approximatif mais ne seront jamais moins que le poids demandé, le montant facturé correspondra au poids réel du produit livré</p>
        </div>
        </>
    )
}

export default Colis
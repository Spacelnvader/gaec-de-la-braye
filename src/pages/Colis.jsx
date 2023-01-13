import Card from '../components/Cards/Card'
import {getAllColis} from '../services/datamanager'

function Colis() {
    return (
        <div className="colis">
            {getAllColis().map((colis) => (
                <Card
                    key={colis.id}
                    title={colis.title}
                    cover={colis.cover}
                    description={colis.description}
                />
            ))}
        </div>
    )
}

export default Colis
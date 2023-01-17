import Card from "../components/Cards/Card";
import {getAllRecettes} from '../services/datamanager'
import '../style/IdéeRecette.css'
import { Link } from "react-router-dom";


function IdeeRecette() {

    return (
       <div className="recettes">
            {getAllRecettes().map((recipe) => (
                <><Card
                    key={recipe.id}
                    title={recipe.title}
                    cover={recipe.cover} 
                    disclaimer={<Link to={`/ideesrecettes/${recipe.id}`}>Voir la recette</Link>}> 
                </Card>
                </>
            ))}
        </div>
        
       
    )
} 

export default IdeeRecette;
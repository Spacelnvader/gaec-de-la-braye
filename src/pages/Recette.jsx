import { getRecipeById } from "../services/datamanager"
import { useParams } from "react-router-dom"
import Page404 from "./Page404"
import '../style/Recette.css'


function Recette() {
    const { recetteId } = useParams();
    const recette = getRecipeById(recetteId);

    return recette ? (
        <div className="recette">
            <div className="recetteheader">
                <h1>{recette.title}</h1>
                <img src={recette.cover} alt={recette.title} />
                <div className="requirementwrapper">
                    {recette.requirement.map((requirement, index) => (
                        <div key={index} className="requirement">
                            <p>{requirement.preparation}{requirement.cuisson}{requirement.parts}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="recettewrapper">
                <div className="recetteingredient">
                    {/* get all children from parent json */}
                    {recette.ingredients.map((ingredients, index) => (
                        <div key={index} className="ingredient">
                            <p>{ingredients.ingredient}</p>
                            <p>{ingredients.quantity}</p>
                            <p>{ingredients.unit}</p>
                        </div>

                    ))}
                </div>
                <div className="recettestep">
                    {/* put each step from steps in a paragraph */}
                    {recette.steps.map((step, index) => (
                        <p key={index}>{step.step}</p>
                    ))}

                </div>
            </div>
        </div>

    ) : (
        <Page404 />
    )
}

export default Recette
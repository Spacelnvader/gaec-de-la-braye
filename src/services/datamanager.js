import colis from '../data/colis.json';
import recipes from '../data/recettes.json'

function getAllColis(){
    return colis.map((colis)=>{
        return {
            cover : colis.cover,
            description : colis.description,
            title :colis.title,
            id : colis.id,
            price : colis.price,
            disclaimer : colis.disclaimer
        }
    })
};

function getAllRecettes(){
    return recipes.map((recipe)=>{
        return {
            cover : recipe.cover,
            title :recipe.title,
            id : recipe.id,
            requirement : recipe.requirement,
            
        }
    })
}

function getRecipeById(id){

    return recipes.find((recipe)=> recipe.id === id);

}

export {getAllColis, getAllRecettes, getRecipeById}


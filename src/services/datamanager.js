import colis from '../data/colis.json';

function getAllColis(){
    return colis.map((colis)=>{
        return {
            cover : colis.cover,
            description : colis.description,
            title :colis.title,
            id : colis.id,
            price : colis.price
        }
    })
};

export {getAllColis}


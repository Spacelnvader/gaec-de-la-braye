import './Footer.css';
import  feuille2  from "../../assets/leaf2.png";
import { GrFacebook } from 'react-icons/gr';


function Footer() {
    return (
        <footer>
            <img src={feuille2} alt='feuilles'></img>
            <div>
            <p>Suivez nous sur Facebook pour être averti des dates des colis et leurs prix</p>
            <a href='https://www.facebook.com/profile.php?id=100050345782564'><GrFacebook className='facebook'/></a>
            <p>© 2023 GAEC de la Braye</p>
            </div>
            
           
        </footer>
    )
}

export default Footer;
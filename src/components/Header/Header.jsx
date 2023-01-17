import { NavLink } from "react-router-dom"
import logo from "../../assets/logo-gaec.png"
import "./Header.css"

function Header() {
    return (
        <header>
            <div className="header-top">
            <img src={logo} className="logo" alt="logo gaec" />
            </div>
            <nav>
                <NavLink
                    to="/"
                    className={(homeCurrentPage) =>
                        homeCurrentPage.isActive ? "active" : ""
                    }
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/blondedaquitaine"
                    className={(blondedaquitaineCurrentPage) =>
                        blondedaquitaineCurrentPage.isActive ? "active" : ""
                    }
                >
                    La Blonde d'Aquitaine
                </NavLink>
                <NavLink
                    to="/noscolis"
                    className={(noscolisCurrentPage) =>
                        noscolisCurrentPage.isActive ? "active" : ""
                    }
                >
                    Nos Colis
                </NavLink>
                <NavLink
                    to="/produits"
                    className={(produitsCurrentPage) =>
                        produitsCurrentPage.isActive ? "active" : ""
                    }
                >
                    Produits transformés
                </NavLink>
                <NavLink
                    to="/ideesrecettes"
                    className={(idéerecetteCurrentPage) =>
                        idéerecetteCurrentPage.isActive ? "active" : ""
                    }
                >
                    Idées Recettes
                </NavLink>
                <NavLink
                    to="/contact"
                    className={(idéerecetteCurrentPage) =>
                        idéerecetteCurrentPage.isActive ? "active" : ""
                    }
                >
                    Nous Contacter
                </NavLink>
                
            </nav>
        </header>
    )
}

export default Header
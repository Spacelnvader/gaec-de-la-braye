import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // const { ConsommationMensuelle, BudgetViande } = e.target.elements;
    // let TransformationFavorite = "";
    // let TransformationFavoriteArray = document.querySelectorAll(
    //   "input[name=TransformationFavorite]:checked"
    // );
    // TransformationFavoriteArray.forEach((element) => {
    //   TransformationFavorite += element.value + " | ";
    // });
    // let QuestionnaireFacultatif = "Consommation de viande : " + ConsommationMensuelle.value + " <br/> Budget prêt à consacrer mensuellement : " + BudgetViande.value + " <br/> Transformation de viande favorite : " + TransformationFavorite;

    emailjs.sendForm(
      'service_ttyt09a',
      'template_y0xy89b',
      form.current,
      'd9iQIipgOmEcFE1io'
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    //reset the form
    e.target.reset();
  };

  

  

  return (
    <form ref={form} onSubmit={handleSubmit} className="ContactForm">
      <div className="contactdiv">
      <div className="formName">
        <label htmlFor="name"></label>
        <input type="text" name="name" id="name" className="nameinput" required placeholder="Nom et Prénom" />
      </div>
      <div className="formEmail">
        <label htmlFor="email"></label>
        <input type="email" name="email" id="email" className="emailinput" required placeholder="Email" />
      </div>
      <div className="formMessage">
        <label htmlFor="message"></label>
        <textarea id="message"  name="message" rows="10" cols="50" required placeholder="Votre message ..." maxLength="1000"/>
      </div>
      </div>
      <h2>Questionnaire facultatif</h2>
      <div className="RadioFields" id="RadioFields">
        <fieldset className="formgroup1">
          <div className="formcheck">
            <legend className="radioTitle">Combien de fois par semaine consommez-vous de la viande?</legend>
            <div className="Choices">
              <div className="Choice" >
                <label className="form-check-label" htmlFor="defaultCheck1">Tous les jours</label>
                <input className="form-check-input" type="radio" name="ConsommationMensuelle" value="Tous les jours" id="defaultCheck1" />

              </div>
              <div className="Choice" >
                <label className="form-check-label" htmlFor="defaultCheck1">4 fois par semaine</label>
                <input className="form-check-input" type="radio" name="ConsommationMensuelle" value="4 fois par semaine" id="defaultCheck1" />

              </div>
              <div className="Choice" >
                <label className="form-check-label" htmlFor="defaultCheck1">2 fois par semaine</label>
                <input className="form-check-input" type="radio" name="ConsommationMensuelle" value="2 fois par semaine" id="defaultCheck1" />

              </div>
              <div className="Choice" >
                <label className="form-check-label" htmlFor="defaultCheck1">Occasionnelement</label>
                <input className="form-check-input" type="radio" name="ConsommationMensuelle" value="Occasionnelement" id="defaultCheck1" />

              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="formgroup2">
          <div className="formcheck">
            <legend className="radioTitle">Quel budget mensuel seriez-vous prêt(e) à consacrer pour vos achats de viande?</legend>
            <div className="Choices">
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck2">Moins de 50€</label>
                <input className="form-check-input" type="radio" name="BudgetViande" value="Moins de 50€" />

              </div>
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck2">Entre 50€ et 100€</label>
                <input className="form-check-input" type="radio" name="BudgetViande" value="Entre 50€ et 100€" />

              </div>
              
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck2">Plus de 100€</label>
                <input className="form-check-input" type="radio" name="BudgetViande" value="Plus de 100€" />

              </div>
              
            </div>
          </div>
          
        </fieldset>
        <fieldset className="formgroup3">
          <div className="formcheck">
            <legend className="radioTitle">Sous quelle forme achetez-vous le plus souvent votre viande de boeuf ou de veau?</legend>
            <div className="Choices">
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck3">En morceaux pour recette (sauce, pot au feu..)</label>
                <input className="TransformationFavorite" type="checkbox" name="TransformationFavorite" value="En morceaux pour recette (sauce, pot au feu...)" />

              </div>
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck3">Bavette, steak, rumsteak</label>
                <input className="TransformationFavorite" type="checkbox" name="TransformationFavorite" value="Bavette, steak, rumsteak" />

              </div>
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck3">Entrecôte ou côte de boeuf</label>
                <input className="TransformationFavorite" type="checkbox" name="TransformationFavorite" value="Entrecôte ou côte de boeuf" />

              </div>
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck3">Rôti, tournedos</label>
                <input className="TransformationFavorite" type="checkbox" name="TransformationFavorite" value="Rôti, tournedos" />

              </div>
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck3">Carpaccio ou tartare</label>
                <input className="TransformationFavorite" type="checkbox" name="TransformationFavorite" value="Carpaccio ou tartare" />

              </div>
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck3">Steak hachés ou saucisses</label>
                <input className="TransformationFavorite" type="checkbox" name="TransformationFavorite" value="Steak hachés ou saucisses" />

              </div>
            </div>
          </div>
        </fieldset>
      </div>
      
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
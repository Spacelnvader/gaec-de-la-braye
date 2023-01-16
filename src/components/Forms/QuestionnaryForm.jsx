import React, { useState } from "react";
import "./QuestionnaryForm.css";

const QuestionnaryForm = () => {

  const [status, setStatus] = useState("Envoyer");
  const submit = async (e) => {
    e.preventDefault();
    setStatus("Envoi...");
    const { defaultCheck1, defaultCheck2, defaultCheck3, commentaire, name } = e.target.elements;
    let details = {
      choice1: defaultCheck1.value,
      choice2: defaultCheck2.value,
      choice3: defaultCheck3.value,
      commentaire: commentaire.value,
      name: name.value,

    };
    console.log(details)
    let response = await fetch("http://localhost:3001", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    //reset the form
    e.target.reset();
  };
  return (
    <form onSubmit={submit} className="QuestionnaryForm">
      <div className="RadioFields" >
        <fieldset className="formgroup1">
          <div className="formcheck">
            <legend className="radioTitle">Combien de fois par semaine consommez-vous de la viande ?</legend>
            <div className="Choices">
              <div className="Choice" >
                <label className="form-check-label" htmlFor="defaultCheck1">Tous les jours</label>
                <input className="form-check-input" type="radio" name="ConsommationMensuelle" value="option1" id="defaultCheck1" />

              </div>
              <div className="Choice" >
                <label className="form-check-label" htmlFor="defaultCheck1">4 fois par semaine</label>
                <input className="form-check-input" type="radio" name="ConsommationMensuelle" value="option2" id="defaultCheck1" />

              </div>
              <div className="Choice" >
                <label className="form-check-label" htmlFor="defaultCheck1">2 fois par semaine</label>
                <input className="form-check-input" type="radio" name="ConsommationMensuelle" value="option3" id="defaultCheck1" />

              </div>
              <div className="Choice" >
                <label className="form-check-label" htmlFor="defaultCheck1">Occasionnelement</label>
                <input className="form-check-input" type="radio" name="ConsommationMensuelle" value="option4" id="defaultCheck1" />

              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="formgroup2">
          <div className="formcheck">
            <legend className="radioTitle">Quel budget mensuel seriez-vous prêt(e) à consacrer pour vos achats de viande ?</legend>
            <div className="Choices">
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck2">Moins de 50€</label>
                <input className="form-check-input" type="radio" name="BudgetViande" value="option1" />

              </div>
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck2">Entre 50€ et 100€</label>
                <input className="form-check-input" type="radio" name="BudgetViande" value="option2" />

              </div>
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck2">Plus de 100€</label>
                <input className="form-check-input" type="radio" name="BudgetViande" value="option3" />

              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="formgroup3">
          <div className="formcheck">
            <legend className="radioTitle">Sous quelle forme achetez-vous le plus souvent votre viande de boeuf ou de veau ?</legend>
            <div className="Choices">
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck3">En morceaux pour recette (sauce, pot au feu...)</label>
                <input className="form-check-input" type="radio" name="TransformationFavorite" value="option1" />

              </div>
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck3">Bavette, steak, rumsteak</label>
                <input className="form-check-input" type="radio" name="TransformationFavorite" value="option2" />

              </div>
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck3">Entrecôte ou côte de boeuf</label>
                <input className="form-check-input" type="radio" name="TransformationFavorite" value="option3" />

              </div>
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck3">Rôti, tournedos</label>
                <input className="form-check-input" type="radio" name="TransformationFavorite" value="option4" />

              </div>
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck3">Carpaccio ou tartare</label>
                <input className="form-check-input" type="radio" name="TransformationFavorite" value="option5" />

              </div>
              <div className="Choice">
                <label className="form-check-label" htmlFor="defaultCheck3">Steak hachés ou saucisses</label>
                <input className="form-check-input" type="radio" name="TransformationFavorite" value="option6" />

              </div>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="formgroup4">
        <label htmlFor="commentaire"></label>
        <legend>Un commentaire ?</legend>
        <textarea id="message" rows="15" cols="70" required placeholder="N'hésitez pas à donner votre avis, comment pourions nous nous améliorer ?" maxLength="1000" />
      </div>
      <div className="formName">
        <label htmlFor="name"></label>
        <input type="text" id="name" className="nameinput" required placeholder="Nom et Prénom" />
      </div>
      <button type="submit" className="Envoyer">{status}</button>
    </form>
  );
};

export default QuestionnaryForm;
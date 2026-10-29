import {useState} from 'react';
function StudentCard(props) {
  const [coordonneesVisibles, setcoordonneesVisibles] = useState(false);
  function basculerInformations(){
    setcoordonneesVisibles(!coordonneesVisibles);
  }


  const ville = props.Ville || "non renseignèe";

  return (
    <>
      <div className="student-card">

        <button onClick={basculerInformations}>
          {coordonneesVisibles 
            ? 'Masquer les informations'
            : 'Afficher les informations'}
        </button>
        
          <img
            src={props.image}
            alt="Photo de l'étudiante"
            width="150"
          />

          <h1>Fiche Étudiant</h1>

          <p>
            <strong>Nom & Prénom :</strong>{' '}
            {props.prenom} {props.nom}
          </p>

          <p>
            <strong>Email :</strong> {props.Email}
          </p>

          <p>
            <strong>Téléphone :</strong> {props.Telephone}
          </p>

          <p>
            <strong>Filière :</strong> {props.Filiere}
          </p>

          <p>
            <strong>Année d'étude :</strong> {props.anneeEtude}
          </p>

          <p>
            <strong>Groupe :</strong> {props.Groupe}
          </p>

          <p>
            <strong>Ville :</strong> {ville}
          </p>

          <a href={`mailto:${props.Email}`}>
            <button className="btn-contacter">Contacter</button>
          </a>
      
      </div>
    </>
  );
}

export default StudentCard;
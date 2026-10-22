
function StudentCard(props) {
    const ville = props.Ville || "non renseignèe";
  return (
    <>
      <div className="container">
        <div className="card">
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
            <strong>Téléphone :</strong> {props.Téléphone}
          </p>

          <p>
            <strong>Filière :</strong> {props.Filière}
          </p>

          <p>
            <strong>Année d'étude :</strong> {props.anneeEtude}
          </p>

          <p>
            <strong>Groupe :</strong> {props.Groupe}
          </p>

          <p>
            <strong>Ville :</strong> {Ville}
          </p>

          <a href={`mailto:${etudiant.Email}`}>
            <button className="btn-contacter">Contacter</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default StudentCard;
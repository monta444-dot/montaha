import './App.css'


import studentImg from 'C:/Users/Khouloud/Documents/tp/university-app/src/assets/pfp.jpg';

const etudiant = {
  prenom: 'montaha',
  nom: 'hamdoun',
  Email: 'montahahamdoun@gmail.com',
  Téléphone: '+216 52712646',
  Filière: 'Génie logiciel et systèmes d’information',
  anneeEtude: '2ème année',
  Groupe: 'Glsi D 2',
  Ville: 'Mahdia',
  image: studentImg,
};

function StudentCard() {
  return (
    <>
      <div className="container">
        <div className="card">
          <img
            src={etudiant.image}
            alt="Photo de l'étudiante"
            width="150"
          />

          <h1>Fiche Étudiant</h1>

          <p>
            <strong>Nom & Prénom :</strong>{' '}
            {etudiant.prenom} {etudiant.nom}
          </p>

          <p>
            <strong>Email :</strong> {etudiant.Email}
          </p>

          <p>
            <strong>Téléphone :</strong> {etudiant.Téléphone}
          </p>

          <p>
            <strong>Filière :</strong> {etudiant.Filière}
          </p>

          <p>
            <strong>Année d'étude :</strong> {etudiant.anneeEtude}
          </p>

          <p>
            <strong>Groupe :</strong> {etudiant.Groupe}
          </p>

          <p>
            <strong>Ville :</strong> {etudiant.Ville}
          </p>
          
          <p>
            <strong>Ville :</strong> {etudiant.Ville}
          </p>

          <a href={`mailto:${etudiant.Email}`}>
            <button className="btn-contacter">Contacter</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default StudentCard;
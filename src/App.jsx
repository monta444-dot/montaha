import './App.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

import StudentCard from './components/StudentCard.jsx';
import studentImg from "./assets/pfp.jpg" ;
import {useState} from "react";
const [etudiant, setEtudiant] =[useState([
  {
    prenom: 'montaha',
    nom: 'hamdoun',
    Email: 'montahahamdoun@gmail.com',
    Telephone: '+216 52712646',
    Filiere: 'Génie logiciel et systèmes d-information',
    anneeEtude: '2ème année',
    Groupe: 'Glsi D 2',
    Ville: 'Mahdia',
    image: studentImg,
  },

  {
    prenom: 'sarra',
    nom: 'trabelsi',
    Email: 'sarra.trabelsi@gmail.com',
    Telephone: '+216 22345678',
    Filiere: 'Génie logiciel et systèmes d’information',
    anneeEtude: '2ème année',
    Groupe: 'Glsi C 2',
    Ville: 'Mahdia',
    image: studentImg,

  },
  {
    prenom: 'mariem',
    nom: 'khalfallah',
    Email: 'mariem.khalfallah@gmail.com',
    Telephone: '+216 27567890',
    Filiere: 'Génie logiciel et systèmes d’information',
    anneeEtude: '2ème année',
    Groupe: 'Glsi A 2',
    Ville: '',
    
  }
])];

function App(){
  function ajouterEtudiant(){
     const nouvelEtudiant ={
       nom: "Ben Salem", 
       prenom: "Yassine", 
       email: "yassine.bensalem@gmail.com", 
       telephone: "+216 44 444 444", 
       filiere: "Génie Logiciel et Systèmes dInform", 
       anneeEtude: "2ème année", 
       groupe: "GLSI 1", 
       ville: "Sfax", 
     };
     setEtudiants([...etudiants,nouvelEtudiant]);
    }
    const supprimerEtudiant = (email) => {
      setEtudiants(etudiants.filter((etudiant) => etudiant.Email !== email));
    };

    const modifierPrenom = (email, nouveauPrenom) => {
      setEtudiant(
        etudiants.map((etudiant) => etudiant.Email === email ? { ...etudiant, prenom: nouveauPrenom } : etudiant)
      );
    };




  return (
      <>
      
        <Header />
        <Navbar />
        <div className="actions">
          <button onClick={ajouterEtudiant}>+ ajouter un etudiant</button>
        </div>
        <button onClick={() => supprimerEtudiant(etudiant.Email)}>Supprimer</button>

        <div className='container'>
        {etudiant.map((etudiant)=> (
        
        <StudentCard 
          prenom={etudiant.prenom}
          nom={etudiant.nom}
          key={etudiant.Email}
          Email={etudiant.Email}
          Telephone={etudiant.Telephone}
          Filiere={etudiant.Filiere}
          anneeEtude={etudiant.anneeEtude}
          Groupe={etudiant.Groupe}
          Ville={etudiant.Ville}
          image={etudiant.image || studentImg}
        />
      ))}
      </div>
      
      <Footer />
      
    </>
  );

}
export default App;
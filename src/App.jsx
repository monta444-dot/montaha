import './App.css';
import StudentCard from './components/StudentCard';
import studentImg from "C:/Users/Khouloud/Downloads/pfp.jpg" ;

const etudiant =[
{
  prenom: 'montaha',
  nom: 'hamdoun',
  Email: 'montahahamdoun@gmail.com',
  Téléphone: '+216 52712646',
  Filière: 'Génie logiciel et systèmes d’information',
  anneeEtude: '2ème année',
  Groupe: 'Glsi D 2',
  Ville: 'Mahdia',
  image: studentImg,
},

{
  prenom: 'sarra',
  nom: 'trabelsi',
  Email: 'sarra.trabelsi@gmail.com',
  Téléphone: '+216 22345678',
  Filière: 'Génie logiciel et systèmes d’information',
  anneeEtude: '2ème année',
  Groupe: 'Glsi C 2',
  Ville: 'Mahdia',
  image: studentImg,

},
{
  prenom: 'mariem',
  nom: 'khalfallah',
  Email: 'mariem.khalfallah@gmail.com',
  Téléphone: '+216 27567890',
  Filière: 'Génie logiciel et systèmes d’information',
  anneeEtude: '2ème année',
  Groupe: 'Glsi A 2',
  Ville: '',
  
}
];



function App() {
  return(
  <div className='container'>
    {etudiant.map((etudiant)=> "")}
  <StudentCard 
  prenom={etudiant.prenom}
  nom={etudiant.nom}
  key={etudiant.Email}
  Téléphone={etudiant.Téléphone}
  Filière={etudiant.Filière}
  anneeEtude={etudiant.anneeEtude}
  Groupe={etudiant.Groupe}
  Ville={etudiant.Ville}
  image={etudiant.image}

  />;
  </div>
);
}


export default App;
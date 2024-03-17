import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [artistes, setArtistes] :any = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les artistes depuis l'API
    const fetchArtistes = async () => {
      try {
        const response = await axios.get('https://djangorenderapi.onrender.com/artiste/liste');
        setArtistes(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des artistes:', error);
      }
    };

    // Appeler la fonction pour récupérer les artistes au chargement de la page
    fetchArtistes();
  }, []);

  return (
    <>
      <h1>LISTE DES ARTISTES</h1>
      <div className="container">
        <div className="row">
          {artistes.map((artiste:any) => (
            <div className="col-md-3" key={artiste.id}>
              <div className="card" style={{ width: '18rem' }}>
                
                <div className="card-body">
                  <p>{artiste.categorie}</p>
                  <h5 className="card-title">{artiste.nom}</h5>
                  <p className="card-text">{artiste.prenom}</p>
                  <a href="#" className="btn btn-primary">
                    Voir plus
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

import {useState} from "react";
import Languages from "./data/languages"

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <>
    <header>
    <h1 className="mt-3 text-center">Learn Web development</h1>
    </header>
    <div className="container">
    <div className="mt-5">
    {Languages.map((curItem, index) => (
          <button
            key={curItem.id}
            onClick={() => setSelectedLanguage(curItem)} // Cambia il linguaggio selezionato
            className={`btn ${index === 0 ? "btn-warning" : "btn-primary"} m-2`}>{curItem.title}
            </button>
        ))}
      </div>

      {/* Card per mostrare il linguaggio selezionato */}
      <div className="card mt-3 p-3">
        {selectedLanguage ? (
          <><h2>{selectedLanguage.title}</h2>
        <p>{selectedLanguage.description}</p>
        </>
        ) : (
          <p>Nessun linguaggio selezionato</p>
        )}
        
      </div>
      </div>
     </>
  )
}

export default App

import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);
  return (
    <div className="p-10">
      <div className="flex flex-col justify-between p-4 w-96 h-96 bg-gray-800 rounded-3xl">
        <div className="flex justify-between p-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://img.freepik.com/vetores-premium/ilustracao-de-avatar-de-estudante-icone-de-perfil-de-usuario-avatar-de-jovem_118339-4402.jpg"
              alt="foto avatar"
              className="w-10 h-10 rounded-full"
            />
            <h2 className="text-xl">Rodrigo Antunes</h2>
            <br></br>
            
          </div>
        </div>
        <div>
          <img
            src="https://efic.com.br/wp-content/uploads/Troca-mensagens-prova-cobranca-1200x720.jpg"
            alt="foto"
            className="rounded-2xl"
          />
        </div>
        <div className="flex justify-between text-xl">
          <button
            className="cursor-pointer"
            onClick={() => setLikes(likes + 1)}
          >
            <span>💓 {likes} curtidas</span>
          </button>
          <button>
            <span>❇️ Compartilhar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

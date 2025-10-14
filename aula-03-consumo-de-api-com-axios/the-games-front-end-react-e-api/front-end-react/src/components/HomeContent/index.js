// Importando useState
import {useState, useEffect} from "react";

import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";

// Importando o AXIOS (para enviar as requisições HTTP)
import axios from "axios";

const HomeContent = () => {

  // Criando um status para a lista de jogos
  const [games, setGames] = useState([]);

  // Criando o bloco do useEffect:

  useEffect(() => {
    const fetchGames = async() => {
      try{
        const response = await axios.get("http://localhost:4000/games")
        console.log(response);
      } catch (error){
        console.log(error);
      };
    };
    fetchGames()
  }, []); // Dependência do Use Effect

  return (
    <>
      <div className={styles.homeContent}>
        {/* CARD LISTA DE JOGOS */}
        <div className={styles.listGamesCard}>
          {/* TITLE */}
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>
          <Loading />
          <div className={styles.games} id={styles.games}>
            {/* Lista de jogos irá aqui */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;

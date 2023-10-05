/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./jogadores.css";

const logo = "https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png";

const APIJogadores = "https://api.cartola.globo.com/atletas/mercado/";

export default function Jogadores() {
    const { id, nomeTime } = useParams();
    const [jogadores, setJogadores] = useState([]);
    const [jogadoresFiltrados, setJogadoresFiltrados] = useState([]);


    const buscarJogadores = async () => {
        await axios.get(APIJogadores + id)
            .then(({ data }) => {
                setJogadores(Object.values(data));
            }), err => {
                console.error("Jogadores não encontrados", err);
            }
    }

    useEffect(() => {
        buscarJogadores();
    }, [])

    useEffect(() => {
        if (jogadores.length > 0) {
            const jogadoresDoTime = jogadores[3];

            setJogadoresFiltrados(jogadoresDoTime);
        }
    }, [jogadores]);

    return (
     
            <div className="container">
                <img src={logo} className="logo" />

                {
                    jogadoresFiltrados && jogadoresFiltrados.length > 0 && (
                        <ul className="card">
                            <h2 className="nomeTime">Jogadores do {nomeTime}</h2>
                            {
                                jogadoresFiltrados.map((jogador, i) => {
                                    let foto = jogador.foto;

                                    if (foto) {
                                        foto = foto.replace("FORMATO", "220x220");
                                    }

                                    return (
                                        <li className="jogador" key={i}>
                                            {foto && <img src={foto} className="fotoJogador" />}
                                            
                                            <p className="nomeJogador">
                                                {jogador.apelido}
                                            </p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                }
            </div>
      
    )
}
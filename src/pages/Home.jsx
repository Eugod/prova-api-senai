/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.css";

const logo = "https://logodownload.org/wp-content/uploads/2017/05/cartola-fc-logo-5.png";

const APITimes = "https://api.cartola.globo.com/clubes";


export default function Home() {
    const [times, setTimes] = useState([]);

    const buscarTimes = async () => {
        await axios.get(APITimes)
            .then(({ data }) => {
                setTimes(Object.values(data));
            }, err => {
                console.error("Times não encontrados", err);
            });
    }

    useEffect(() => {
        buscarTimes()
    }, []);

    return (
        <div className="contaner">
            <img src={logo} className="logo" />

            {
                times && (
                    <ul className="card">
                        {
                            times.map((time, i) => {
                                return (
                                    <li key={i}>
                                        <Link className="li-link" to={`/jogadores/${time.id}/${time.nome}`}>
                                            <img src={time.escudos["60x60"]} alt="" />

                                            <div className="div-container-nome">
                                                <p className="nomeTime">
                                                    {time.nome}
                                                </p>

                                                <p className="apelidoTime">
                                                    {time.apelido}
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })}
                    </ul>
                )

            }
        </div>
    )
}
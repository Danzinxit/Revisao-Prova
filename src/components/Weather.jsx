import React, { useState, useEffect } from "react";
import { getWeatherData } from "../weatherAPI";

const Weather = () => {
    const [cidade, setCidade] = useState("");
    const [tempo, setTempo] = useState(null);
    const [erro, setErro] = useState("");

    const handleCidadeChange = (e) => {
        setCidade(e.target.value);
    };

    const buscarTempo = () => {
        setErro("");
        setTempo(null);

        getWeatherData(cidade)
            .then((dados) => {
                setTempo(dados);
            })
            .catch((err) => {
                setErro(err);
            });
    };

    useEffect(() => {
        if (cidade) {
            buscarTempo();
        }
    }, [cidade]);

    return (
        <div>
            <h1>Previsão do Tempo</h1>
            <input
                type="text"
                value={cidade}
                onChange={handleCidadeChange}
                placeholder="Digite o nome da cidade"
            />
            <button onClick={buscarTempo}>Buscar</button>
            {erro && <p>{erro}</p>}
            {tempo && (
                <div>
                    <h2>{cidade}</h2>
                    <p>Temperatura: {tempo.temperatura}°C</p>
                    <p>Condição: {tempo.condicao}</p>
                    <p>{tempo.icone}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;

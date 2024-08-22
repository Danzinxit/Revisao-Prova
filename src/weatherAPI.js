export const getWeatherData = (cidade) => {
    const dados = {
        "São Paulo": {
            temperatura: 25,
            condicao: "Ensolarado",
            icone: "☀️",
        },
        "Rio de Janeiro": {
            temperatura: 28,
            condicao: "Parcialmente Nublado",
            icone: "⛅",
        },
        "Belo Horizonte": {
            temperatura: 22,
            condicao: "Chuvoso",
            icone: "🌧️",
        },
        "Curitiba": {
            temperatura: 18,
            condicao: "Nublado",
            icone: "☁️",
        },
        "Salvador": {
            temperatura: 30,
            condicao: "Ensolarado",
            icone: "☀️",
        }
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dados[cidade]) {
                resolve(dados[cidade]);
            } else {
                reject("Cidade não encontrada");
            }
        }, 1000);
    });
};

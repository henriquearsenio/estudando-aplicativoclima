const botaoBusca = document.getElementById('botaoBusca');
const entradaCidade = document.getElementById('entradaCidade');
const infoClima = document.getElementById('infoClima');

botaoBusca.addEventListener("click", () => {
    const cidade = entradaCidade.value;
    if (cidade) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=50e11cf755f74af11dedb5adcdd065f9&units=metric&lang=pt_br`)
            .then(resposta => resposta.json())
            .then(dados => {
                const temperatura = dados.main.temp;
                const descricao = dados.weather[0].description;

                infoClima.innerHTML = `O clima agora em ${cidade},${dados.sys.country} é de ${temperatura}°C, ${descricao}.`;
                entradaCidade.value = "";
                entradaCidade.focus();
            })
            .catch(erro => {
                console.error('Erro ao buscar dados do clima:', erro);
                infoClima.innerHTML = 'Cidade não encontrada';
            })
    }
})

entradaCidade.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        botaoBusca.click();
    }
});
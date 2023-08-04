const relogio = document.querySelector(".relogio");
const botaoIniciar = document.querySelector(".iniciar");
const botaoPausar = document.querySelector(".pausar");
const botaoZerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

document.addEventListener("click", (e) => {
  const element = e.target;

  if (element.classList.contains("iniciar")) {
    iniciaRelogio();
  }
  if (element.classList.contains("pausar")) {
    pausarRelogio();
  }
  if (element.classList.contains("zerar")) {
    zerarRelogio();
  }
});

function getTimeFromSeconds(segundos) {
  const data = new Date(segundos * 1000);

  return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "GMT" });
}

function iniciaRelogio() {
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 1000);
}

function zerarRelogio() {
  clearInterval(timer);
  segundos = 0;
  relogio.classList.remove("pausado");
  relogio.innerHTML = "00:00:00";
}

const pausarRelogio = () => {
  clearInterval(timer), relogio.classList.add("pausado");
};

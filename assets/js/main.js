const relogio = document.querySelector(".relogio");
const botaoIniciar = document.querySelector(".iniciar");
const botaoPausar = document.querySelector(".pausar");
const botaoZerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

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

botaoIniciar.addEventListener(
  "click",
  () => clearInterval(timer),
  iniciaRelogio()
);

botaoPausar.addEventListener("click", () => clearInterval(timer));

botaoZerar.addEventListener(
  "click",
  () => (relogio.innerHTML = "00:00:00"),
  (segundos = 0)
);

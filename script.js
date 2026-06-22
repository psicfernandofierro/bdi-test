const API_URL = "https://script.google.com/macros/s/AKfycbxxB5_7qzRXtQvoehVWxmBTGFL7zJCPtWRgQGP-BPj5BixskIIbRHUWqPZU5KvxeAR80g/exec";



const items = [
  {
    titulo: "Tristeza",
    opciones: [
      "0 - No me siento triste.",
      "1 - Me siento triste gran parte del tiempo.",
      "2 - Me siento triste todo el tiempo.",
      "3 - Me siento tan triste o soy tan infeliz que no puedo soportarlo."
    ]
  },
  {
    titulo: "Pesimismo",
    opciones: [
      "0 - No estoy desalentado respecto de mi futuro.",
      "1 - Me siento más desalentado respecto de mi futuro que antes.",
      "2 - No espero que las cosas funcionen para mí.",
      "3 - Siento que no hay esperanza para mi futuro y que solo puede empeorar."
    ]
  },
  {
    titulo: "Fracaso",
    opciones: [
      "0 - No me siento como un fracasado.",
      "1 - He fracasado más de lo que hubiera debido.",
      "2 - Cuando miro hacia atrás veo muchos fracasos.",
      "3 - Siento que como persona soy un fracaso total."
    ]
  },

{
  titulo: "Pérdida de placer",
  opciones: [
    "0 - Obtengo tanto placer como siempre por las cosas que disfruto.",
    "1 - No disfruto tanto de las cosas como solía hacerlo.",
    "2 - Obtengo muy poco placer de las cosas que solía disfrutar.",
    "3 - No puedo obtener ningún placer de las cosas que solía disfrutar."
  ]
},

{
  titulo: "Sentimientos de culpa",
  opciones: [
    "0 - No me siento particularmente culpable.",
    "1 - Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho.",
    "2 - Me siento bastante culpable la mayor parte del tiempo.",
    "3 - Me siento culpable todo el tiempo."
  ]
},
{
  titulo: "Sentimientos de castigo",
  opciones: [
    "0 - No siento que esté siendo castigado.",
    "1 - Siento que tal vez pueda ser castigado.",
    "2 - Espero ser castigado.",
    "3 - Siento que estoy siendo castigado."
  ]
},
{
  titulo: "Disconformidad consigo mismo",
  opciones: [
    "0 - Siento acerca de mí lo mismo que siempre.",
    "1 - He perdido la confianza en mí mismo.",
    "2 - Estoy decepcionado conmigo mismo.",
    "3 - No me gusto a mí mismo."
  ]
},
{
  titulo: "Autocrítica",
  opciones: [
    "0 - No me critico ni me culpo más de lo habitual.",
    "1 - Estoy más crítico conmigo mismo de lo que solía estarlo.",
    "2 - Me critico a mí mismo por todos mis errores.",
    "3 - Me culpo a mí mismo por todo lo malo que sucede."
  ]
},
{
  titulo: "Pensamientos o deseos suicidas",
  opciones: [
    "0 - No tengo ningún pensamiento de matarme.",
    "1 - He tenido pensamientos de matarme, pero no lo haría.",
    "2 - Querría matarme.",
    "3 - Me mataría si tuviera la oportunidad de hacerlo."
  ]
},
{
  titulo: "Llanto",
  opciones: [
    "0 - No lloro más de lo que solía hacerlo.",
    "1 - Lloro más de lo que solía hacerlo.",
    "2 - Lloro por cualquier pequeñez.",
    "3 - Siento ganas de llorar pero no puedo."
  ]
},
{
  titulo: "Agitación",
  opciones: [
    "0 - No estoy más inquieto o tenso que lo habitual.",
    "1 - Me siento más inquieto o tenso que lo habitual.",
    "2 - Estoy tan inquieto o agitado que me es difícil quedarme quieto.",
    "3 - Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo."
  ]
},
{
  titulo: "Pérdida de interés",
  opciones: [
    "0 - No he perdido el interés en otras actividades o personas.",
    "1 - Estoy menos interesado que antes en otras personas o cosas.",
    "2 - He perdido casi todo el interés en otras personas o cosas.",
    "3 - Me es difícil interesarme por algo."
  ]
},
{
  titulo: "Indecisión",
  opciones: [
    "0 - Tomo mis propias decisiones tan bien como siempre.",
    "1 - Me resulta más difícil que de costumbre tomar decisiones.",
    "2 - Encuentro mucha más dificultad que antes para tomar decisiones.",
    "3 - Tengo problemas para tomar cualquier decisión."
  ]
},
{
  titulo: "Desvalorización",
  opciones: [
    "0 - No siento que yo no sea valioso.",
    "1 - No me considero a mí mismo tan valioso y útil como solía considerarme.",
    "2 - Me siento menos valioso cuando me comparo con otros.",
    "3 - Siento que no valgo nada."
  ]
},
{
  titulo: "Pérdida de energía",
  opciones: [
    "0 - Tengo tanta energía como siempre.",
    "1 - Tengo menos energía que la que solía tener.",
    "2 - No tengo suficiente energía para hacer demasiado.",
    "3 - No tengo energía suficiente para hacer nada."
  ]
},
{
  titulo: "Cambios en los hábitos de sueño",
  opciones: [
    "0 - No he experimentado ningún cambio en mis hábitos de sueño.",
    "1a - Duermo un poco más que lo habitual.",
    "1b - Duermo un poco menos que lo habitual.",
    "2a - Duermo mucho más que lo habitual.",
    "2b - Duermo mucho menos que lo habitual.",
    "3a - Duermo la mayor parte del día.",
    "3b - Me despierto 1-2 horas más temprano y no puedo volver a dormirme."
  ]
},
{
  titulo: "Irritabilidad",
  opciones: [
    "0 - No estoy más irritable que lo habitual.",
    "1 - Estoy más irritable que lo habitual.",
    "2 - Estoy mucho más irritable que lo habitual.",
    "3 - Estoy irritable todo el tiempo."
  ]
},
{
  titulo: "Cambios en el apetito",
  opciones: [
    "0 - No he experimentado ningún cambio en mi apetito.",
    "1a - Mi apetito es un poco menor que lo habitual.",
    "1b - Mi apetito es un poco mayor que lo habitual.",
    "2a - Mi apetito es mucho menor que antes.",
    "2b - Mi apetito es mucho mayor que lo habitual.",
    "3a - No tengo apetito en absoluto.",
    "3b - Quiero comer todo el día."
  ]
},

{
  titulo: "Dificultad de concentración",
  opciones: [
    "0 - Puedo concentrarme tan bien como siempre.",
    "1 - No puedo concentrarme tan bien como habitualmente.",
    "2 - Me es difícil mantener la mente en algo por mucho tiempo.",
    "3 - Encuentro que no puedo concentrarme en nada."
  ]
},
{
  titulo: "Cansancio o fatiga",
  opciones: [
    "0 - No estoy más cansado o fatigado que lo habitual.",
    "1 - Me fatigo o me canso más fácilmente que lo habitual.",
    "2 - Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer.",
    "3 - Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía hacer."
  ]
},
{
  titulo: "Pérdida de interés en el sexo",
  opciones: [
    "0 - No he notado ningún cambio reciente en mi interés por el sexo.",
    "1 - Estoy menos interesado en el sexo de lo que solía estarlo.",
    "2 - Estoy mucho menos interesado en el sexo.",
    "3 - He perdido completamente el interés en el sexo."
  ]
}




];

const contenedor = document.getElementById("items");

items.forEach((item, index) => {
  const numero = index + 1;

  let html = `
    <div class="item">
      <h4>${numero}. ${item.titulo}</h4>
  `;

  item.opciones.forEach((texto, valor) => {
    html += `
      <label>
         <input type="radio" name="item${numero}" value="${texto.charAt(0)}">
        ${texto}
      </label>
    `;
  });

  html += `</div>`;
  contenedor.innerHTML += html;
});



const canvas = document.getElementById("firma");
const ctx = canvas.getContext("2d");
let dibujando = false;

function ajustarCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = 180;
}

ajustarCanvas();
window.addEventListener("resize", ajustarCanvas);

function obtenerPosicion(e) {
  const rect = canvas.getBoundingClientRect();
  const punto = e.touches ? e.touches[0] : e;

  return {
    x: punto.clientX - rect.left,
    y: punto.clientY - rect.top
  };
}

function iniciarFirma(e) {
  e.preventDefault();
  dibujando = true;

  const pos = obtenerPosicion(e);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

function dibujarFirma(e) {
  if (!dibujando) return;

  e.preventDefault();

  const pos = obtenerPosicion(e);
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#000";
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

function finalizarFirma() {
  dibujando = false;
}

canvas.addEventListener("mousedown", iniciarFirma);
canvas.addEventListener("mousemove", dibujarFirma);
canvas.addEventListener("mouseup", finalizarFirma);
canvas.addEventListener("mouseleave", finalizarFirma);

canvas.addEventListener("touchstart", iniciarFirma);
canvas.addEventListener("touchmove", dibujarFirma);
canvas.addEventListener("touchend", finalizarFirma);

function limpiarFirma() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function interpretarPuntaje(puntaje) {
  if (puntaje <= 13) return "Mínima";
  if (puntaje <= 19) return "Leve";
  if (puntaje <= 28) return "Moderada";
  return "Severa";
}

function validarFirma() {
  const pixeles = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

  for (let i = 3; i < pixeles.length; i += 4) {
    if (pixeles[i] !== 0) {
      return true;
    }
  }

  return false;
}

async function enviarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const edad = document.getElementById("edad").value.trim();
  const pais = document.getElementById("pais").value.trim();
  const consentimiento = document.getElementById("consentimiento").checked;

  if (!nombre || !email || !edad || !pais) {
    alert("Por favor complete todos los datos del paciente.");
    return;
  }

  if (!consentimiento) {
    alert("Debe aceptar el consentimiento informado.");
    return;
  }

  const respuestas = [];
  let puntaje = 0;

 for (let i = 1; i <= items.length; i++) {
    const seleccion = document.querySelector(`input[name="item${i}"]:checked`);

    if (!seleccion) {
      alert(`Debe responder el ítem ${i}.`);
      return;
    }

    const valor = parseInt(seleccion.value);
    respuestas.push(valor);
    puntaje += valor;
  }

  if (!validarFirma()) {
    alert("Debe registrar la firma del paciente.");
    return;
  }

  const datos = {
    nombre,
    email,
    edad,
    pais,
    puntaje,
    nivel: interpretarPuntaje(puntaje),
    respuestas,
    firmaBase64: canvas.toDataURL("image/png")
  };

  try {
    await fetch(API_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(datos)
    });

    document.getElementById("formulario").style.display = "none";
    document.getElementById("gracias").style.display = "block";

  } catch (error) {
    alert("No se pudo enviar la evaluación. Intente nuevamente.");
    console.error(error);
  }
}
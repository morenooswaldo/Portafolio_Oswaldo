//FUNCION PARA CARGA DE ANIMACION DE PORCENTAJE
function cargarAnimaciones() {
  $(function () {
    var circleSize = 160; // tamaño predeterminado del circulo
    var lineaAncho = 15;
    var screenWidth = window.innerWidth;

    if (screenWidth >= 319 && screenWidth <= 519) {
      circleSize = 100;
    } else if (screenWidth <= 318) {
      circleSize = 80;
      lineaAncho = 10;
    }

    $(".chart").easyPieChart({
      size: circleSize,
      barColor: "#57acfc",
      scaleLenght: 0,
      lineWidth: lineaAncho,
      tackColor: "#fff",
      lineCap: "circle",
      animate: 3000,
    });
  });
}

//FUNCION PARA FILTRAR LAS CATEGORIA DE LOS PROYECTOS
function verCategoria(cat) {
  const items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }

  const itemCat = document.getElementsByClassName(cat);
  for (let i = 0; i < itemCat.length; i++) {
    itemCat[i].style.display = "block";
  }

  const links = document.querySelectorAll(".proyectos nav a");
  links[0].className = "";
  links[1].className = "";
  links[2].className = "";
  links[3].className = "";

  const itemSeleccionado = document.getElementById(cat);
  itemSeleccionado.className = "borde";
}

//FUNCION QUE DETECTA CUANDO ACTUALIZAR LA ANIMACION DE HABILIDADES
function efectoHabilidades() {
  var skills = document.getElementById("habilidades");
  var distancia_skills = (window.innerHeight =
    skills.getBoundingClientRect().top);
  if (distancia_skills >= 300) {
    let habiliades = document.getElementsByClassName("chart");
    habiliades[0].classList.add("chart");
    habiliades[1].classList.add("chart");
    habiliades[2].classList.add("chart");
    habiliades[3].classList.add("chart");
    habiliades[4].classList.add("chart");
    habiliades[5].classList.add("chart");

    cargarAnimaciones();
  }
}

//DETECTOA EL SCRLLING PARA APLICAR LA ANIMACION DE HABILIDADES
window.onscroll = function () {
  efectoHabilidades();
};

//FUNCION DEL MENU REPONSIVE
function responsiveMenu() {
  let x = document.getElementById("nav");

  if (x.className === "") {
    x.className = "responsive";

    //creando elemnto para cierre del menu
    let span = document.createElement("span");
    span.innerHTML = "X";
    document.getElementById("nav").appendChild(span);

    //quitando boton cerrar cuando se hace click sobre el
    span.onclick = function () {
      x.className = "";
      span.remove();
    };
  } else {
    x.className = "";
  }
}

//FUNCION PARA QUE DESAPAREZCA EL MENU LUEGO DE SELECCIONAR UNA OPCION
const links = document.querySelectorAll("#nav a");
for (i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    var x = document.getElementById("nav");
    x.className = "";

    //eliminamos el boton cerrar
    btnEliminar = document.querySelector("#nav span");
    btnEliminar.remove();
  };
}

//FUNCION PARA DESCAGAR EL CV EN PDF
function descargaPdf() {
  const link = document.createElement("a");
  link.href = "descargas/CV-Oswaldo_Moreno_(Spanish)_2024.pdf";
  link.download = "CV_Oswaldo_Moreno";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

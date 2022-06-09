function circulo(){
    var figura = document.getElementById("figura"); //Se crea la variable figura para capturar el estado inicial de un elemento 
    figura. classList="";//Elimina las clases que pueda tener
    figura.classList.toggle("circulo")
    //toggle funcion para poner y quitar la figura
    //classsList clase de lista de un elemento
    //add agregar clase
    //remove quitar clase
}   

function rombo(){
    var figura = document.getElementById("figura");
    figura. classList="";
    figura.classList.toggle("rombo")
}

/*transform: rotate(rotar)
transform: scale(aumenta o disminulle)
translate: mover en eje X y Y
skew: distorciona la imagen en eje X y eje Y
*/ 

function triangulo(){
    var figura = document.getElementById("figura");
    figura. classList="";
    figura. classList.toggle("triangulo")
}

function rectanguloh(){
    var figura = document.getElementById("figura");
    figura. classList="";
    figura. classList.toggle("rectanguloh")
}

function rectangulov(){
    var figura = document.getElementById("figura");
    figura. classList="";
    figura. classList.toggle("rectangulov")
}

function arriba(){
    var figura = document.getElementById("figura");
    figura. classList="";
    figura. classList. toggle("arriba")
}

function abajo(){
    var figura = document.getElementById("figura");
    figura. classList="";
    figura. classList. toggle("abajo")
}

function derecha(){
    var figura = document.getElementById("figura");
    figura. classList="";
    figura. classList. toggle("derecha")
}

function izquierda(){
    var figura = document.getElementById("figura");
    figura. classList="";
    figura. classList. toggle("izquierda")
}

function diagonal(){
    var figura = document.getElementById("figura");
    figura. classList="";
    figura. classList. toggle("diagonal")
}

function imagen(){
    var figura = document.getElementById("figura");
    figura. classList="";
    figura. classList. toggle("imagen")
}


// JavaScript Avatar:

function capturarDatos(){
    //Captura del valor de cada campo del formulario
    var nombres = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var fechaNacimiento = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;
    var color = document.getElementById("color").value;

    //Captura de elementos a los cuales le asignamos los elementos
    var imagen = document.getElementById("imagen");
    var mnombres = document.getElementById("mnombres");
    var mdescripcion = document.getElementById("mdescripcion");
    var medad = document.getElementById("medad");
    var mfecha = document.getElementById("mfecha");
    var mgenero = document.getElementById("mgenero");
    var memail = document.getElementById("memail");

    var contAvatar = document.getElementById("contAvatar");

    //Cambia el contenido cuando es texto
    mnombres.textContent = nombres;
    mdescripcion.textContent = descripcion;
    medad.textContent = edad;
    mfecha.textContent = fechaNacimiento;
    mgenero.textContent = genero;
    memail.textContent = email;

    if (genero == "Masculino"){
        imagen.src="img/businessman.png"
    }else if (genero == "Femenino"){
        imagen.src="img/woman.png"
    }else{
        imagen.src="img/standing.png"
    }

    switch (color){
        case "Negro":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Negro")
            break;
        case "Rojo":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Rojo")
            break;
        case "Morado":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Morado")
            break;
        case "Naranja":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Naranja")
            break;
        case "Violeta":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Violeta") 
    }
}



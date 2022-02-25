let arreglo = [];
let paises;

function mostrarArreglos(){
 let i;
    for( i=0; i<6; i++)
    {
        paises = prompt("escribe un pais") ;
        arreglo.push(paises);
    } 
    console.log(arreglo);
    document.write("los siguientes paises son "+arreglo+"<br>");
}

function ordenaArreglos(){
    console.log(arreglo.sort());
    document.write("arreglos ordenados son "+arreglo+"<br>");
}

function invierteArrelos(){
    console.log(arreglo.reverse());
    document.write("los arreglos invertidos son "+arreglo+"<br>");
}

function elementosArreglos(){
    console.log(arreglo.length);
    document.write("el total de arreglos son "+arreglo.length+"<br>");
}

function buscarArreglos(){

        let busqueda = prompt("busca un pais");
        let i;
        for( i=0; i<6; i++){
            if(busqueda == arreglo[i]){
                console.log("pais " + busqueda +" encontrado en la posicion "+ (i+1));
                document.write("pais "+ busqueda +" encontrado en la posicion "+ (i+1) + "<br>");
                break;
            }
          
        }
        if(busqueda =! arreglo[i]){
            console.log("pais no encontrado");
        }
        
}

mostrarArreglos();
buscarArreglos();
invierteArrelos();
ordenaArreglos();
elementosArreglos();

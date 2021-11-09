

//PIPOCA 10 SEGUNDOS = CASE 1

function usarMicroondas(prato, tempo) {
    switch (prato){
    case "pipoca":
        if(tempo>19 && tempo < 30){
            console.log("Prato queimou");
        }
        else if(tempo>30){
            console.log("Kabuuuum!");
        }
        else{
            console.log("Prato pronto. Bom apetite!");
        }
    }}
console.log (usarMicroondas("pipoca",18));
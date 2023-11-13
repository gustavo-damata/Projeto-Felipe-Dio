let Nome_Heroi = prompt ("Sherek");
let Xp_Nivel = parseInt(prompt(""))

// Estrutura de Decisão 

if (Xp_Nivel  < 1000 ) {

    nivel = "Ferro";
}

else if (Xp_Nivel >= 1001 &&  Xp_Nivel <= 2000) { 
 
    nivel = "Bronze";
}
else if (Xp_Nivel >= 2001 && Xp_Nivel <= 3000) {

    nivel = "Prata";
}
else if (Xp_Nivel >= 4001 && xp_Nivel <= 5000){

    nivel = "Ouro";
}
else if (Xp_Nivel >=6001 && Xp_Nivel <= 7000) {

    nivel = "Bronze;"
 }
else if (Xp_Nivel >= 7001 && Xp_Nivel<= 8000) {

    nivel = "Platina;"
 }
else if (Xp_Nivel >= 8001 &&  Xp_Nivel <= 9000) {

    nivel = "Ascendente";
 }
else if (Xp_Nivel >= 9001 && Xp_Nivel <= 10000) {

   nivel = "Imortal";
 
} else {
   nivel = Radiante; 

}

console.log (nome_Heroi + xp_Nivel)
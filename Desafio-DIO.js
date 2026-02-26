//Felipão! Obrigado pela aula, muito top mesmo fiquei dias treianndo IF,While e Switch
//espero ter acertado o desafio!! Vlw

let nomeHeroi="Link"
let xpHeroi=10010

if(xpHeroi>=10001){

    nivel="Radiante"
    console.log("O Heroi de nome: "+nomeHeroi+" está no nível: "+nivel)



}else if(xpHeroi>=9001 && xpHeroi<=10000){

        nivel="Imortal"
        console.log("O heroi de nome: "+nomeHeroi+" está no nível: "+nivel)

}else if(xpHeroi>=8001 && xpHeroi<=9000){

        nivel = "Ascendente"
        console.log("O Heroi de nome: "+nomeHeroi+" está no nível: "+nivel)



}else if(xpHeroi>=7001 && xpHeroi<=8000){

        nivel= "Platina"
        console.log("O Heroi de nome: "+nomeHeroi+" está no nível: "+nivel)


}else if(xpHeroi>=6001 && xpHeroi<=7000){

        nivel = "Ouro"
        console.log("O Heroi de nome: "+nomeHeroi+" está no nível: "+nivel)


}else if(xpHeroi>=2001 && xpHeroi<=5000){
        nivel = "Prata"
        console.log("O Heroi de nome: "+nomeHeroi+" está no nível: "+nivel)


}else if(xpHeroi>=1001 && xpHeroi<=2000){
        
        nivel="Bronze"
        console.log("O Heroi de nome: "+nomeHeroi+" está no nível: "+nivel)

}else{

    nivel="Ferro"
    console.log("O Heroi de nome: "+nomeHeroi+" está no nível: "+nivel)

}
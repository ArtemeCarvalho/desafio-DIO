class Heroi{
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo =  tipo;

    }
atacar(){

        let ataque;

        if(this.tipo === "mago"){

            ataque  = "magia";
        }else if(this.tipo === "guerreiro"){

            ataque = "espada";
        }else if(this.tipo === "ninja"){

            ataque = "shuriken";
        }else{

            ataque = "atacou sem arma definida"            
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
}

}

const heroi1 = new Heroi("Titan",45,"guerreiro");
const heroi2 = new Heroi("Merlin",100,"mago");


heroi1.atacar();
heroi2.atacar();

const herois =[
    new Heroi("Panda",56,"guerreiro"),
    new Heroi("Tigre",41,"ninja"),
    new Heroi("Fada",200,"mago")
]

for (const h of herois ){

    h.atacar();

}



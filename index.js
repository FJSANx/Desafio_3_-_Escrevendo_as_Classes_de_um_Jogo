//Classe de Herói
class hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack(){
        let attack;
    
        switch (this.type){
            case 'mage':
                attack = 'Magia';
                break;
            case 'warrior':
                attack = 'Espada';
                break;
            case 'monk':
                attack = 'Artes Marciais';
                break;
            case 'ninja':
                attack = 'Shurikens';
                break;
            default:
                attack = 'Ataque desconhecido';
        }
        console.log(`${this.name} do tipo ${this.type} ataca com ${attack}`);
    }
}

//Heróis de Exemplo
const heroiMago = new hero("Gandalf", 1500, "mage");
const heroiGuerreiro = new hero("Aragorn", 35, "warrior");
const heroiMonge = new hero("Bruce Lee", 33, "monk");
const heroiNinja = new hero("Hanzo", 28, "ninja");

// Fazendo cada herói atacar
heroiMago.attack();      // O mago atacou usando magia
heroiGuerreiro.attack(); // O guerreiro atacou usando espada
heroiMonge.attack();     // O monge atacou usando artes marciais
heroiNinja.attack();     // O ninja atacou usando shuriken
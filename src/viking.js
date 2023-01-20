// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }

    attack = () => {
        return this.strength
    }

    receiveDamage = (damage) => {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength)
        this. name = name;
    }

    receiveDamage = (damage) => {
        this.health = this.health - damage;
        
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry = () => {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health,strength) {
        super (health,strength)
    }

    receiveDamage = (damage) => {
        this.health = this.health - damage;
        
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking = (Viking) => {
        this.vikingArmy.push(Viking);
    }

    addSaxon = (Saxon) => {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack = () => {
        
        let vikingoAleatorio = Math.floor(Math.random()*this.vikingArmy.length);
        let saxonAleatorio = Math.floor(Math.random()*this.saxonArmy.length);

        let VikingoRandom = this.vikingArmy[vikingoAleatorio];
        let SaxonRandom = this.saxonArmy[saxonAleatorio];
        
        let fuerzaVikingoRandom = VikingoRandom.strength;
        let dañoSaxonRandom = SaxonRandom.receiveDamage(fuerzaVikingoRandom);

        if (SaxonRandom.health === 0) {
            let index = this.saxonArmy.indexOf(SaxonRandom);
            this.saxonArmy.splice(index, 1)
        }

        return dañoSaxonRandom;

    }

    saxonAttack = () => {

        let vikingoAleatorio = Math.floor(Math.random()*this.vikingArmy.length);
        let saxonAleatorio = Math.floor(Math.random()*this.saxonArmy.length);

        let VikingoRandom = this.vikingArmy[vikingoAleatorio];
        let SaxonRandom = this.saxonArmy[saxonAleatorio];

        let fuerzaSaxonRandom = SaxonRandom.strength;
        let dañoVikingoRandom = VikingoRandom.receiveDamage(fuerzaSaxonRandom);

        if (VikingoRandom.health === 0) {
            let index = this.vikingArmy.indexOf(VikingoRandom);
            this.vikingArmy.splice(index, 1)
        }
        
        return dañoVikingoRandom;

    }

    showStatus = () => {
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
    }
}

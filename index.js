class Hero {
    constructor(nameHero, ageHero, typeHero ){
        this.nameHero = nameHero;
        this.ageHero = ageHero;
        this.typeHero = typeHero;
}
toWrite(){
    
let attackHero;

switch (this.typeHero) {
    case "Guerreiro":
      attackHero = "espada";
      break;
    case "Mago":
      attackHero = "magia";
      break;
    case "Monge":
      attackHero = "artes marciais";
      break;
    default:
      attackHero = "shuriken";
  }
    console.log(`O ${this.nameHero} atacou usando ${attackHero}`)
}
}
let warrior = new Hero("Tyrion Lanister","38","Guerreiro");
let wizard = new Hero("Gandalf","158","Mago");
let monk = new Hero("Jet Li","26","Monge");
let ninja = new Hero("Naruto","16","Ninja");


warrior.toWrite();
wizard.toWrite();
monk.toWrite();
ninja.toWrite();
// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}
// Add greet method to the Hero prototype
Hero.prototype.greet = function() {
  return `Hello, my name is ${this.name} and my level is ${this.level}`;
  }

// Initialize Warrior constructor
function Warrior(name, level, weapon) {
// Chain constructor with call
Hero.call(this, name, level);
// Add a new property
this.weapon = weapon;
}

// Initialize the healer constructor
function Healer(name, level, spell) {
// Chain constructor with call
Hero.call(this, name, level);
// Add a new property
this.spell = spell;
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Warrior.prototype.attack = function(){
    return `${this.name} attacks with ${this.weapon}`;
}

Healer.prototype.heal = function(){
    return `${this.name} heals with ${this.spell}`;
}

let hero1 = new Warrior('Bjorn', 1, 'axe');
let hero2 = new Healer('Kanin', 1, 'cure');

console.log(hero1.attack());
console.log(hero2.heal());
console.log(hero1.greet());
console.log(hero2.greet());

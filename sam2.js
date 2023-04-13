// Initialize constructor functions
function Hero(name, level, life) {
    this.name = name;
    this.level = level;
    this.life = life;
  }
  
  function Warrior(name, level, life, weapon) {
    Hero.call(this, name, level, life);
    this.weapon = weapon;
  }
  
  function Healer(name, level, life, spell) {
    Hero.call(this, name, level, life);
    this.spell = spell;
  }
  
  // Link prototypes and add prototype methods

  Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
  Object.setPrototypeOf(Healer.prototype, Hero.prototype);
  
  Hero.prototype.greet = function () {
    return `${this.name} level ${this.level} with ${this.life} life points says hello.`;
  }
  
//damage en parameters et ensuite défini en mode random
  Warrior.prototype.attack = function (damage) {
    return `${this.name} attacks with the ${this.weapon} dealing ${damage} damages.`;
  }
  
  Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
  }

    // fonction pour avoir un nombre aléatoire entre 0 et 100
    // To fix this issue, you can use the Math.floor() function to round down the result of Math.random() * (max - min) + min. 
    // This will ensure that the result is an integer between min and max.
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let rand = getRandomInt(0, 100)

  // Initialize individual character instances
  const hero1 = new Warrior('Bjorn', 1, 100,'axe');
  console.log(hero1.greet());
  console.log(hero1.attack(rand));
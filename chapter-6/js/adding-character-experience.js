// Improve our example RPG program to add an experience property named xp to the character.
// Its initial value is 0. Experience must appear in character description.

const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,
   describe(){
    return `${aurora.name} has ${this.health} health points ${this.strength} strenth points and ${this.xp}points`;
    }
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

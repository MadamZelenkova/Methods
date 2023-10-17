export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  levelUp() {
    if (this.level !== 0) {
      this.level += 1;
      this.attack = Math.floor(this.attack * 1.2);
      this.defence = Math.floor(this.defence * 1.2);
      this.health = 100;
      return this;
    } else {
      throw new Error("Нельзя повысить левел умершего");
    }
  }

  damage(points) {
    const takenDamage = points * (1 - this.defence / 100);
    this.health = Math.max(Math.floor(this.health - takenDamage), 0);
  }
}

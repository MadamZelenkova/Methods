import Character from "../Character";

test("Testing the liveUp method of the class Character", () => {
  const character = new Character("gamer", "Bowman");
  character.health = 75;
  character.attack = 25;
  character.defence = 25;
  character.levelUp();

  const expectedValue = {
    name: "gamer",
    type: "Bowman",
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  expect(character).toEqual(expectedValue);
});

test("Testing error in the liveUp method of the class Character", () => {
  const character = new Character("gamer", "Bowman");
  character.health = 100;
  character.level = 0;
  character.attack = 25;
  character.defence = 25;

  expect(() => character.levelUp()).toThrow("Нельзя повысить левел умершего");
});

test("Testing the damage method of the class Character", () => {
  const character = new Character("gamer", "Bowman");
  character.health = 100;
  character.defence = 25;
  character.damage(30);

  expect(character.health).toBe(77);
});

test("Testing the damage method of the class Character with negative health", () => {
    const character = new Character("gamer", "Bowman");
    character.health = 10;
    character.defence = 25;
    character.damage(30);
  
    expect(character.health).toBe(0);
  });

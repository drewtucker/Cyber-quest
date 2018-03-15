import { Character } from './../src/Characters/Character.js';
import { Human } from './../src/Characters/Human.js';
import { Cyborg } from './../src/Characters/Cyborg.js';
import { Robot } from './../src/Characters/Robot.js';
import { Alien } from './../src/Characters/Alien.js';
import { Combat } from './../src/Combat.js';
import { Enemy } from './../src/Characters/Enemy.js';
import { Criminal } from './../src/Enemies/Criminal.js';
import { Levels } from './../src/Levels/Levels.js';
import { Item } from './../src/Items.js';

describe('Character', function() {
  it('should test that a Character can be instantiated', function() {
    var sonny = new Character(0, 1, 50, 14, 16, 20 ,12);
    console.log(sonny);
    expect(sonny.health).toEqual(50);
  });
});

describe('Human', function() {
  it('should test that a Human can be instantiated', function() {
    var HughMann = new Human();
    console.log(HughMann);
    expect(HughMann.health).toEqual(50);
  });

  // it('should test that can be called', function() {
  //   var ability = new Human();
  //   var combat = new Combat(true, Human(), Criminal(), LevelOne());
  //   ability.AdrenalineBoost();
  //   expect(ability.intelligence).toEqual(25);
  // });
});

describe('Combat', function() {
  it('should test that a Combat object can be instantiated', function() {
    var human = new Human(0, 1, 50, 14, 16 , 20, 12);
    console.log(human);
    var criminal = new Criminal("Criminal", 25, 10, 12);
    var combat = new Combat(true, human, criminal, Levels.LevelOne, human.health, criminal.health);
    expect(combat.status).toEqual(true);
    expect(human.intelligence).toEqual(20);
  });

})

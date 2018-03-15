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
    expect(sonny.health).toEqual(50);
  });
});

describe('Human', function() {
  it('should test that a Human can be instantiated', function() {
    var HughMann = new Human();
    console.log(HughMann);
    expect(HughMann.health).toEqual(50);
  });
});

describe('Combat', function() {
  var player;
  var criminal;
  var combat;
  beforeEach(function() {
    player = new Human();
    criminal = new Criminal();
    combat = new Combat(player, criminal);
  });
  it('should test that a Combat object can be instantiated', function() {

    expect(player.intelligence).toEqual(20);
  });

  it('should test that the PlayerAttack function deals damage to Enemy health', function() {

    criminal = combat.PlayerAttack();
    console.log(criminal.health);
    expect(criminal.health).toEqual(10);
  });

  it('should test that the EnemyAttack function deals damage to Player health', function() {
    var human = new Human();
    var criminal = new Criminal();
    var combat = new Combat(human, criminal);
    human = combat.EnemyAttack();
    console.log(human.health);
    expect(human.health).toEqual(38);
  });

  it('should test that the UsePlayerAbility function uses player ability', function() {

    player = combat.UsePlayerAbility();
    console.log(player.intelligence);
    expect(player.intelligence).toEqual(25);
  });

  it('should test that the RoundOver function is called when the character or enemy health is at 0', function() {

    player = combat.RoundOver();
    console.log(player.health);
    expect(player.health).toEqual(0);
  });
});

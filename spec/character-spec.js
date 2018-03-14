import { Character } from './../src/Characters/Character.js';
import { Human } from './../src/Characters/Human.js';
import { Cyborg } from './../src/Characters/Cyborg.js';
import { Robot } from './../src/Characters/Robot.js';
import { Alien } from './../src/Characters/Alien.js';
import { Combat } from './../src/Combat.js';

describe('Character', function() {
  it('should test that a Character can be instantiated', function() {
    var newChar = new Human("Jeff", 0, 0, 1, 50, 10, 10, 15, 15);
    console.log(newChar);
    expect(newChar.name).toEqual("Jeff");
  });
});

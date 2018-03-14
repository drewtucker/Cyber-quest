import {Character} from './Character';

class Cyborg extends Character
{
  constructor(type, health, stamina, strength, intelligence, speech, items, abilities)
  {
    this.type = cyborg;
    this.health = 60;
    this.stamina = 12;
    this.strength = 14;
    this.intelligence = 16;
    this.speech = 13;
    this.items = [];
    this.ability = PowerArm();
  }

  PowerArm()
  {
    if(combat === true)
    {
      this.strength = 20;
      this.stamina = 18;
    }
  }
}

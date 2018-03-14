import {Character} from './Character';

class ß extends Character
{
  constructor(type, health, stamina, strength, intelligence, speech, items, abilities)
  {
    this.type = this.Robot;
    this.health = 70;
    this.stamina = 14;
    this.strength = 16;
    this.intelligence = 20;
    this.speech = 12;
    this.items = items;
    this.ability = Terminate();
  }

  Terminate()
  {
    if(combat === true)
    {
      this.health = 100;
      this.strength = 20;
    }
  }
}
ß

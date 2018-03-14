import {Character} from './Character';

class Alien extends Character
{
  constructor(type, health, stamina, strength, intelligence, speech, items, abilities)
  {
    this.type = alien;
    this.health = 40;
    this.stamina = 14;
    this.strength = 20;
    this.intelligence = 18;
    this.speech = 10;
    this.items = items;
    this.ability = PoisonSpit();
  }

  PoisonSpit()
  {
    if(combat === true)
    {
      this.damage = 40;
    }
  }
}

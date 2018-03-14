import {Character} from './Character';

class Human extends Character
{
  constructor(type, health, stamina, strength, intelligence, speech, items, abilities)
  {
    this.type = human;
    this.health = 50;
    this.stamina = 10;
    this.strength = 10;
    this.intelligence = 15;
    this.speech = 15;
    this.items = [];
    this.abilities = AdrenalineBoost();
  }

  AdrenalineBoost()
  {
    if(combat === true)
    {
      this.strength = 15;
      this.stamina = 15;
      this.intelligence = 25;
    }
  }
}

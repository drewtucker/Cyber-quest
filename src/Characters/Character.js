import { Combat } from './../Combat';
import { Item } from './../Items.js';

export class Character
{
  constructor(experience, level, health, stamina, strength, intelligence, speech)
  {
    this.experience = 0;
    this.level = 1;
    this.health = health;
    this.stamina = stamina;
    this.strength = strength;
    this.intelligence = intelligence;
    this.speech = speech;
    this.item = [Item.NutrientBar];
  }

  levelUp()
  {
    if(this.experience >= 50){
      this.level += 1;
      this.health += 10;
      this.stamina += 1;
      this.strength += 1;
      this.intelligence += 2;
      this.speech += 1;
      this.experience = 0;
    }
    else if(this.experience >= 100)
    {
      this.level += 1;
      this.health += 10;
      this.stamina += 1;
      this.strength += 1;
      this.intelligence += 2;
      this.speech += 1;
      this.experience = 0;
    }
    else if(this.experience >= 150)
    {
      this.level += 1;
      this.health += 10;
      this.stamina += 1;
      this.strength += 1;
      this.intelligence += 2;
      this.speech += 1;
      this.experience = 0;
    }
    else if(this.experience >= 200)
    {
      this.level += 1;
      this.health += 10;
      this.stamina += 1;
      this.strength += 1;
      this.intelligence += 2;
      this.speech += 1;
      this.experience = 0;
    }
    else if(this.experience >= 250)
    {
      this.level += 1;
      this.health += 10;
      this.stamina += 1;
      this.strength += 1;
      this.intelligence += 2;
      this.speech += 1;
      this.experience = 0;
    }
  }
  PoisonSpit()
  {

    //this.damage = 25;
    this.strength += 25; // damage output is now 45
    return this.character;
  }

  PowerArm()
  {

      this.strength = 20;
      this.stamina = 18;
      return this.character;
  }

  Terminate()
  {
      this.health += 15;
      this.strength = 20;
      return this.character;
  }
  AdrenalineBoost()
  {
      this.strength = 15;
      this.stamina = 15;
      this.intelligence = 25;
      return this.character;
  }
}

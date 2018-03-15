import {Combat} from './../Combat';

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
    if(Combat.status === true)
    {
    //this.damage = 25;
    this.strength += 25; // damage output is now 45
    }
  }

  PowerArm()
  {
    if(Combat.status === true)
    {
      this.strength = 20;
      this.stamina = 18;
    }
  }

  Terminate()
  {
    if(Combat.status === true)
    {
      this.health += 15;
      this.strength = 20;
    }
  }
  AdrenalineBoost()
  {
    if(Combat.status === true)
    {
      this.strength = 15;
      this.stamina = 15;
      this.intelligence = 25;
    }
  }
}

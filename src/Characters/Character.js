export class Character
{
  constructor(name, type, experience, level, health, stamina, strength, intelligence, speech, ability)
  {
    this.name = name;
    this.type = type;
    this.experience = 0;
    this.level = 1;
    this.health = health;
    this.stamina = stamina;
    this.strength = strength;
    this.intelligence = intelligence;
    this.speech = speech;
    this.ability = ability;
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

}

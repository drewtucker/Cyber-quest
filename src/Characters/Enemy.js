export class Enemy
{
  constructor(name, health, stamina, strength, ability)
  {
    this.name = name;
    ene
    this.health = health;
    this.stamina = stamina;
    this.strength = strength;
    this.ability = ability;
  }

  Criminal()
  {
    this.name = "Criminal";
    this.health = 25;
    this.stamina = 10;
    this.strength = 12;
  }

  BobaFett()
  {
    this.name = "Boba Fett";
    this.health = 35;
    this.stamina = 12;
    this.strength = 15;
    this.ability = Net(){
        Character.strength -= 5;
    }
  }

  T1000()
  {
    this.name = "T-1000";
    this.health = 70;
    this.stamina = 19;
    this.strength = 20;
    this.ability = Fortify(){
        this.health += 15;
    }
  }

  Predator()
  {
    this.name = "Predator";
    this.health = 60;
    this.stamina = 15;
    this.strength = 17;
    this.ability = Hunt(){
        this.strength += 5;
    }
  }

  AlienQueen()
  {
    this.name = "Alien Queen";
    this.health = 100;
    this.stamina = 20;
    this.strength = 23;
    this.ability = TailSwipe(){
        Chracter.health -= 10;
    }
  }
}

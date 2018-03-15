import {Character} from './Character';

export class Enemy
{
  constructor(name, health, stamina, strength)
  {
    this.name = name;
    this.health = health;
    this.stamina = stamina;
    this.strength = strength;
  }
  Criminal() //0
  {
    this.name = "Criminal";
    this.health = 25;
    this.stamina = 10;
    this.strength = 12;
  }

  BobaFett() //1
  {
    this.name = "Boba Fett";
    this.health = 35;
    this.stamina = 12;
    this.strength = 15;
    this.ability = Enemy.Net(function() {
      Character.strength -= 5;
    });
  }

  T1000() //2
  {
    this.name = "T-1000";
    this.health = 70;
    this.stamina = 19;
    this.strength = 20;
    this.ability = Enemy.Fortify(function(){
      this.health += 15;
    });
  }

  Predator() //3
  {
    this.name = "Predator";
    this.health = 60;
    this.stamina = 15;
    this.strength = 17;
    this.ability = Enemy.Hunt(function(){
      this.strength += 5;
    });
  }

  AlienQueen() //4
  {
    this.name = "Alien Queen";
    this.health = 100;
    this.stamina = 20;
    this.strength = 23;
    this.ability = Enemy.TailSwipe(function(){
      Character.health -= 10;
    });
  }
}

import { Character } from './Characters/Character.js';
import { Enemy } from './Characters/Enemy.js';
import { Levels } from './Levels/Levels.js';
import { Item } from './Items.js';

export class Combat
{

  constructor(character, enemy)
  {
    this.status = true;
    this.character = character;
    this.enemy = enemy;
  }

  //this method will output the enemy after the attack has been calculated
  PlayerAttack()
  {
    this.enemy.health = this.enemy.health - this.character.strength;
    if(this.enemy.health <= 0)
    {
      Combat.RoundOver();
    }
    return this.enemy;
  }

  EnemyAttack()
  {
    this.character.health = this.character.health - this.enemy.strength;
    if(this.character.health <= 0)
    {
      Combat.RoundOver();
    }
    return this.character;
  }

  UsePlayerAbility()
  {
    this.character.AdrenalineBoost();
    return this.character;
  }

  // UseEnemyAbility()
  // {
  //   if(this.level != Levels.LevelOne())
  //   {
  //     if(this.enemy === 0)
  //     {
  //       return;
  //     }
  //     else
  //     {
  //       this.enemy -= 1;
  //       this.enemy.ability;
  //     }
  //   }
  // }

  RoundOver()
  {
    if(this.player.health <= 0)
    {
      alert("You have been killed! R.I.P");
    }
    else if(this.enemy.health <= 0)
    {
      alert("You won the fight!");
      Character.character.items.push(this.level.item);
      Character.experience += 50;
    }
  }
}

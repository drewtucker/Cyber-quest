import { Character } from './Characters/Character.js';
import { Enemy } from './Characters/Enemy.js';
import { Levels } from './Levels/Levels.js';
import { Item } from './Items.js';

export class Combat
{

  constructor(status, characterType, enemyType, level, playerHealth, enemyHealth)
  {
    this.status = true;
    this.characterType = characterType;
    this.enemyType = enemyType;
    this.level = level;
    this.playerHealth = playerHealth;
    this.enemyHealth = enemyHealth;
    // this.characterType.items.push(NutrientBar());
  }

  PlayerAttack()
  {
    this.enemyHealth = this.enemyHealth - this.characterType.strength;
    if(this.enemyHealth <= 0)
    {
      Combat.RoundOver();
    }
  }

  EnemyAttack()
  {
    this.playerHealth = this.playerHealth - this.enemyType.strength;
    if(this.playerHealth <= 0)
    {
      Combat.RoundOver();
    }
  }

  UsePlayerAbility()
  {
    if(this.level != Levels.LevelOne())
    {
      if(this.playerAbilityUses === 0)
      {
        alert("You have no ability uses left!");
        return;
      }
      else
      {
        this.playerAbilityUses -= 1;
        this.characterType.ability;
      }
    }
  }

  UseEnemyAbility()
  {
    if(this.level != Levels.LevelOne())
    {
      if(this.enemyAbilityUses === 0)
      {
        return;
      }
      else
      {
        this.enemyAbilityUses -= 1;
        this.enemyType.ability;
      }
    }
  }

  RoundOver()
  {
    if(this.playerHealth <= 0)
    {
      this.status = false;
      alert("You have been killed! R.I.P");
    }
    else if(this.enemyHealth <= 0)
    {
      this.status = false;
      alert("You won the fight!");
      Character.character.items.push(this.level.item);
      Character.experience += 50;
    }
  }
}

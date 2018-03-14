import {Character} from './Characters/Character.js';
import {Enemy} from './Characters/Enemy.js';
import {Item} from './Items.js';
import {Levels} from './Levels/Levels.js';

export class Combat
{
  constructor(status, characterType, enemyType, level, playerHealth, enemyHealth, playerAbilityUses = 0, enemyAbilityUses = 0, i=0)
  {
    this.status = true;
    this.characterType = Character.character[i];
    this.enemyType = Enemy.enemies[i];
    this.level = Levels.level[i];
    this.playerHealth = Character.character[i].health;
    this.enemyHealth = Enemy.enemies[i].health;
    this.characterType.items.push(Item.NutrientBar());
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

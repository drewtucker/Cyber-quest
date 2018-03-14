import {Character} from './Character';
import {Enemy} from './Enemy';
import {Item} from './Items';
import {Levels} from './Levels';

export class Combat
{
  constructor(status, characterType, enemyType, level, playerHealth, enemyHealth, playerAbilityUses, enemyAbilityUses)
  {
    this.status = true;
    this.characterType = Character.type;
    this.enemyType = Enemy.type;
    this.level = level;
    this.playerHealth = Character.health;
    this.enemyHealth = Enemy.health;
    this.playerAbilityUses = 0;
    this.enemyAbilityUses = 0;
    if(this.playerHealth <= 0)
    {
      this.status = false;
      alert("You have been killed! R.I.P");
    }
    else if(this.enemyHealth <= 0)
    {
      this.status = false;
      alert("You won the fight!");
      Character.items.push(Levels.item);
      Character.experience += 50;
    }
  }


  PlayerAttack()
  {
    this.enemyHealth = Enemy.health - Character.strength;
  }

  EnemyAttack()
  {
    this.playerHealth = Character.health - Enemy.strength;
  }

  UseBar()
  {
    NutrientBar();
  }

  UsePlayerAbility()
  {
    if(this.level >= 2)
    {
      this.characterType.ability;
      this.playerAbilityUses -= 1;
      if(playerAbilityUses === 0)
      {
        alert("You have no ability uses left!");
      }
    }
  }

  UseEnemyAbility()
  {
    if(this.level >= 2)
    {
      this.characterType.ability;
      this.enemyAbilityUses -= 1;
      if(enemyAbilityUses === 0)
      {
        break;
      }
    }
  }

}

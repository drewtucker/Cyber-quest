import {Character} from './Character';
import {Enemy} from './Enemy';
import {Item} from './Items';
import {Combat} from './Combat';

export class Levels
{
  constructor(enemy, item)
  {
    this.enemy = enemy;
    this.item = item;
  }

  LevelOne()
  {
    this.enemy = Criminal();
  }

  LevelTwo()
  {
    Combat.playerAbilityUses = 1;
    Combat.enemyAbilityUses = 1;
    this.enemy = BobaFett();
    this.item = StimPack();
  }

  LevelThree()
  {
    Combat.playerAbilityUses = 2;
    Combat.enemyAbilityUses = 2;
    this.enemy = Predator();
    this.item = HoloBook();
  }

  LevelFour()
  {
    Combat.playerAbilityUses = 3;
    Combat.enemyAbilityUses = 3;
    this.enemy = T1000();
    this.item = Blaster();
  }

  LevelFive()
  {
    Combat.playerAbilityUses = 4;
    Combat.enemyAbilityUses = 4;
    this.enemy = AlienQueen();
    this.item = Beautifier();
  }
}

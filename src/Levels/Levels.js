import {Character} from './../Characters/Character.js';
import {Enemy} from './../Characters/Enemy.js';
import {Item} from './../Items.js';
import {Combat} from './../Combat.js';

export class Levels
{
  constructor(enemy, item)
  {
    this.enemy = enemy;
    this.item = item;
    this.level = [
      {
        LevelOne()
        {
          this.enemy = Enemy.enemies.Criminal();
        }
      },

      {
        LevelTwo()
        {
          Combat.playerAbilityUses = 1;
          Combat.enemyAbilityUses = 1;
          this.enemy = Enemy.enemies.BobaFett();
          this.item = Item.items.StimPack();
        }
      },

      {
        LevelThree()
        {
          Combat.playerAbilityUses = 2;
          Combat.enemyAbilityUses = 2;
          this.enemy = Enemy.enemies.Predator();
          this.item = Item.items.HoloBook();
        }

      },

      {
        LevelFour()
        {
          Combat.playerAbilityUses = 3;
          Combat.enemyAbilityUses = 3;
          this.enemy = Enemy.enemies.T1000();
          this.item = Item.items.Blaster();
        }
      },

      {
        LevelFive()
        {
          Combat.playerAbilityUses = 4;
          Combat.enemyAbilityUses = 4;
          this.enemy = Enemy.enemies.AlienQueen();
          this.item = Item.items.Beautifier();
        }
      }

    ];
  }
}
//
//   LevelOne()
//   {
//     this.enemy = Criminal();
//     this.id = 1;
//   }
//
//   LevelTwo()
//   {
//     Combat.playerAbilityUses = 1;
//     Combat.enemyAbilityUses = 1;
//     this.enemy = BobaFett();
//     this.item = StimPack();
//     this.id = 2;
//   }
//
//   LevelThree()
//   {
//     Combat.playerAbilityUses = 2;
//     Combat.enemyAbilityUses = 2;
//     this.enemy = Predator();
//     this.item = HoloBook();
//     this.id = 3;
//   }
//
//   LevelFour()
//   {
//     Combat.playerAbilityUses = 3;
//     Combat.enemyAbilityUses = 3;
//     this.enemy = T1000();
//     this.item = Blaster();
//     this.id = 4;
//   }
//
//   LevelFive()
//   {
//     Combat.playerAbilityUses = 4;
//     Combat.enemyAbilityUses = 4;
//     this.enemy = AlienQueen();
//     this.item = Beautifier();
//     this.id = 5;
//   }

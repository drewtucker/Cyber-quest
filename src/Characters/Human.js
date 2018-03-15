import { Character } from './Character';
import { Combat } from './../Combat.js';
import { Item } from './../Items.js';

export class Human extends Character
{
      constructor() {
        super(0, 1, 50, 15, 15, 20, 15);
        this.ability = this.AdrenalineBoost;
      }
}

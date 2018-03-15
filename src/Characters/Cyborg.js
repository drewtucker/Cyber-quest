import { Character } from './Character';
import { Combat } from './../Combat.js';
import { Item } from './../Items.js';

export class Cyborg extends Character
{
    constructor() {
      super(0, 1, 60, 12, 14, 16, 13);
     this.ability = this.PowerArm;
    }
}

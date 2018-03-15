import { Character } from './Character';
import { Combat } from './../Combat.js';
import { Item } from './../Items.js';

export class Alien extends Character
{
  constructor() {
    super(0, 1, 40, 14, 20, 18, 10);
    this.ability = this.PoisonSpit;
  }
}

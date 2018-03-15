import {Character} from './Character.js';
import { Combat } from './../Combat.js'
import { Item } from './../Items.js';

export class Robot extends Character
{

  constructor(){
    super(0, 1, 70, 14, 16, 20, 12);
    this.ability = this.Terminate;
  }
}

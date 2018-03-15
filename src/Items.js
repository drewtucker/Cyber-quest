import {Character} from './Characters/Character.js';


export class Item
{
  constructor(name, func)
  {
    this.name = name;
    this.func = func;
  }

  Blaster()
  {
    Character.strength + 5;
  }

  HoloBook()
  {
    Character.intelligence + 5;
  }

  StimPack()
  {
    Character.stamina + 5;
  }

  Beautifier()
  {
    Character.speech + 5;
  }

  NutrientBar()
  {
    Character.health + 30;
  }
}

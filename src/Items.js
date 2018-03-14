import {Character} from './Character';


export class Item
{
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

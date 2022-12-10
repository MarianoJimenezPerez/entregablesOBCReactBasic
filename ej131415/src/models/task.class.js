import { LEVELS } from "./levels.enum";

export class User {
  title = "";
  description = "";
  completed = false;
  level = LEVELS.BAJA;

  constructor(title, description, completed, level) {
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.level = level;
  }
}

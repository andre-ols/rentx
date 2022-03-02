import { v4 as uuidV4 } from 'uuid';

class Category {
  id?: string;
  name: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;

  constructor({ name, description, id, created_at, updated_at }: Category) {
    if (!this.id) {
      this.id = uuidV4();
      this.created_at = new Date();
      this.updated_at = new Date();
    } else {
      this.id = id;
      this.created_at = created_at;
      this.updated_at = updated_at;
    }

    this.name = name;
    this.description = description;
  }
}

export { Category };

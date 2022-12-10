import { Department } from 'src/department/entities/department.entity';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';

export class Order {
  id?: string;
  user?: User;
  department?: Department;
  createdAt?: Date;
  updatedAt?: Date;
  products?: Product[];
}

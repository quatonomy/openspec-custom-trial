import { z } from 'zod';

export class User {
  name: string;
  email: string;
  age: number;
  role: 'admin' | 'user';
  city?: string | undefined;

  public constructor(name: string, email: string, age: number, role: 'admin' | 'user', city?: string | undefined) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.role = role;
    this.city = city;
  }
}

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().int().nonnegative(),
  role: z.enum(['admin', 'user']),
  city: z.string().optional()
});

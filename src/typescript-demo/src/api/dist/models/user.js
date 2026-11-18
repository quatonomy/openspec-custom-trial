import { z } from 'zod';
export class User {
    name;
    email;
    age;
    role;
    city;
    constructor(name, email, age, role, city) {
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
//# sourceMappingURL=user.js.map
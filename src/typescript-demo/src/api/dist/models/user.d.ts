import { z } from 'zod';
export declare class User {
    name: string;
    email: string;
    age: number;
    role: 'admin' | 'user';
    city?: string | undefined;
    constructor(name: string, email: string, age: number, role: 'admin' | 'user', city?: string | undefined);
}
export declare const userSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    age: z.ZodNumber;
    role: z.ZodEnum<{
        admin: "admin";
        user: "user";
    }>;
    city: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=user.d.ts.map
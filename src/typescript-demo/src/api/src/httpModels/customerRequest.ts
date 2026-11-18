import type { Request } from 'express';

class CustomerRequest<T> extends Request {
    test?: T;
}

export { CustomerRequest };
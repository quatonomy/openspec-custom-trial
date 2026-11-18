import type User from './models/User';

const tsDemoApi = "http://localhost:3000";

const headers: Headers = new Headers();
headers.set('Content-Type', 'application/json');
headers.set('Accept', 'application/json');
headers.set('Authorization', 'Bearer ' + "valid-token");

function getUsers(): Promise<User[]>{

    const request: Request = new Request(tsDemoApi + '/api/users', { headers });

    return fetch(request)
        .then(response => response.json())
        .then(data => data as User[]);
}

function getUser(userId: string): Promise<User>{

    const request: Request = new Request(tsDemoApi + '/api/user/' + userId, { headers });

    return fetch(request)
        .then(response => response.json())
        .then(data => data as User);
}

function createUser(user: User): Promise<User> {

    const request: Request = new Request(tsDemoApi + '/api/user', {
        method: 'POST',
        headers,
        body: JSON.stringify(user)
    });

    return fetch(request)
        .then(response => response.json())
        .then(data => data as User);
}

export { getUsers, getUser, createUser };

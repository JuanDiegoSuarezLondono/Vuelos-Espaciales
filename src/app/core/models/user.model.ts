export type Roles = 0 | 1;

export interface User {
    username: string;
    password: string;
}

export interface UserResponse {
    message: string;
    token: string;
    userId: number;
    user: string
    role: Roles;
}
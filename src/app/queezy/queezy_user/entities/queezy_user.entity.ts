
export class QueezyUser {
    id_user?: number
    name?: string
    email: string
    password: string
    access_token?: string
}


export interface ResponseApiUser extends QueezyUser {
    user?: QueezyUser
}
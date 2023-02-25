export interface IUser {
    id: number;
    name: string;
    done?: boolean;
} 

export interface IPost {
    id: number;
    name: string;
    text: string;
    create_date: Date;
} 
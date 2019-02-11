import { IUser } from './../../models/user.interface';

export interface IUserState {
	users: Array<IUser>;
	selectedUSer: IUser;
}

export const initialUserState: IUserState = {
	users: null,
	selectedUSer: null
};

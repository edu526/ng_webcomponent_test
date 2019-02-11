import { selectUserList } from './../selectors/user.selectors';
import { GetUser, EUserActions, GetUserSuccess, GetUsers, GetUsersSuccess } from './../actions/user.actions';
import { UserService } from './../../services/user.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { IAppState } from '../state/app.state';
import { Store, select } from '@ngrx/store';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { IUserHttp } from 'src/app/models/http-models/user-http.interface';

@Injectable()
export class UserEffects {
	@Effect()
	getUser$ = this._action$.pipe(
		ofType<GetUser>(EUserActions.GetUser),
		map(action => action.payload),
		withLatestFrom(this._store.pipe(select(selectUserList))),
		switchMap(([id, users]) => {
			const selectedUSer = users.filter(user => user.id === +id)[0];
			return of(new GetUserSuccess(selectedUSer));
		})
	);

	@Effect()
	getUsers$ = this._action$.pipe(
		ofType<GetUsers>(EUserActions.GetUsers),
		switchMap(() => this._userService.getUsers()),
		switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
	);

	constructor(
		private _userService: UserService,
		private _action$: Actions,
		private _store: Store<IAppState>
	) { }

}

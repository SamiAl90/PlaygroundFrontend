import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as layoutActions from '../actions/layout.actions';
import { IdentityUser } from '../models/identity-user.model';

@Component({
    selector: 'etdb-toolbar',
    templateUrl: 'toolbar.component.html'
})

export class ToolbarComponent {
    @Input() title = '';
    @Input() sidenavVisible: boolean;
    @Input() user: IdentityUser;

    public constructor(private store: Store<fromRoot.AppState>) {}

    public toggleSidenav(): void {
        if (!this.sidenavVisible) {
            this.openSidenav();
        } else {
            this.closeSidenav();
        }
    }

    public getUserGreeting(): string {
        return 'Hello ' + this.user.preferred_username;
    }

    private openSidenav(): void {
        this.store.dispatch(new layoutActions.OpenSidenav());
    }

    private closeSidenav(): void {
        this.store.dispatch(new layoutActions.CloseSidenav());
    }
}

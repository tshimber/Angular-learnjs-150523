import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IApplicationConfig} from '../../shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    @Input() applicationConfig: IApplicationConfig | null = null;

    @Output() menuClickOutput = new EventEmitter<void>();

    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let count = 0;

        setInterval(() => {
            count += 1;
        }, 1000);
    }
}

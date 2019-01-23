import { Component } from '@angular/core';

import { demoSnippet } from './data-table-overview.list';

import { VERSION } from '../../../../../environments/version';

/**
 * Data table overview component controller.
 */
@Component({
  selector: 'app-data-table-overview-component',
  templateUrl: './data-table-overview.component.html',
  styleUrls: ['./data-table-overview.component.scss']
})
export class DataTableOverviewComponent {
  public demoSnippet = demoSnippet;
  public packageVersion = VERSION;
}

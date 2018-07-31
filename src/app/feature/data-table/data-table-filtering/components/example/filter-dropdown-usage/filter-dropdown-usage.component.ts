import { Component, ElementRef, Input } from '@angular/core';

import { DropdownMenuPosition } from 'ornamentum';

import { ExampleDataModel } from '../../../../../../shared/models';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-filter-dropdown-usage',
  templateUrl: './filter-dropdown-usage.component.html'
})
export class FilterDropdownUsageComponent {
  public DropdownMenuPosition = DropdownMenuPosition;

  @Input()
  public parentElement: ElementRef;

  public items: ExampleDataModel[];

  constructor(private tableDataFetchService: TableDataFetchService) {
    this.items = this.tableDataFetchService.getTableData();
  }
}

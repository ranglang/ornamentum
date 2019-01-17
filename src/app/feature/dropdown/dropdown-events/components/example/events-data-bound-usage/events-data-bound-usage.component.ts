import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-data-bound-usage',
  templateUrl: './events-data-bound-usage.component.html',
  styleUrls: ['../../dropdown-events.component.scss']
})
export class EventsDataBoundUsageComponent {
  public items: ExampleData[];
  public dataBoundEventData: string = null;

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }

  public onDataBound(): void {
    this.dataBoundEventData = 'Data bound event is called';
  }
}
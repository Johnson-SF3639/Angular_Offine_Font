import { Component, OnInit, ErrorHandler  } from '@angular/core';
import * as Sentry from "@sentry/angular-ivy";
import {data} from './datasource'

@Component({
  selector: 'app-root',
  template: `<ejs-grid [dataSource]='data' height="250">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
            </ejs-grid>
            `,
  providers: [
  {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
      showDialog: true,
      }),
  },
  ],
})
export class AppComponent implements OnInit {
  public data?: any;

  ngOnInit(): void {
    this.data = data
  }
}

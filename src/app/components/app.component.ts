import { Component, OnInit  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * Creates an app component instance.
   * @param translate The translate service of the app component.
   */
  constructor(private translate: TranslateService) { }

  /**
   * Init hook of the app component.
   */
  ngOnInit() {
    this.translate.use('en');
  }
}

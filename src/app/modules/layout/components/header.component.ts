import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /**
   * Creates a header component instance.
   * @param translate The translate service of the header component.
   */
  constructor(private translate: TranslateService) { }

  /**
   * Defines the active status of the header component.
   */
  active = false;

  /**
   * Defines the languages of the header component.
   */
  languages = ['en', 'es'];

  /**
   * Toggles the active status of the header component.
   */
  toggleActive() {
    this.active = !this.active;
  }

  /**
   * Changes the language.
   * @param language The language to change.
   */
  changeLanguage(language: string) {
    this.translate.use(language);
  }

  /**
   * Tracks a language by index.
   * @param index The index of the language to track.
   * @param language The language to track
   */
  trackByIndex(index: number, language: string) {
    return index;
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  public currentLang: string;

  constructor() {
    this.currentLang = 'en';
  }

  public setLanguage(lang: string) {
    this.currentLang = lang;
  }
  public getLanguage() {
    return this.currentLang;
  }
}

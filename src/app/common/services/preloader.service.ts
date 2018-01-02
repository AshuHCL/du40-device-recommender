import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

/**
 * This class can be injected into a component/service in our app.
 */
@Injectable()
/**
 * PreloaderService Class.
 */
export class PreloaderService {
  /**
   * Container.
   */
  private _container: Element | HTMLDivElement;
  /**
   * Class name.
   */
  private _className: string ;
  /**
   * Enable class.
   */
  private _enableClass: string;
  /**
   * Disable class.
   */
  private _disableClass: string;
  /**
   * Constructor
   * @param document The document
   */
  constructor(@Inject(DOCUMENT) private document: any) {
    this._className = 'att_preloader_overlay';
    this._enableClass = 'att_preloader_start';
    this._disableClass = 'att_preloader_stop';
    this._container = this.document.querySelector(`.${this._className}`);
  }

  /**
   * start
   */
   public start() {
     this._container.classList.remove(this._disableClass);
     this._container.classList.add(this._enableClass);
   }

   /**
    * stop
    */
   public stop() {
       this._container.classList.add(this._disableClass);
       this._container.classList.remove(this._enableClass);
   }

}

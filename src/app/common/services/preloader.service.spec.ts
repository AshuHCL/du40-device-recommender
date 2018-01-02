import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/platform-browser';
import { PreloaderService } from './preloader.service';

class Win {
   public querySelector() {
      return {
classList: {
    add: (s) => {},
    remove: (p) => {}
  }
      };
  }
}

describe('preloaderService: preloaderService', () => {
    let config: PreloaderService;
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [PreloaderService, {
          provide: DOCUMENT, useClass: Win
        }]
      });
      config = TestBed.get(PreloaderService);
 });
    it('should test start function of action', () => {
      config.start();
      expect(config.start).toBeDefined();
    });
    it('should test stop function of action', () => {
      config.stop();
      expect(config.stop).toBeDefined();
    });
});

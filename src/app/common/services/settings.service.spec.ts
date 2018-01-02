import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from './settings.service';

class Win {
  public querySelector() {
    return {
      classList: {
        add: s => {},
        remove: p => {}
      }
    };
  }
}

describe('SettingsService: SettingsService', () => {
  let config: SettingsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsService]
    });
    config = TestBed.get(SettingsService);
  });
  it('should test setLanguage function of action', () => {
    config.setLanguage('english');
    expect(config.setLanguage).toBeDefined();
  });
  it('should test getLanguage function of action', () => {
    config.getLanguage();
    expect(config.getLanguage).toBeDefined();
  });
});

import { TestBed } from '@angular/core/testing';

import { FrontComponentUiService } from './front-component-ui.service';

describe('FrontComponentUiService', () => {
  let service: FrontComponentUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontComponentUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

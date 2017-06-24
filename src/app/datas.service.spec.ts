import {TestBed, inject} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';

import {DatasService} from './datas.service';

describe('DatasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasService]
    });
  });

  it('should ...', inject([DatasService], (service: DatasService) => {
    expect(service).toBeTruthy();
  }));
});

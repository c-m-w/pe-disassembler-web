import { TestBed } from '@angular/core/testing';

import { PeService } from './pe.service';

describe('PeService', () => {
    let service: PeService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PeService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

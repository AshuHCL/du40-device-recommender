import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/platform-browser';
import { UnlockService } from './unlock.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {
    MockBackend,
    MockConnection
} from '@angular/http/testing';
import { ResponseOptions } from '@angular/http';

describe('UnlockService', () => {
    let service: UnlockService;
    let mockBackend: any;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                MockBackend,
                UnlockService,
            ]
        });
        service = TestBed.get(UnlockService);
        mockBackend = MockBackend;
    });
    function setupConnections(backend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            const responseOptions = new ResponseOptions(options);
            const response: any = new Response(responseOptions);
            if (response.status === 200) {
                connection.mockRespond(response);
            } else {
                connection.mockError(new Error(options.body.message));
            }
        });
    }
    it('should test start function of action', () => {
        // setupConnections(mockBackend, { body: {}, status : 200} );
        service.orderFlow(0).subscribe(
            (res) => {
                expect(res).toBeDefined();
            }
        );
    });
    it('should test stop function of action', () => {
        service.imeiOrderFlow(0);
    });
    it('should test stop function of action', () => {
        service.validateEmail(0);
    });
    it('should test stop function of action', () => {
        service.confirmation();
    });
    it('should test stop function of action', () => {
        service.imeiMakeModelResponse(0);
    });
    it('should test stop function of action', () => {
        service.unlockOrderStatus();
    });
    /*  it('should test stop function of action', () => {
         service.verifyCaptcha(0);
     }); */
});

<<<<<<< HEAD
import { TestBed } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
=======
// import { TestBed } from '@angular/core/testing';

// import { TokenInterceptor } from './token.interceptor';

// describe('TokenInterceptor', () => {
//   beforeEach(() => TestBed.configureTestingModule({
//     providers: [
//       TokenInterceptor
//       ]
//   }));

//   it('should be created', () => {
//     const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor);
//     expect(interceptor).toBeTruthy();
//   });
// });
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d

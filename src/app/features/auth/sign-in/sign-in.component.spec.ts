import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(SignInComponent);
    fixture.detectChanges();
  });

  it('renders the sign-in experience and demo credentials', () => {
    expect(fixture.nativeElement.textContent).toContain('Welcome to Qlic');
    expect(fixture.nativeElement.textContent).toContain('demo@qlic.com');
  });
});

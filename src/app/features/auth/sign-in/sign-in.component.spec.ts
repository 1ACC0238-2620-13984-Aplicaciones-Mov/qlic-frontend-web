import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LocaleService } from '../../../core/services/locale.service';
import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    localStorage.removeItem('qlic-locale');
    await TestBed.configureTestingModule({
      imports: [SignInComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(SignInComponent);
    fixture.detectChanges();
  });

  afterEach(() => localStorage.removeItem('qlic-locale'));

  it('renders the sign-in experience and demo credentials', () => {
    expect(fixture.nativeElement.textContent).toContain('Welcome to Qlic');
    expect(fixture.nativeElement.textContent).toContain('demo@qlic.com');
  });

  it('translates the complete sign-in content to Spanish', () => {
    TestBed.inject(LocaleService).setLocale('es-419');
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Bienvenido a Qlic');
    expect(fixture.nativeElement.textContent).toContain('Inicia sesión en tu panel de gestión del agua');
    expect(fixture.nativeElement.textContent).not.toContain('Welcome to Qlic');
  });
});

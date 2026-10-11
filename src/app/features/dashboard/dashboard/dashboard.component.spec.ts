import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LocaleService } from '../../../core/services/locale.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    localStorage.removeItem('qlic-locale');
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
  });

  afterEach(() => localStorage.removeItem('qlic-locale'));

  it('translates headings, metric labels and actions to Spanish', () => {
    TestBed.inject(LocaleService).setLocale('es-419');
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Panel de monitoreo de agua');
    expect(fixture.nativeElement.textContent).toContain('Consumo de hoy');
    expect(fixture.nativeElement.textContent).toContain('Ver alertas activas');
    expect(fixture.nativeElement.textContent).not.toContain('Water monitoring dashboard');
  });
});

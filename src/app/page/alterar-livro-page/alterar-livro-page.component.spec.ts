import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarLivroPageComponent } from './alterar-livro-page.component';

describe('AlterarLivroPageComponent', () => {
  let component: AlterarLivroPageComponent;
  let fixture: ComponentFixture<AlterarLivroPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarLivroPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarLivroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

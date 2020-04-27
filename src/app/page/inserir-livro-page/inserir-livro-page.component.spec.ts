import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirLivroPageComponent } from './inserir-livro-page.component';

describe('InserirLivroPageComponent', () => {
  let component: InserirLivroPageComponent;
  let fixture: ComponentFixture<InserirLivroPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirLivroPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirLivroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from './../../services/unique-id/unique-id.service';

describe(LikeWidgetComponent.name, () => {
    let fixture: ComponentFixture<LikeWidgetComponent> = null;

    // essa forma de uso do TestBed é mais segura de ser usada, pois independente do assembler\
    //no caso do Angular, atualmente WebPack, gera o componente inline
    beforeEach(async () => {
        // usando async/await para chamar o método assíncrono compileComponents
        await
            // cria o módulo para o teste
            TestBed
            // configura o modulo a cada teste
            .configureTestingModule({
                declarations: [LikeWidgetComponent],                // declara o componente deste módulo de teste
                providers: [UniqueIdService],                       // declara os serviços deste módulo de teste
                imports: [FontAwesomeModule]                        // declara as dependências deste módulo de teste
            }).compileComponents();

        // cria o objeto que embrulha o component. Este objeto é conhecido como Fixture
        fixture = TestBed.createComponent(LikeWidgetComponent);
    });

    // verifica se o TestBed conseguiu criar o componente corretamente
    it('Should create component', () => {
        const instance = fixture.componentInstance;
        expect(instance).toBeTruthy();
    });
});


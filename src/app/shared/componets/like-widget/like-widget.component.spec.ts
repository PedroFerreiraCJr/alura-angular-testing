import { LikeWidgetModule } from './like-widget.module';
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
                // essa é outra abordagem de teste, que simplifica o teste depois do componente ter sido desenvolvido
                imports: [LikeWidgetModule]                        // declara as dependências deste módulo de teste
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


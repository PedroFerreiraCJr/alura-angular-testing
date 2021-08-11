import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetModule } from './like-widget.module';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    let component: LikeWidgetComponent = null;

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
        component = fixture.componentInstance;
    });

    // verifica se o TestBed conseguiu criar o componente corretamente
    it('Should create component', () => {
        expect(component).toBeTruthy();
    });

    it('Should auto generate ID when id input property is missing', () => {
        // no ambiente de teste, o desenvolvedor é que é responsável por disparar a detecção de alterações no componente
        fixture.detectChanges();

        expect(component.id).toBeTruthy();
    });

    it('Should NOT generate ID when id input property is present', () => {
        const someId = 'app-someId';
        component.id = someId;
        // somente chama o detectChanges depois de configurar o input property
        fixture.detectChanges();

        expect(component.id).toBe(someId);
    });

    // teste de output property
    // a função done deve ser chamada para que o teste passe com sucesso
    it(`#${LikeWidgetComponent.prototype.like.name}
     should trigger emission when called`, done => {
        fixture.detectChanges();
        component.liked.subscribe(() => {
            expect(true).toBeTrue();
            done();
        });
        component.like();
    });
});

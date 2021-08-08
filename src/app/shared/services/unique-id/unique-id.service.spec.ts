import { UniqueIdService } from './unique-id.service';
/*
// Estrtutura de um teste de qualquer componente, service, diretiva
describe('O artefato que queremos testar', () => {
    it('Primeira condição que queremos testar', () => {

    });

    it('Segunda condição que queremos testar', () => {

    });
});
*/

/*
    Essas funções são disponibilizadas pela framework do Jasmine;
    Para executar os testes encritos com o Jasmine, é utilizado o framework Karma que\
    é um automatizador de execução criado pelo Google, e que já era usado pelo\
    Angular desde sua primeira versão, o AngularJS;
*/
describe(UniqueIdService.name, () => {
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
        const service  = new UniqueIdService();
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id).toContain('app-');
    });
});

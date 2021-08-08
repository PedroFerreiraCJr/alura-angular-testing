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
    Para executar os testes encritos com o Jasmine, é utilizado o framework Karma;
*/
describe('UniqueIdService', () => {
    it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {
        const service  = new UniqueIdService();
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id).toContain('app-');
    });
});

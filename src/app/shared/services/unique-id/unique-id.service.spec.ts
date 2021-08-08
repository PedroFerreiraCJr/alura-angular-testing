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
const APP_PREFIX = 'app';

describe(UniqueIdService.name, () => {
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
        const service  = new UniqueIdService();
        const id = service.generateUniqueIdWithPrefix(APP_PREFIX);
        expect(id.startsWith(`${APP_PREFIX}-`)).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, () => {
        const service = new UniqueIdService();
        const uuids = new Set();
        for (let i=0; i<50; i++) {
            uuids.add(service.generateUniqueIdWithPrefix(APP_PREFIX));
        }
        expect(uuids.size).toEqual(50);
    });

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generated IDs when called`, () => {
        const service = new UniqueIdService;
        service.generateUniqueIdWithPrefix(APP_PREFIX);
        expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
    });
});

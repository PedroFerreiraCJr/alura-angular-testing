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
    let service: UniqueIdService = null;
    
    /*
     Antes de cada teste declarado com a função it, este bloco de código será executado, obtendo assim, para cada teste\
     uma nova instância de UniqueIdService.
     Cada teste criado deve ser independente, não mantendo estado entre as execuções de cada it - caso de teste.
    */
    beforeEach(() => {
        service = new UniqueIdService();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
     should generate id when called with prefix`, () => {
        const id = service.generateUniqueIdWithPrefix(APP_PREFIX);
        expect(id.startsWith(`${APP_PREFIX}-`)).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
     should not generate duplicate IDs when called multiple times`, () => {
        const uuids = new Set();
        for (let i=0; i<50; i++) {
            uuids.add(service.generateUniqueIdWithPrefix(APP_PREFIX));
        }
        expect(uuids.size).toEqual(50);
    });

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
     should return the number of generated IDs when called`, () => {
        service.generateUniqueIdWithPrefix(APP_PREFIX);
        service.generateUniqueIdWithPrefix(APP_PREFIX);
        expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
     should throw when called with empty`, () => {
         const emptyValues = [null, undefined, ''];
         emptyValues.forEach((value) => {
            expect(() => {
                service.generateUniqueIdWithPrefix(value);
             })
             // o withContext deve ser utilizado quando estiver utilizando um loop para verificar várias expectativas
             .withContext(`Empty value - ${value}`).toThrow();
         });
     });
});

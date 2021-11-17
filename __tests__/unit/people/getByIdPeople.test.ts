import InvalidField from '@errors/InvalidField';
import NotFound from '@errors/NotFound';
import { Person } from '@interfaces/Person';
import PeopleService from '@services/PeopleService';
import factory from '../../utils/factorys/PeopleFactory';

describe('src :: api :: services :: people :: getById', () => {
  test('should get a person by ID', async () => {
    const personGenerated = await factory.create<Person>('People');
    if (personGenerated._id) {
      const person = await PeopleService.getById(personGenerated._id);
      expect(person._id).toEqual(personGenerated._id);
      expect(person.cpf).toBe(personGenerated.cpf);
      expect(person.data_nascimento).toEqual(personGenerated.data_nascimento);
      expect(person.email).toBe(personGenerated.email);
      expect(person.nome).toBe(personGenerated.nome);
      expect(person.habilitado).toBe(personGenerated.habilitado);
    }
  });

  test('should not get a person by ID and throw a InvalidField error', async () => {
    try {
      await PeopleService.getById('12');
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidField);
      expect((<InvalidField>e).description).toBe('Bad Request');
      expect((<InvalidField>e).name).toBe("The field 'id' is out of the standard format");
    }
  });

  test('should not get a person by ID and throw a NotFound error', async () => {
    try {
      await PeopleService.getById('6171508962f47a7a91938d30');
    } catch (e) {
      expect(e).toBeInstanceOf(NotFound);
      expect((<NotFound>e).description).toBe('Not Found');
      expect((<NotFound>e).name).toBe('Value 6171508962f47a7a91938d30 not found');
    }
  });
});

import Faker from 'faker';

export const  data = {

    Name: Faker.name.firstName() + ' '+  Faker.name.lastName(),
    userName: Faker.name.firstName(), 
    image: Faker.image.imageUrl(40, 40)
}


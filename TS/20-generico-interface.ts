interface IRepository<Entity, TypePrimarykey>{
    save(entity: Entity): Entity
    update(id: TypePrimarykey, entity: Entity): Entity
}


class Medic {
    constructor(public id: string, public name: string, public lastName: string) { }
}

// interface IRepositoryMedic {
//     save(medic: Medic): Medic
//     update(id: string, medic: Medic): Medic
// }

class MedicInfraestructure implements IRepository<Medic, string>/* IRepositoryMedic */ {
    save(medic: Medic): Medic {
        return medic
    }
    update(id: string, medic: Medic): Medic {
        return medic
    }

}

class User {
    constructor(public id: number, public username: string, public password: string) {

    }
}

// interface IrepositoryUser {
//     save(medic: User): User
//     update(id: string, user: User): User
// }

class UserInfraestructure implements IRepository<User, string> /* IrepositoryUser */ {

    save(user: User): User {
        return user
    }

    update(id: string, user: User): User {
        return user
    }
}

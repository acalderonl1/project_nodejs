class Medic {
    constructor(public id: string, public name: string, public lastName: string) { }
}

class User {
    constructor(public id: number, public username: string, public password: string) {

    }
}

abstract class AbstractEntity<Entity, TypePrimaryKey>{
    insert(entity: Entity){
        return entity
    }

    update(id: TypePrimaryKey, entity: Entity){
        return entity
    }
}

abstract class AbstractMedic{
    insert(medic: Medic): Medic{
        return medic
    }

    update(id: string, medic: Medic): Medic{
        return medic
    }
}


abstract class AbstracUser{
    insert(user: User): User{
        return user
    }

    update(id: string, user: User): User{
        return user
    }
}

class MedicInfraestructure extends AbstractEntity<Medic, string>{}

class UserInfraestructure extends AbstractEntity<User, string>{}
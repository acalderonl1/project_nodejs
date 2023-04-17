//Domain
abstract class BaseEntity{
    createAt: Date = new Date()
    updateAt?: Date 
    deleteAt?: Date
}

class User extends BaseEntity{
    constructor(
        public id: number,
        public username: string,
        public password: string
    ){super()}
}

class Medic extends BaseEntity{
    constructor(
        public id: string,
        public name: string,
        public lastName: string
        ){super()}
}

abstract class IRepository<Entity extends BaseEntity, TypePrimarykey> {
    save(entity: Entity): Entity{
        console.log(entity.createAt)
        return entity
    }
    update(id: TypePrimarykey, entity: Entity): Entity{
        return entity
    }
}

abstract class IRepositoryMedic extends IRepository<Medic, string>{
    report():void{}
}


//Infraestructure

class MedicInfraestructure extends IRepositoryMedic{
    save(medic: Medic): Medic {
        return medic
    }
    update(id: string, medic: Medic): Medic {
        return medic
    }

    report(){}

}

class UserInfraestructure extends IRepository<User, number>{

    save(user: User): User {
        return user
    }

    update(id: number, user: User): User {
        return user
    }
}

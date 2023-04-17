interface Icar{
    break(): void
    acceleration(): void
}

interface IHybrid{
    break(): void
    acceleration(): void
}

interface IHybrid2 extends IHybrid {
    hybrid(): void
}

class Toyota implements Icar{
    break(){
        console.log("break")
    }
    acceleration(){
        console.log("acceleration")
    }
}

class kia implements Icar{
    break(){
        console.log("break")
    }
    acceleration(){
        console.log("acceleration")
    }
}

class ToyotaPrius implements IHybrid2{
    break(){
        console.log("break")
    }
    
    acceleration(){
        console.log("acceleration")
    }

    hybrid(){
        console.log("hybrid")
    }
}
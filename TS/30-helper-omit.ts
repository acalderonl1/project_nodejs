interface ParametersRequest {
    headers: string
    body: string
}

interface IBody{
    body:{
        name:string
    }
}

function request(parameters: Omit<ParametersRequest, "body"> & IBody ){
    console.log(parameters.body.name)
}

const evento = {
    headers: "authirization bearer abcde",
    body: '{"name": "carla"}'
}

const parameters = {headers: evento.headers, body: JSON.parse(evento.body)}

request(parameters)
//console.log(parameters)
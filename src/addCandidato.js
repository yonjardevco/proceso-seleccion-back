const {v4} = require('uuid')
const AWS = require('aws-sdk');

const addCandidato = async (event) => {
 
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { nombre, cargo, apellido, correo, salario, asignarReferido, nombreReferido, apellidoReferido, correoReferido } = JSON.parse(event.body);
    const createFecha = new Date("December 17, 1995 03:24:00");
    const id = v4()

    const newCandidato = {
        id,
        createFecha,
        nombre,
        apellido,
        correo,
        salario,
        cargo,
        asignarReferido,
        nombreReferido,
        apellidoReferido,
        correoReferido,
        

    }

    await dynamodb.put({
        TableName: 'RegistroCandidatos',
        Item: newCandidato
    }).promise()

    return {
        status: 200,
        body: JSON.stringify(newCandidato)
    }
};

module.exports = {
    addCandidato,
};
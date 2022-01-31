const AWS = require('aws-sdk');

const updateCandidato = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;
    const  {nombre, apellido,cargo,salario,correo, asignarReferido, nombreReferido, apellidoReferido, correoReferido} = JSON.parse(event.body);

    await dynamodb.update({

        TableName:'RegistroCandidatos',
        Key: {id},
        UpdateExpression:'set nombre = :nombre, apellido = :apellido, cargo = :cargo, salario = :salario, correo = :correo, asignarReferido = :asignarReferido, nombreReferido = :nombreReferido, correoReferido = :correoReferido, apellidoReferido = :apellidoReferido',
                          
                            
        ExpressionAttributeValues:{
            ':nombre': nombre,
            ':apellido':apellido,
            ':cargo': cargo,
            ':salario': salario,
            ':correo': correo,
            ':asignarReferido': asignarReferido,
            ':nombreReferido': nombreReferido,
            ':apellidoReferido': apellidoReferido,
            ':correoReferido': correoReferido
            

        },
        ReturnValues: 'ALL_NEW'
    }).promise()

    return{
        status: 200,
        body: JSON.stringify({
            message: 'candidato actualizado correctamente'
        }),
    };
};

module.exports = {

    updateCandidato,
};
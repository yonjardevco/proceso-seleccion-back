const AWS = require('aws-sdk');

const deleteCandidato = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;
    

    await dynamodb.delete({
        TableName: 'RegistroCandidatos',
        Key: {
           id,
        },
    }).promise();

    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
        body: {
            message: 'candidato eliminado',

        },
    };
}

module.exports = {
    deleteCandidato
}
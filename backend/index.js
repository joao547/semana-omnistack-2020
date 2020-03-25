const express = require('express');

const app = express();

app.get('/', (request, reponse) => {
    return reponse.json({
        'evento': "semana omnistack",
        'name': "João Victor"
    });
});

app.listen(3333);
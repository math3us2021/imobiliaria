const express = require('express')
const res = require('express/lib/response')
const rotas = express.Router()

// array chave x valor

const cursosInfo = [ // declarou a variavel 
    {'curso':'Css', 'info':'Curso introdutório de CSS'},
    {'curso':'JavaScript', 'info':'Curso introdutório de JavaScript'},
    {'curso':'NodeJs', 'info':'Curso de Nofdejs'},
    {'curso':'Excel', 'info':'Curso introdutório de Excel'},
    {'curso':'React', 'info':'Curso introdutório de React'},
]

rotas.get('/', (req, res) => { // aqui é caso você só dê o barra, que significa raiz
    res.json({Olá: 'Rota raiz encontrada'}) //responde um texto
})

rotas.get('/:cursoid', (req, res)  => { // aqui, dá /Css no localhost e ele vai procurar na variavel cursosInfo
    const curso = req.params.cursoid //vai pegar os parametros que você colocar em cursoid (requerir)
    const cursoI = cursosInfo.find(i => i.curso == curso) //vai procurar na variavel cursosInfo o termo curso e comparar com a variavel curso
    if(!cursoI){ // vai fazer comparação em IF, se não achar nada, vai retornar 404, ! = diferente
        res.status(404).json( // status de erro, e mostra uma "string" dizendo que não encontrou
            {erro: 'Curso não encontrado', cursoPesquisado:curso} 
        )
    } else {
        res.status(200).json(cursoI) // status 200 (ok) é pq encontrou
    }
})
module.exports = rotas
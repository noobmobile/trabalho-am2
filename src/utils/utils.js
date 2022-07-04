const fs = require("fs");
const csv = require('csv-parse/sync')

function getAboutTeam(){
    return (
        [
            {
                name: "Luiz Eduardo",
                photo: "/images/eduardo.jpg",
                matricula: "509510",
                email: "luizedugx@alu.ufc.br"
            }, 
            {
                name: "Victor Mota",
                photo: "/images/victor.jpg",
                matricula: "509223",
                email: "victor2018mota@gmail.com"
            }
        ]
    )
}

function readText(fileName){
    const content = fs.readFileSync(fileName)
    const parsed = csv.parse(content, {columns: false, delimiter: '#'})

    return parsed[0]
}

module.exports = {
    getAboutTeam,
    readText
}
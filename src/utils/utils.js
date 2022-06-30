function getAboutTeam(){
    return (
        [
            {
                name: "Luiz Eduardo",
                photo: "https://i.imgur.com/pLgxs0G.jpg",
                matricula: "509510",
                email: "luizedugx@alu.ufc.br"
            }, 
            {
                name: "Victor Mota",
                photo: "https://i.imgur.com/DHzzoeP.jpg",
                matricula: "509223",
                email: "victor2018mota@gmail.com"
            }
        ]
    )
}

function readText(fileName){
    return (
        [
            "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet",
            "lorem ipsum dolor sit amet 2",
            "lorem ipsum dolor sit ame3t",
            "lorem i4psum dolor sit amet"
        ]
    )
}

module.exports = {
    getAboutTeam,
    readText
}
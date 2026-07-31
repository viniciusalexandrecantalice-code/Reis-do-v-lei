var HBInit = require("./hbinit.js");
console.log("Exportações do pacote:", Object.keys(Haxball));
console.log("Tipo do pacote:", typeof Haxball);
console.log("HBInit existe?", typeof Haxball.HBInit);
console.log("Default existe?", typeof Haxball.default);

const HBInit = Haxball.HBInit || Haxball.default;

if (HBInit) {
  HBInit({
    roomName: "Teste Render",
    maxPlayers: 12,
    public: false,   
    noPlayer: true,
    token: "SEU_TOKEN_AQUI"
  }).then(room => {
    console.log("=== SALA INICIADA ===");
    console.log("Tipo do room:", typeof room);
    console.log("O que tem dentro do room?:", Object.keys(room));
    console.log("room.setScoreLimit existe?", typeof room.setScoreLimit);
    console.log("room.setCustomStadium existe?", typeof room.setCustomStadium);
  }).catch(err => console.error("Erro ao iniciar:", err));
} else {
  console.log("Biblioteca não exportou HBInit.");
}

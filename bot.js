const HBInit = require("haxball.js").HBInit || require("haxball.js").default || require("haxball.js");

HBInit({
  roomName: "𝟕 Rayzers 2v2",
  maxPlayers: 12,
  public: false,   
  noPlayer: true,
  token: "thr1.AAAAAGps6wLBSb-qr8KVNg.Z19enhy-UHE" // COLOQUE SEU TOKEN AQUI
}).then(room => {

  var BAZINGA_MAP = `{"name":"Futsal x3 GLH ; By Bazinga! from HaxMaps","width":648,"height":270,"spawnDistance":350,"bg":{"type":"hockey","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":-80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","pos":[700,80]},{"x":550,"y":240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":550,"y":-80,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-557.5,"y":80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80]},{"x":-557.5,"y":240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-557.5,"y":-240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-557.5,"y":-80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80]},{"x":557.5,"y":-240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":557.5,"y":-80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80]},{"x":557.5,"y":80,"bCoef":0.1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80]},{"x":557.5,"y":240,"bCoef":2,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":0,"y":-80,"bCoef":0.1,"trait":"line"},{"x":0,"y":80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":550,"y":80,"bCoef":0.1,"trait":"line"},{"x":-240,"y":224,"bCoef":0.1,"trait":"line"},{"x":-240,"y":256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":224,"bCoef":0.1,"trait":"line"},{"x":-120,"y":256,"bCoef":0.1,"trait":"line"},{"x":240,"y":224,"bCoef":0.1,"trait":"line"},{"x":240,"y":256,"bCoef":0.1,"trait":"line"},{"x":120,"y":224,"bCoef":0.1,"trait":"line"},{"x":120,"y":256,"bCoef":0.1,"trait":"line"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line"},{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90},{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90},{"x":-556,"y":123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line"},{"x":556,"y":123,"bCoef":0.1,"trait":"line"},{"x":575,"y":123,"bCoef":0.1,"trait":"line"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":381,"y":240,"bCoef":0.1,"trait":"line"},{"x":381,"y":256,"bCoef":0.1,"trait":"line"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90},{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"F8F8F8","cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"F8F8F8","cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":0},{"v0":48,"v1":49,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-550},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":550},{"v0":52,"v1":53,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":54,"v1":55,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":56,"v1":57,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":58,"v1":59,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":60,"v1":61,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":62,"v1":63,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":65,"v1":64,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":66,"v1":67,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":63,"v1":67,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":69,"v1":68,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":70,"v1":71,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":72,"v1":73,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":80,"v1":81,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":82,"v1":83,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":85,"v1":84,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":87,"v1":86,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":88,"v1":89,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":90,"v1":91,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":95,"v1":94,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":94,"v1":95,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":97,"v1":96,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":96,"v1":97,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":99,"v1":98,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":98,"v1":99,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":101,"v1":100,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":100,"v1":101,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":103,"v1":102,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":102,"v1":103,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":105,"v1":104,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":104,"v1":105,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":107,"v1":106,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":106,"v1":107,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":109,"v1":108,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":108,"v1":109,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":111,"v1":110,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":110,"v1":111,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":113,"v1":112,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":112,"v1":113,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":115,"v1":114,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":114,"v1":115,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":117,"v1":116,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":116,"v1":117,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":119,"v1":118,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":118,"v1":119,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":121,"v1":120,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":120,"v1":121,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":123,"v1":122,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":122,"v1":123,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":125,"v1":124,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":124,"v1":125,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5}],"goals":[{"p0":[-556.3,-80],"p1":[-556.3,80],"team":"red"},{"p0":[556.3,80],"p1":[556.3,-80],"team":"blue"}],"discs":[{"radius":5,"pos":[-550,80],"color":"6666CC","trait":"goalPost","y":80},{"radius":5,"pos":[-550,-80],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":5,"pos":[550,80],"color":"6666CC","trait":"goalPost","y":80},{"radius":5,"pos":[550,-80],"color":"6666CC","trait":"goalPost","y":-80},{"radius":3,"invMass":0,"pos":[-550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-642,"bCoef":0.1},{"normal":[-1,0],"dist":-644,"bCoef":0.1},{"normal":[1,0],"dist":-642,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0},{"normal":[-1,0],"dist":-643,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.5},"ballPhysics":{"radius":6.3,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFCC00"}}`;

  var TRAINING_MAP = `{"name":"Quadrado de Treino do Tr7mmm from HaxMaps","width":648,"height":270,"spawnDistance":170,"canBeStored":false,"bg":{"type":"none","width":210,"height":200,"color":"4F4F4F","cornerRadius":0,"kickOffRadius":80},"vertexes":[{"x":105,"y":-102,"cMask":["ball"],"trait":"ballArea","vis":true,"color":"FFFFFF"},{"x":105,"y":101,"cMask":["ball"],"trait":"ballArea","vis":true,"color":"FFFFFF"},{"x":-104,"y":-102,"cMask":["ball"],"trait":"ballArea","vis":true,"color":"FFFFFF"},{"x":-103,"y":101,"cMask":["ball"],"trait":"ballArea","vis":true,"color":"FFFFFF"}],"segments":[{"v0":0,"v1":1,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"ballArea"},{"v0":0,"v1":2,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"ballArea"},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"ballArea"},{"v0":3,"v1":1,"vis":true,"color":"FFFFFF","cMask":["ball"],"trait":"ballArea"}],"goals":[],"discs":[],"planes":[{"normal":[-1,0],"dist":-105,"bCoef":1,"cMask":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[-1,0],"dist":-105,"canvas_rect":[-648,-270,648,270],"a":[105,-270],"b":[105,270]}}},{"normal":[0,1],"dist":-102,"bCoef":1,"cMask":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-102,"canvas_rect":[-648,-270,648,270],"a":[-648,-102],"b":[648,-102]}}},{"normal":[1,0],"dist":-104,"bCoef":1,"cMask":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[1,0],"dist":-104,"canvas_rect":[-648,-270,648,270],"a":[-104,-270],"b":[-104,270]}}},{"normal":[0,-1],"dist":-101,"bCoef":1,"cMask":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-101,"canvas_rect":[-648,-270,648,270],"a":[-648,101],"b":[648,101]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.5},"ballPhysics":{"radius":6.3,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFCC00"},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[]}`;

  var ADMIN_PASSWORD = "777";
  var MAX_PER_TEAM = 2;
  var TIME_LIMIT_SEC = 5 * 60;   
  var AFK_LIMIT_SEC = 20;        
  var AFK_MOVE_THRESHOLD = 3;    

  var GK_ZONE_RED_X = -390;   
  var GK_ZONE_BLUE_X = 390;   
  var GK_ZONE_Y_LIMIT = 200;  

  var ELO_START = 1000;       
  var ELO_WIN = 25;           
  var ELO_LOSS = 20;          
  var SALDO_WIN = 100;        
  var SALDO_GOAL = 10;        
  var KICK_HISTORY_MS = 5000; 

  var admins = {};       
  var playerState = {};  
  var overtime = false;
  var gameRunning = false;
  var gamePaused = false;

  var playerAuth = {};   
  var stats = {};        
  var kickHistory = [];  

  var currentMap = "bazinga"; 

  room.setScoreLimit(0);  
  room.setTimeLimit(0);   
  room.setCustomStadium(BAZINGA_MAP); 

  function findByName(name) {
    return room.getPlayerList().find(function (p) {
      return p.name.toLowerCase() === name.toLowerCase();
    });
  }

  function isTeamFull(team) {
    var count = room.getPlayerList().filter(function (p) { return p.team === team; }).length;
    return count >= MAX_PER_TEAM;
  }

  function isStrict2v2() {
    var players = room.getPlayerList().filter(function (p) { return p.team === 1 || p.team === 2; });
    var redCount = players.filter(function (p) { return p.team === 1; }).length;
    var blueCount = players.filter(function (p) { return p.team === 2; }).length;
    return redCount === 2 && blueCount === 2;
  }

  function updateRoomSetup() {
    var players = room.getPlayerList();
    var totalPlayers = players.length;
    
    if (totalPlayers <= 1) {
      if (currentMap !== "training") {
        room.stopGame();
        room.setCustomStadium(TRAINING_MAP);
        currentMap = "training";
      }
      MAX_PER_TEAM = 1; 
      
      if (totalPlayers === 1) {
        var p = players[0];
        if (p.team !== 1) {
          room.setPlayerTeam(p.id, 1);
        }
        setTimeout(() => { if (!gameRunning) room.startGame(); }, 1000);
      } else {
        if (gameRunning) room.stopGame();
      }
    } else {
      if (currentMap !== "bazinga") {
        room.stopGame();
        room.setCustomStadium(BAZINGA_MAP);
        currentMap = "bazinga";
      }
      
      if (totalPlayers === 2 || totalPlayers === 3) {
        if (MAX_PER_TEAM !== 1) {
          MAX_PER_TEAM = 1;
          room.sendAnnouncement("⚔️ 2 jogadores! Modo 1v1 ativado (Máx 1 por time).", null, 0x00CFFF, "bold", 2);
        }
      } else if (totalPlayers >= 4) {
        if (MAX_PER_TEAM !== 2) {
          MAX_PER_TEAM = 2;
          room.sendAnnouncement("⚽ 4+ jogadores! Modo 2v2 ativado (Máx 2 por time).", null, 0x00CFFF, "bold", 2);
        }
      }
      
      var redCount = 0;
      var blueCount = 0;
      players.forEach(p => {
        if (p.team === 1) redCount++;
        if (p.team === 2) blueCount++;
      });
      
      players.forEach(p => {
        if (p.team === 0) {
          if (redCount < MAX_PER_TEAM && redCount <= blueCount) {
            room.setPlayerTeam(p.id, 1);
            redCount++;
          } else if (blueCount < MAX_PER_TEAM) {
            room.setPlayerTeam(p.id, 2);
            blueCount++;
          }
        }
      });

      if (redCount > 0 && blueCount > 0) {
        setTimeout(() => { if (!gameRunning) room.startGame(); }, 1000);
      }
    }
  }

  function sendHelp(playerId) {
    room.sendAnnouncement(
      "📖 Comandos disponíveis:\n" +
      "!ajuda - mostra essa lista\n" +
      "!afk - avisa que você vai ficar parado (evita o AFK-kick)\n" +
      "!stats - mostra o placar e tempo atual\n" +
      "!me - mostra suas estatísticas (gols, elo, saldo etc)\n" +
      "t <mensagem> - chat privado do time (só seu time vê)\n" +
      ".bb - sair da sala (leva kick)",
      playerId, 0xFFD700, "bold", 1
    );
  }

  function defaultStats() {
    return { gols: 0, golsContra: 0, assistencias: 0, defesas: 0, vitorias: 0, derrotas: 0, elo: ELO_START, saldo: 0, winStreak: 0, partidas: 0 };
  }

  function loadStats(auth) {
    try {
      var raw = localStorage.getItem("futsal2v2_" + auth);
      return raw ? JSON.parse(raw) : defaultStats();
    } catch (e) {
      return defaultStats(); 
    }
  }

  function saveStats(auth) {
    if (!stats[auth]) return;
    try { localStorage.setItem("futsal2v2_" + auth, JSON.stringify(stats[auth])); } catch (e) {}
  }

  var ELO_TIERS = [
    { name: "Bronze", min: 0 },
    { name: "Prata", min: 1000 },
    { name: "Ouro", min: 1300 },
    { name: "Platina", min: 1600 },
    { name: "Diamante", min: 2000 },
    { name: "Mestre", min: 2500 },
    { name: "Lenda", min: 3000 }
  ];

  function getTierName(elo) {
    var tier = ELO_TIERS[0].name;
    for (var i = 0; i < ELO_TIERS.length; i++) {
      if (elo >= ELO_TIERS[i].min) tier = ELO_TIERS[i].name;
    }
    return tier;
  }

  function sendMe(player) {
    var auth = playerAuth[player.id];
    var s = stats[auth] || defaultStats();
    var winRate = s.partidas > 0 ? Math.round((s.vitorias / s.partidas) * 100) : 0;
    room.sendAnnouncement(
      "📊 Estatísticas de " + player.name + ":\n" +
      "⚽ Gols: " + s.gols + "  |  🥅 Gols sofridos: " + s.golsContra + "  |  🎯 Assistências: " + s.assistencias + "  |  🧤 Defesas: " + s.defesas + "  |  🔥 Win Rate: " + winRate + "%\n" +
      "🏆 Elo: " + getTierName(s.elo) + " (" + s.elo + ")  |  💰 Saldo: H$" + s.saldo + "  |  🥇 Vitórias: " + s.vitorias + "  |  💀 Derrotas: " + s.derrotas + "  |  👑 Win Streak: " + s.winStreak,
      player.id, 0x00CFFF, "bold", 1
    );
  }

  function sendAdminHelp(playerId) {
    room.sendAnnouncement(
      "👑 Comandos de ADM:\n" +
      "!kick <nome> - expulsa temporariamente\n" +
      "!ban <nome> - bane o jogador\n" +
      "!clearbans - limpa a lista de banidos\n" +
      "!mute <nome> / !unmute <nome> - silencia/libera o chat de alguém\n" +
      "!restart - reinicia a partida\n" +
      "!pause - pausa/despausa o jogo\n" +
      "!adm <nome> - promove outro jogador a admin",
      playerId, 0xFF8800, "bold", 1
    );
  }

  room.onPlayerJoin = function (player) {
    playerState[player.id] = {
      lastX: null, lastY: null, lastMoveTime: Date.now(),
      isGK: false, muted: false, afkWarned: false,
      originalName: player.name
    };

    var auth = player.auth || ("sessao_" + player.id);
    playerAuth[player.id] = auth;
    if (!stats[auth]) stats[auth] = loadStats(auth);

    room.sendAnnouncement(
      "👋 Bem-vindo(a), " + player.name + "! Sala de Futsal.\n" +
      "Digite !ajuda para ver os comandos. Use !me pra ver suas estatísticas.",
      player.id, 0x00FF7F, "bold", 2
    );
    
    updateRoomSetup();
  };

  room.onPlayerLeave = function (player) {
    var auth = playerAuth[player.id];
    if (auth) saveStats(auth);
    delete playerAuth[player.id];
    delete playerState[player.id];
    delete admins[player.id];

    updateRoomSetup();
  };

  room.onPlayerTeamChange = function (changedPlayer) {
    if (changedPlayer.team === 0) return;
    var count = room.getPlayerList().filter(function (p) { return p.team === changedPlayer.team; }).length;
    if (count > MAX_PER_TEAM) {
      room.setPlayerTeam(changedPlayer.id, 0);
      room.sendAnnouncement("⚠️ Esse time já está cheio (máx. " + MAX_PER_TEAM + " jogadores).", changedPlayer.id, 0xFF4444, "bold", 2);
    }
  };

  room.onPlayerChat = function (player, message) {
    var msg = message.trim();
    var st = playerState[player.id];

    if (st) st.lastMoveTime = Date.now();

    if (msg === ".bb") {
      room.kickPlayer(player.id, "Você pediu para sair. Até mais!", false);
      return false;
    }

    if (msg.startsWith("t ") || msg === "t") {
      if (player.team === 0) {
        room.sendAnnouncement("⚠️ Você precisa estar em um time para usar o chat do time.", player.id, 0xFF4444);
        return false;
      }
      var teamMsg = msg.substring(2).trim();
      if (teamMsg.length > 0) {
        var teamColor = player.team === 1 ? 0xFF4444 : 0x4444FF;
        var teamName = player.team === 1 ? "[Vermelho]" : "[Azul]";
        room.getPlayerList().forEach(p => {
          if (p.team === player.team || admins[p.id]) {
            room.sendAnnouncement("🔒 " + teamName + " " + player.name + ": " + teamMsg, p.id, teamColor, "bold", 1);
          }
        });
      }
      return false;
    }

    if (msg === ADMIN_PASSWORD) {
      admins[player.id] = true;
      room.setPlayerAdmin(player.id, true);
      room.sendAnnouncement("👑 Você agora é administrador(a).", player.id, 0xFFD700, "bold", 2);
      return false;
    }

    if (msg === "!ajuda" || msg === ".ajuda") {
      sendHelp(player.id);
      if (admins[player.id]) sendAdminHelp(player.id);
      return false;
    }

    if (msg === "!stats") {
      var scores = room.getScores();
      if (scores) {
        room.sendAnnouncement("🔴 " + scores.red + " x " + scores.blue + " 🔵  (" + Math.floor(scores.time) + "s)" + (overtime ? " — GOL DE OURO ⏱️" : ""), player.id);
      } else {
        room.sendAnnouncement("A partida ainda não começou.", player.id);
      }
      return false;
    }

    if (msg === "!me" || msg === ".me") {
      sendMe(player);
      return false;
    }

    if (msg === "!afk") {
      if (st) { st.afkWarned = false; st.lastMoveTime = Date.now(); }
      room.sendAnnouncement("💤 " + player.name + " avisou que vai ficar parado (AFK momentâneo).", null, 0x999999);
      return false;
    }

    if (admins[player.id]) {
      var parts = msg.split(" ");
      var cmd = parts[0];
      var targetName = parts.slice(1).join(" ");
      var t;

      if (cmd === "!kick" && targetName) {
        t = findByName(targetName);
        if (t) room.kickPlayer(t.id, "Removido por um administrador", false);
        return false;
      }
      if (cmd === "!ban" && targetName) {
        t = findByName(targetName);
        if (t) room.kickPlayer(t.id, "Banido por um administrador", true);
        return false;
      }
      if (cmd === "!clearbans") {
        room.clearBans();
        room.sendAnnouncement("🧹 Lista de banidos limpa.", null, 0xFFD700);
        return false;
      }
      if (cmd === "!mute" && targetName) {
        t = findByName(targetName);
        if (t) { playerState[t.id].muted = true; room.sendAnnouncement(t.name + " foi silenciado.", null, 0xFF4444); }
        return false;
      }
      if (cmd === "!unmute" && targetName) {
        t = findByName(targetName);
        if (t) { playerState[t.id].muted = false; room.sendAnnouncement(t.name + " voltou a poder falar.", null, 0x00FF7F); }
        return false;
      }
      if (cmd === "!restart") {
        room.stopGame();
        room.startGame();
        return false;
      }
      if (cmd === "!pause") {
        gamePaused = !gamePaused;
        room.pauseGame(gamePaused);
        return false;
      }
      if (cmd === "!adm" && targetName) {
        t = findByName(targetName);
        if (t) { 
          admins[t.id] = true; 
          room.setPlayerAdmin(t.id, true); 
          room.sendAnnouncement("👑 Você agora é administrador(a).", t.id, 0xFFD700); 
        }
        return false;
      }
    }

    if (st && !st.muted) {
      var auth = playerAuth[player.id];
      var s = stats[auth] || defaultStats();
      var tier = getTierName(s.elo);
      
      var tagPrefix = "";
      if (admins[player.id]) {
        tagPrefix += "(OWNER) ";
      }
      tagPrefix += "(" + tier + ") ";
      
      var cleanName = st.originalName || player.name;
      
      var chatColor = 0xFFFFFF; 
      if (player.team === 1) chatColor = 0xFF8888; 
      if (player.team === 2) chatColor = 0x8888FF; 

      room.sendAnnouncement(tagPrefix + cleanName + ": " + message, null, chatColor, "normal", 1);
    }

    return false; 
  };

  room.onGameStart = function () {
    gameRunning = true;
    overtime = false;
    kickHistory = [];
  };

  room.onGameStop = function () {
    gameRunning = false;
  };

  room.onPlayerBallKick = function (player) {
    var auth = playerAuth[player.id];
    if (!auth) return;
    kickHistory.unshift({ auth: auth, id: player.id, name: player.name, team: player.team, time: Date.now() });
    if (kickHistory.length > 6) kickHistory.length = 6;

    var st = playerState[player.id];
    if (st && st.isGK && isStrict2v2()) {
      if (!stats[auth]) stats[auth] = defaultStats();
      stats[auth].defesas++;
    }
  };

  function endMatch(winningTeam) {
    gameRunning = false;
    var players = room.getPlayerList().filter(function (p) { return p.team === 1 || p.team === 2; });
    var validMatch = isStrict2v2();

    players.forEach(function (p) {
      var auth = playerAuth[p.id];
      if (!auth) return;
      if (!stats[auth]) stats[auth] = defaultStats();
      var s = stats[auth];

      if (!validMatch) return;

      s.partidas++;
      var won = p.team === winningTeam;
      if (won) {
        s.vitorias++;
        s.elo += ELO_WIN;
        s.saldo += SALDO_WIN;
        s.winStreak++;
      } else {
        s.derrotas++;
        s.elo = Math.max(0, s.elo - ELO_LOSS);
        s.winStreak = 0;
      }
      saveStats(auth);
    });

    var scores = room.getScores();
    var placar = scores ? (scores.red + " x " + scores.blue) : "";
    room.sendAnnouncement(
      (winningTeam === 1 ? "🔴 Vermelho" : "🔵 Azul") + " venceu a partida! (" + placar + ")" +
      (validMatch ? "" : " — elo não contabilizado (partida incompleta)"),
      null, 0xFFD700, "bold", 2
    );
    room.stopGame();
  }

  room.onTeamGoal = function (team) {
    if (isStrict2v2()) {
      var scorer = kickHistory.find(function (k) { return k.team === team; });
      if (scorer && stats[scorer.auth]) {
        stats[scorer.auth].gols++;
        stats[scorer.auth].saldo += SALDO_GOAL;

        var assist = kickHistory.find(function (k) {
          return k.team === team && k.auth !== scorer.auth && (scorer.time - k.time) <= KICK_HISTORY_MS;
        });
        if (assist && stats[assist.auth]) stats[assist.auth].assistencias++;
      }

      var concedingTeam = team === 1 ? 2 : 1;
      room.getPlayerList().forEach(function (p) {
        if (p.team !== concedingTeam) return;
        var auth = playerAuth[p.id];
        if (auth && stats[auth]) stats[auth].golsContra++;
      });
    }

    if (overtime) {
      room.sendAnnouncement("🏆 GOL DE OURO! Fim de jogo.", null, 0xFFD700, "bold", 2);
      endMatch(team);
    }
  };

  room.onGameTick = function () {
    if (!gameRunning || gamePaused) return;

    var scores = room.getScores();
    var players = room.getPlayerList();

    if (scores && !overtime && scores.time >= TIME_LIMIT_SEC) {
      if (scores.red !== scores.blue) {
        endMatch(scores.red > scores.blue ? 1 : 2);
      } else {
        overtime = true;
        room.sendAnnouncement("⏱️ Tempo normal acabou! Empate — próximo gol decide (GOL DE OURO) 🥅", null, 0xFF8800, "bold", 2);
      }
    }

    var now = Date.now();
    players.forEach(function (p) {
      if (p.team === 0 || !p.position) return;
      var st = playerState[p.id];
      if (!st) return;

      var inGkZone = false;
      if (p.team === 1 && p.position.x <= GK_ZONE_RED_X && Math.abs(p.position.y) <= GK_ZONE_Y_LIMIT) inGkZone = true;
      if (p.team === 2 && p.position.x >= GK_ZONE_BLUE_X && Math.abs(p.position.y) <= GK_ZONE_Y_LIMIT) inGkZone = true;

      if (inGkZone && !st.isGK) {
        st.isGK = true;
        room.setPlayerAvatar(p.id, "🧤");
      } else if (!inGkZone && st.isGK) {
        st.isGK = false;
        room.setPlayerAvatar(p.id, null);
      }

      if (st.lastX === null) {
        st.lastX = p.position.x; st.lastY = p.position.y; st.lastMoveTime = now;
        return;
      }
      var moved = Math.abs(p.position.x - st.lastX) + Math.abs(p.position.y - st.lastY) > AFK_MOVE_THRESHOLD;
      if (moved) {
        st.lastX = p.position.x; st.lastY = p.position.y; st.lastMoveTime = now;
      } else if ((now - st.lastMoveTime) / 1000 > AFK_LIMIT_SEC) {
        room.setPlayerTeam(p.id, 0);
        room.sendAnnouncement("💤 " + p.name + " foi movido pra espectador por inatividade (AFK).", null, 0xFF4444, "bold", 1);
        st.lastMoveTime = now;
        st.isGK = false;
        room.setPlayerAvatar(p.id, null);
      }
    });
  };

  console.log("Sala 𝟕 Rayzers 2v2 online com sucesso!");

}).catch(err => console.error("Erro ao iniciar a sala:", err));

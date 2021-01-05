var sachumon_name = ["Sachumon", "Sachinovich Graphitius Iaroslav", "Sachino Pablo Escobar", "Sachuquedas Filipino Ramos", "Sachudananda", "Sachinese Inping", "Sachivitch Iustchiwitz", "Sache De Auditore", "Sachiver Hamilton", "potato"]

var rand = Math.floor(Math.random() * 9);

var sachumon_todaysName = sachumon_name[rand];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white");
  fill("black");
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Today's name: " + sachumon_todaysName, windowWidth / 2, windowHeight / 2);
}
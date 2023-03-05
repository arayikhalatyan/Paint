function mouseDragged() {
    //noStroke();
    //fill(random(0, 255), random(0, 255), random(0, 255));
    //ellipse(mouseX, mouseY, random(0, 20), random(0, 20));

    socket.emit("newCords", [mouseX,mouseY]);
}
function setup() {
    createCanvas(1500, 800);
    background('#acacac');
}


function main() {
    socket = io.connect('http://localhost:3000');



    function drawCircle(data) {
        noStroke();
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(data[0], data[1], random(0, 20), random(0, 20));
    }

    socket.on("staci kordinatnerd!", drawCircle);
}

window.onload = main;

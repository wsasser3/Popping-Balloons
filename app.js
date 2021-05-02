const container = document.querySelector('.container');



let balloons = [
    'red', 'blue', null, 'yellow',
    'red', 'pink', 'green', 'purple',
    'red', 'blue', 'black', 'yellow',
    'red', 'blue', 'green', 'yellow',
    'brown', 'blue', 'green', 'yellow',
];

function popBalloon(pos){
    balloons[pos] = null;
    renderBalloon();
}
function renderBalloon(){
    let content="";
    balloons.forEach(function(color, position){
        console.log("Loop " +position+" "+color, content);
        let visible  ="visibled";
        if(color === null) visible = 'popped';
        content = content + `<div class ="balloon ${visible}" 
                                style ="background: ${color}"
                                onClick ="popBalloon(${position});"
                                ></div>`
    });
    container.innerHTML = content;
}
renderBalloon();


console.log("Hello Console");
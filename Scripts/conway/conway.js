Array.prototype.cindex = function(index){
    var circularIndex = index;
    if (index == -1) circularIndex = this.length - 1;
    if (index > this.length - 1) circularIndex = index % (this.length);

    return this[circularIndex];
};

var conway = {};
conway.THEMES = {
    Light: {},
    Dark: {}
};
conway.ACCENT_COLORS = {
    Blue: "#1BA1E2",
    Brown: "#A05000",
    Green: "#339933",
    Pink: "#E671B8",
    Purple: "#A200FF",
    Red: "#E51400",
    Teal: "#00ABA9",
    Lime: "#A2C139",
    Magenta: "#D80073",
    Mango: "#F09609",
    NokiaBlue: "#1080DD",
    OrangeUK: "#FF6600"
};
conway.GOSPER_GLIDER_GUN = [
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,1,0,1,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,0,0],

    [0,0,0,0,0,0,0,0,0,0, 0,0,1,0,0,0,1,0,0,0, 0,1,1,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,0,0],
    [0,1,1,0,0,0,0,0,0,0, 0,1,0,0,0,0,0,1,0,0, 0,1,1,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,1,1,0,0,0,0,0,0,0, 0,1,0,0,0,1,0,1,1,0, 0,0,0,1,0,1,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,1,0,0,0,0,0,1,0,0, 0,0,0,0,0,1,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,1,0,0,0,1,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,1,1,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],

    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0]
];
conway.DEFAULT = [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
];

conway.game = function (initialData) {

    var cellSize = 20;
    var running = false;

    var frame = 0;
    var data = initialData, oldData = [];
    var gameHeight = data.length, gameWidth = data[0].length;
    var context;

    function getNeighbours(i, j) {
        var one     = oldData.cindex(i - 1).cindex(j - 1);
        var two     = oldData.cindex(i - 1).cindex(j);
        var three   = oldData.cindex(i - 1).cindex(j + 1);

        var four    = oldData.cindex(i).cindex(j - 1);
        var five    = oldData.cindex(i).cindex(j + 1);

        var six     = oldData.cindex(i + 1).cindex(j - 1);
        var seven   = oldData.cindex(i + 1).cindex(j);
        var eight   = oldData.cindex(i + 1).cindex(j + 1);

        return [one, two, three, four, five, six, seven, eight];
    }

    function computeCellValue(i, j) {
        var currentValue = oldData[i][j];
        var neighbours = getNeighbours(i, j);
        var sum = 0;
        for (var k = 0; k < neighbours.length; k++) {
            sum += neighbours[k];
        }

        if(currentValue == 1)
        {
            if(sum < 2 ) return 0;
            if(sum == 2 || sum == 3) return 1;
            if(sum > 3) return 0;
        }

        if (currentValue == 0)
        {
            return (sum == 3) ? 1 : 0;
        }
    }

    function updateGameData() {

        for (var i = 0; i < gameHeight; i++){
            oldData[i] = [];
            for(var j = 0; j < gameWidth; j++)
                oldData[i][j] = data[i][j];
        }

        for (var i = 0; i < gameHeight; i++) {
            for (var j = 0; j < gameWidth; j++) data[i][j] = computeCellValue(i, j);
        }
    }

    function drawGameState() {
        for (var i = 0; i < gameHeight; i++) {
            for (var j = 0; j < gameWidth; j++) {
                var cell = data[i][j];
                if (cell == 1) {
                    paintAliveCell(j, i);
                }
            }
        }
    }

    function resetCanvas() {
        context.fillStyle = "white";
        context.fillRect(0, 0, gameWidth * cellSize, gameHeight * cellSize);
    }

    function drawGrid() {

        var height = gameHeight * cellSize, width = gameWidth * cellSize;
        context.fillStyle = "gray";

        for(var i = 0; i <= height; i = i + cellSize){
            context.beginPath();
            context.lineWidth = 0.1;
            context.moveTo(0, i);
            context.lineTo(width, i);
            context.stroke();
        }

        for(var i = 0; i <= width; i = i + cellSize){
            context.beginPath();
            context.lineWidth = 0.1;
            context.moveTo(i, 0);
            context.lineTo(i, height);
            context.stroke();
        }
    }

    function paintAliveCell(x, y) {
        context.fillStyle = conway.ACCENT_COLORS.Mango;
        context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
    }

    function nextFrame() {
        frame++;
        updateGameData();

        resetCanvas();
        drawGameState();
        drawGrid()
    }

    return {

        CurrentFrame: data,

        initialize: function (canvas) {
            canvas.width = gameWidth * cellSize;
            canvas.height = gameHeight * cellSize;

            context = canvas.getContext("2d");

            resetCanvas();
            drawGameState();
            drawGrid();
        },
        pause: function () {
            window.clearInterval(running);
        },
        start: function () {
            running = window.setInterval(nextFrame, 45);
        },
        next: function(){
            nextFrame();
        },
        tick: function()
        {
            updateGameData();
        },
        restart: function () {
            return;
        }
    };
};

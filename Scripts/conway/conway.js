Array.prototype.cindex = function(index){
    var circularIndex = index;
    if (index == -1) circularIndex = this.length - 1;
    if (index > this.length - 1) circularIndex = index % (this.length);

    return this[circularIndex];
}

var conway = (function () {

    var cellSize = 10;
    var gameHeight = 11, gameWidth = 38;

    var frame = 0;
    var data = [], oldData = [];
    var context;

    function setAliveCellAt(i, j) {
        data[i][j] = 1;
    }

    function getNeighbours(i, j) {
        var one = data.cindex(i - 1).cindex(j - 1);
        var two = data.cindex(i).cindex(j - 1);
        var three = data.cindex(i + 1).cindex(j - 1);

        var four = data.cindex(i - 1).cindex(j);
        var five = data.cindex(i + 1).cindex(j);

        var six = data.cindex(i - 1).cindex(j - 1);
        var seven = data.cindex(i).cindex(j - 1);
        var eight = data.cindex(i + 1).cindex(j - 1);

        return [one, two, three, four, five, six, seven, eight];
    };

    function computeCellValue(i, j) {
        var currentValue = data[i][j];
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
            if(sum == 3) return 1;
        }
    }

    function updateGameData() {
        oldData = data;
        for (var i = 0; i < gameWidth; i++) {
            for (var j = 0; j < gameHeight; j++) {
                data[i][j] = computeCellValue(i, j);
            }
        }
    };

    function draw() {
        for (var i = 0; i < gameHeight; i++) {
            for (var j = 0; j < gameWidth; j++) {
                var cell = data[i][j];
                if (cell == 1) {
                    paintAliveCell(j, i);
                } else {
                    paintDeadCell(j, i);
                }
            }
        }
    }

    function paintAliveCell(x, y) {
        context.fillStyle = conway.AccentColors.Mango;
        context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
    }

    function paintDeadCell(x, y) {
        context.fillStyle = "gray";
        context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
    }

    function tick() {
        frame++;
        updateGameData();
        draw();
    }

    return {
        initialize: function (canvas) {
            context = canvas.getContext("2d");

            for (var i = 0; i < gameHeight; i++) {
                data[i] = [];
                for (var j = 0; j < gameWidth; j++) {
                    data[i][j] = 0;
                }
            }

            for (var i = 0; i < conway.initialData.length; i++) {
                var row = conway.initialData[i];
                for (var j = 0; j < row.length; j++) {
                    if(row[j] == 1) setAliveCellAt(i, j);
                }
            }

            draw();
        },
        pause: function () {
            return;
//            window.clearTimeout(timer);
        },
        start: function () {
            return;
//            timer = window.setInterval(tick, 15);
        },
        next: function(){
            tick();
        },
        restart: function () {
            return;
// timer = window.setInterval(tick, 15);
        }
    };
})();

conway.Themes = {
    Light: "",
    Dark: ""
};

conway.AccentColors = {
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

conway.initialData = [
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,1,0,0,0,0, 0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,1,0,1,0,0,0,0, 0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,1,1,0,0,0,0,0, 0,1,1,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,1,0,0,0,1,0,0,0, 0,1,1,0,0,0,0,0,0,0, 0,0,0,0,0,1,1,0],
    [0,1,1,0,0,0,0,0,0,0, 0,1,0,0,0,0,0,1,0,0, 0,1,1,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
    [0,1,1,0,0,0,0,0,0,0, 0,1,0,0,0,1,0,1,1,0, 0,0,0,1,0,1,0,0,0,0, 0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,1,0,0,0,0,0,1,0,0, 0,0,0,0,0,1,0,0,0,0, 0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,1,0,0,0,1,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0, 0,0,0,1,1,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],

    [0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0]
];
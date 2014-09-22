var conway = (function () {
    var viewHeight = 400, viewWidth = 400;
    var gameHeight = viewHeight / 4;
    var gameWidth = viewWidth / 4;
    var timer, frame = 0;
    var data = [], oldData = [];
    var context;

    function setAliveCellAt(i, j) {
        data[i][j] = 1;
    }

    function circularIndex(index, length) {
        length -= 1;
        if (index < 0) return length - 1 - index % length;
        if (index > 0) return index % length;
        return 0;
    }

    function getNeighbours(i, j) {
        var one = data[circularIndex(i - 1, gameWidth)][circularIndex(j - 1, gameHeight)];
        var two = data[i][circularIndex(j - 1, gameHeight)];
        var three = data[circularIndex(i + 1, gameWidth)][circularIndex(j - 1, gameHeight)];

        var four = data[circularIndex(i - 1, gameWidth)][j];
        var five = data[circularIndex(i + 1, gameWidth)][j];

        var six = data[circularIndex(i - 1, gameWidth)][circularIndex(j - 1, gameHeight)];
        var seven = data[i][circularIndex(j - 1, gameHeight)];
        var eight = data[circularIndex(i + 1, gameWidth)][circularIndex(j - 1, gameHeight)];

        return [one, two, three, four, five, six, seven, eight];
    };

    function computeCellValue(i, j) {
        var currentValue = data[i][j];
        var neighbours = getNeighbours(i, j);
        var sum = 0;
        for (var k = 0; k < neighbours.length; k++) {
            sum += neighbours[k];
        }
        if (currentValue == 0 && sum == 3) return 1;
        if (currentValue == 0 == 1 && (2 < sum < 4)) return 1;
        return 0;
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
                    paintAliveCell(i, j);
                } else {
                    paintDeadCell(i, j);
                }
            }
        }
    }

    function paintAliveCell(i, j) {
        context.fillStyle = conway.AccentColors.Mango;
        context.fillRect(i * 4, j * 4, 4, 4);
    }

    function paintDeadCell(i, j) {
        context.fillStyle = "white";
        context.fillRect(i * 4, j * 4, 4, 4);
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

            for (var k = 0; k < conway.initialData.length; k++) {
                var cell = conway.initialData[k];
                setAliveCellAt(cell.x, cell.y);
            }
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
    { "x": 20, "y": 20 },
    { "x": 20, "y": 21 },
    { "x": 20, "y": 22 },
    { "x": 20, "y": 23 }
];
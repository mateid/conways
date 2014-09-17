var conway = (function () {
    var viewHeight = 400, viewWidth = 400;
    var gameHeight = viewHeight / 4;
    var gameWidth = viewWidth / 4;
    var timer, frame = 0;
    var data = [];
    var context;

    function setAliveCellAt(x, y) {
        data[x][y] = 1;
    }

    function setDeadCellAt(x, y) {
        data[x][y] = 0;
    }

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
            window.clearTimeout(timer);
        },
        start: function () {
            timer = window.setInterval(tick, 15);
        },
        restart: function () {
            timer = window.setInterval(tick, 15);
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
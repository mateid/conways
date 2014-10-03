describe("Conway", function() {

    var idempotent = [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
    ];

    var destructive = [
        [0,0,0,1],
        [0,0,1,0],
        [0,1,0,0],
        [0,0,0,0]
    ];

    it("idempotent initial state should not change when applying rules", function () {
        var game = conway.game(idempotent);
        game.start();

        game.tick();

        expect(game.CurrentFrame).toBe(idempotent);
    });

    it("should apply rules to compute next frame", function () {
        var game = conway.game(destructive);
        game.start();

        game.tick();
        game.tick();

        expect(game.CurrentFrame).toBe(destructive); //Broken
    });

});
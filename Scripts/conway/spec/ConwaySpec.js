describe("Conway", function() {

    it("idempotent initial state should not change when applying rules", function () {
        var game = conway.game([
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ]);
        game.start();

        game.tick();

        expect(game.CurrentFrame)
            .toEqual([
                [0,0,0,0],
                [0,1,1,0],
                [0,1,1,0],
                [0,0,0,0]
            ]);
    });

    it("should apply rules to compute next frame", function () {
        var game = conway.game([
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0]
        ]);
        game.start();

        game.tick();

        expect(game.CurrentFrame)
            .toEqual( [
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,1,1,1,0],
                [0,0,0,0,0],
                [0,0,0,0,0]
            ]);
    });

});
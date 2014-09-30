describe("Array", function() {

  it("should be able to access circular index", function() {

      var stuff = [0,1,2,3,4];

      var item = stuff.index(5);

      expect(item).toBe(0);
  });

});

describe("Array", function() {

  it("should be able to access positive wrapping circular cindex", function() {

      var stuff = [0,1,2,3,4];

      var item = stuff.cindex(5);

      expect(item).toBe(0);
  });

  it("should be able to access normal cindex", function() {

      var stuff = [0,1,2,3,4];

      var item = stuff.cindex(3);

      expect(item).toBe(3);
  });

  it("should be able to access negative cindex", function() {

      var stuff = [0,1,2,3,4];

      var item = stuff.cindex(-1);

      expect(item).toBe(4);
  });

  it("should be able to access zero cindex", function() {

      var stuff = [0,1,2,3,4];

      var item = stuff.cindex(0);

      expect(item).toBe(0);
  });

  it("should be able to access max cindex", function() {

      var stuff = [0,1,2,3,4];

      var item = stuff.cindex(4);

      expect(item).toBe(4);
  });

});

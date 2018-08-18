describe("Celebration Grid", function () {
  describe("General functional test", function () {
    it("should be true", function () {
      expect(true);
    });


    describe("Generate a valid Card", function () {
      it("should be a valid Card", function () {
        let card2 = new Card(1,cardType.MISTAKES_SUCCESS, "project", "category", "content", true, true);
        let result = card2.toHtml();
        let expected = "<div class=\"card grey  lighten-1\">"+
        "  <div class=\"card-content\">"+
        "    <div class=\"left\">project</div>"+
        "    <div class=\"right\">category</div>"+
        "  </div>"+
        "  <div class=\"card-content\"> content </div>"+
        "  <div class=\"card-content\">"+
        "    <div class=\"left\">ACTIONITEM</div>"+
        "    <div class=\"right\">SPECIAL</div>"+
        "  </div>"+
        "</div>";
        console.log("expected :" + expected);
        console.log("actual   :" + result);
        expect(result).toBe(expected);
      });
    });
  })
});

jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
jasmine.getEnv().execute();
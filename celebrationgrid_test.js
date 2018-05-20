describe("Celebration Grid", function () {
  describe("General functional test", function () {
    it("should be true", function () {
      expect(true);
    });


    describe("Generate a valid card", function () {
      it("should be a valid card", function () {
        let card2 = new card(1,cardType.MISTAKES_SUCCESS, "project", "category", "content", true, true);
        let result = card2.createHtmlFor();
        expect(result).toEqual("<div class=\"card gray  lighten-1\">  <div class=\"card-content\">    <div class=\"left\">undefined</div>    <div class=\"right\">undefined</div>  </div>  <div class=\"card-content\"> undefined </div>  <div class=\"card-content\">  </div></div>");
      });
    });
  })
});
jasmine.getEnv().addReporter(new jasmine.TrivialReporter());;
jasmine.getEnv().execute();
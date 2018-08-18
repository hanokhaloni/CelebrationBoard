describe("Celebration Grid", function () {
  describe("General functional test", function () {
    it("should be true", function () {
      expect(true);
    });


    describe("Generate a valid Card", function () {
      it("should be a valid Card", function () {
        let card2 = new Card(1,cardType.MISTAKES_SUCCESS, "project", "category", "content", true, true);
        let result = card2.toHtml();
        let expected = "<div class=\"Card grey  lighten-1\">"+
        "  <div class=\"Card-content\">"+
        "    <div class=\"left\">project</div>"+
        "    <div class=\"right\">category</div>"+
        "  </div>"+
        "  <div class=\"Card-content\"> content </div>"+
        "  <div class=\"Card-content\">"+
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
// "<div class="Card grey  lighten-1">"
//   <div class="Card-content">
//     <div class="left">project</div>
//     <div class="right">category</div>
//   </div>  <div class="Card-content"> content </div>
//   <div class="Card-content">
//     <div class="left">ACTIONITEM</div>
//     <div class="right">SPECIAL</div>
//   </div>
// </div>"
jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
jasmine.getEnv().execute();
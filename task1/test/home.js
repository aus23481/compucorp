var expect    = require("chai").expect;

var request = require("request");


describe("Music Search Testing", function() {
describe("search result count", function() {
      
      var url = "https://api.spotify.com/v1/search?q=airforce&type=album";

      it("returns status 200", function() {
            request(url, function(error, response, body) {
              expect(response.statusCode).to.equal(200);
              done();
            });
      });
      
      it("returns status not empty", function() {
            request(url, function(error, response, body) {
              expect(body).not.to.equal("");
              done();
            });
      });
      
       it("returns at least 5", function() {
            request(url, function(error, response, body) {
              expect(body).to.have.length.of.at.least(5);
              done();
            });
      });
      
      
      
  });

  
});
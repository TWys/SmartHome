// Przykładowy test 1 - dodawanie [powinien zwrócić "Failed"]

describe("first test", function() {
  it("should add 2 and 2", function() {
    expect(2 + 2).toBe(5);
  });
});

describe('Menu Click', function () {

  it ('should go to Home', function () {
      location.href = 'http://localhost:4200/#/home';
      expect(window.location.pathname).toEqual('Home');
  });

  it ('should go to About', function () {
      location.href = 'http://localhost:4200/#/about';
      expect(window.location.pathname).toEqual('About');
  });

  it ('should go to Offer', function () {
    location.href = 'http://localhost:4200/offer';
    expect(window.location.pathname).toEqual('Offer');
  });

  it ('should go to Gallery', function () {
    location.href = 'http://localhost:4200/gallery';
    expect(window.location.pathname).toEqual('Gallery');
  });

  it ('should go to Contact', function () {
    location.href = 'http://localhost:4200/#/contact';
    expect(window.location.pathname).toEqual('Contact');
  });

});


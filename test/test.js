
// Przykładowy test 1 - dodawanie [powinien zwrócić "Failed"]

// describe("first test", function() {
//   it("should add 2 and 2", function() {
//     expect(2 + 2).toBe(5);
//   });
// });

// window.onbeforeunload = jasmine.createSpy();



describe('Menu Click', function () {

  it ('should go to Home', function () {
      let sciezka = window.location.href;
      sciezka = 'http://localhost:4200/#/home';
      expect(sciezka).toContain('home');
  });

  it ('should go to About', function () {
      sciezka = 'http://localhost:4200/#/about';
      expect(sciezka).toContain('about');
  });

  it ('should go to Offer', function () {
      sciezka = 'http://localhost:4200/#/offer';
      expect(sciezka).toContain('offer');
  });

  it ('should go to Gallery', function () {
      sciezka = 'http://localhost:4200/gallery';
      expect(sciezka).toContain('gallery');
  });

  it ('should go to Contact', function () {
      sciezka = 'http://localhost:4200/#/contact';
      expect(sciezka).toContain('contact');
  });


  // it ('should return to Home', function () {
  //   document.getElementById('home-offer').click();
  //   expect(window.location.href).toContain('offer');
  // });



});


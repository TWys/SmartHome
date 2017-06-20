import { SmartHomePage } from './app.po';

describe('smart-home App', function() {
  let page: SmartHomePage;

  beforeEach(() => {
    page = new SmartHomePage();
  });

  // Sprawdzamy czy treść powitania jest poprawna
  it('should display message: Bądź Mądry Jak Twój Dom!', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Bądź Mądry Jak Twój Dom!');
  });

  // it('should display button: Sprawdź naszą ofertę!', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Sprawdź naszą ofertę!');
  // });


});

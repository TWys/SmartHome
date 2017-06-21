import { SmartHomePage } from './app.po';

describe('Is app working?', function() {
  let page: SmartHomePage;

  beforeEach(() => {
    page = new SmartHomePage();
  });

  // Sprawdzamy czy treść powitania jest poprawna
  it('should display message: Bądź Mądry Jak Twój Dom!', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Bądź Mądry Jak Twój Dom!');
  });

});

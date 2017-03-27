import { SmartHomePage } from './app.po';

describe('smart-home App', function() {
  let page: SmartHomePage;

  beforeEach(() => {
    page = new SmartHomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

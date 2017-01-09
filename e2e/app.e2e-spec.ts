import { MyresultsNg2V2Page } from './app.po';

describe('myresults-ng2-v2 App', function() {
  let page: MyresultsNg2V2Page;

  beforeEach(() => {
    page = new MyresultsNg2V2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

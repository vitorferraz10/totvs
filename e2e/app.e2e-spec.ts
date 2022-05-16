import { TotvsMainPage } from './app.po';

describe('totvs-main App', function() {
  let page: TotvsMainPage;

  beforeEach(() => {
    page = new TotvsMainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

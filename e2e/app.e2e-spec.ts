import { LaKingsPage } from './app.po';

describe('la-kings App', () => {
  let page: LaKingsPage;

  beforeEach(() => {
    page = new LaKingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

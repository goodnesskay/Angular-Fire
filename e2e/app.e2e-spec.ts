import { AngularFirePage } from './app.po';

describe('angular-fire App', () => {
  let page: AngularFirePage;

  beforeEach(() => {
    page = new AngularFirePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

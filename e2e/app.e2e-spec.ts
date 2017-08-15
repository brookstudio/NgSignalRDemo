import { NgSignalRDemoPage } from './app.po';

describe('ng-signal-rdemo App', () => {
  let page: NgSignalRDemoPage;

  beforeEach(() => {
    page = new NgSignalRDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

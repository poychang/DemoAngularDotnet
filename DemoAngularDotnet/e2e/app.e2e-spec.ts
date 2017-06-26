import { DemoAngularDotnetPage } from './app.po';

describe('demo-angular-dotnet App', () => {
  let page: DemoAngularDotnetPage;

  beforeEach(() => {
    page = new DemoAngularDotnetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

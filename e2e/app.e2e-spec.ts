import { ChartsDemoCLIPage } from './app.po';

describe('charts-demo-cli App', () => {
  let page: ChartsDemoCLIPage;

  beforeEach(() => {
    page = new ChartsDemoCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

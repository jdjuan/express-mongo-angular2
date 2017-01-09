import { MongoExpressNg2Page } from './app.po';

describe('mongo-express-ng2 App', function() {
  let page: MongoExpressNg2Page;

  beforeEach(() => {
    page = new MongoExpressNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

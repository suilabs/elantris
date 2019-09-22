import fs from 'fs';

import render from './renderEngine';

describe('RenderEngine', () => {
  it('returns string with substitued vars', async () => {
    const str = '<h1>{{{title}}</h1>';
    const params = {
      title: 'this title',
    };
    const filePath = '/tmp/test.html';
    fs.writeFileSync(filePath, str);
    const resp = await render(filePath, params);
    expect(resp).toMatchSnapshot();
  });
});

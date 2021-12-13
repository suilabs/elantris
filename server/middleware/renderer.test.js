import Renderer from './renderer';

let mockCreateElement;
jest.mock('react', () => ({
  createElement: (...c) => mockCreateElement(...c),
}));

jest.mock('react-dom/server', () => ({
  renderToString: () => '',
}));

jest.mock('../../src/App', () => 'App');

let mockRenderEngine;
jest.mock(
  './renderEngine',
  () =>
    (...c) =>
      mockRenderEngine(...c),
);

let mockBySection;
jest.mock('../../src/Services/ProjectService', () => ({
  bySection: (...c) => mockBySection(...c),
}));

jest.mock('../../src/Utils', () => ({
  getPageTitle: () => 'pageTitle',
  getMetaDescription: () => 'metadescription',
}));

let mockIsMobile;
jest.mock(
  'mobile-detect',
  () =>
    class {
      // eslint-disable-next-line class-methods-use-this
      mobile() {
        return mockIsMobile;
      }
    },
);

const buildExpectedClientSideParams = (cSP) =>
  `window.appParams=${JSON.stringify(cSP)}`;

describe('Renderer', () => {
  let req;
  let res;
  let clientSideParams;

  beforeEach(() => {
    req = {
      headers: {
        'user-agent': 'userAgent',
      },
      originalUrl: '/ca/url',
      app: {
        locals: {
          matomo: {
            track: () => {},
          },
        },
      },
      query: {
        featureFlags: null,
      },
    };
    res = {
      send: jest.fn(),
      type: jest.fn(),
    };
    clientSideParams = {
      queryParams: {},
      featureFlags: {},
    };
    mockCreateElement = jest.fn(() => {});
    mockBySection = jest.fn(() => []);
    mockIsMobile = false;
    mockRenderEngine = jest.fn(() => 'template');
  });

  it('should return', async () => {
    const expectedClientSideParams =
      buildExpectedClientSideParams(clientSideParams);

    await Renderer(req, res);

    expect(res.send).toHaveBeenCalledWith('template');

    const engineArguments = mockRenderEngine.mock.calls[0];

    expect(engineArguments[1]).toEqual({
      title: '<title>pageTitle</title>',
      metaDescription: 'metadescription',
      clientSideParams: expectedClientSideParams,
      root: '',
    });
  });

  it('should call create element with the correct props', async () => {
    await Renderer(req, res);

    expect(mockCreateElement).toHaveBeenCalledWith('App', {
      ssr: true,
      isMobile: false,
      url: '/ca/url',
      projects: [],
    });
  });

  it('should get the projects specific for a section', async () => {
    await Renderer(req, res);

    expect(mockBySection).toHaveBeenCalledWith('ca', 'url');
  });

  it('should return multiple projects if there is not selection', async () => {
    mockBySection.mockResolvedValue([{ url: 'project1' }, { url: 'project2' }]);

    await Renderer(req, res);

    expect(mockCreateElement).toHaveBeenCalledWith('App', {
      ssr: true,
      isMobile: false,
      url: '/ca/url',
      projects: [{ url: 'project1' }, { url: 'project2' }],
    });
  });

  it('should return a single project if there is selection', async () => {
    mockBySection.mockResolvedValue([{ url: 'project1' }, { url: 'project2' }]);

    req.originalUrl = '/ca/url/project1';

    await Renderer(req, res);

    expect(mockCreateElement).toHaveBeenCalledWith('App', {
      ssr: true,
      isMobile: false,
      url: '/ca/url/project1',
      projects: [{ url: 'project1' }],
    });
  });
});

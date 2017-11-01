import sinon from 'sinon';

import JSONConnector from 'sui-server/DBConnection/jsonConnector';

describe('JSONConnector', () => {
  let writeDBStub;
  let project;
  let project2;

  beforeEach(() => {
    JSONConnector.init();
    writeDBStub = sinon.stub(JSONConnector, 'writeDB').callsFake(() => {

    });
    JSONConnector._createId = (m) => `${m}-1`;


    project = {
      key: 'k1',
      title: 't1',
      subTitle: 's1',
      coverImage: {name: 'c1', url: 'url1', text: null},
      images: [{name: 'c1', url: 'url1', text: 'text1'}],
    };

    project2 = {
      key: 'k2',
      title: 't2',
      subTitle: 's2',
      coverImage: {name: 'c1', url: 'url1', text: null},
      images: [{name: 'c1', url: 'url1', text: 'text1'}],
    };

  });

  afterEach(() => {
    writeDBStub.restore();
  });

  it('inserts an entry', () => {

    const returnProject = JSONConnector.insertProject(project);

    expect(writeDBStub.called).to.be.true;
    expect(returnProject.key).to.be.equal(project.key);
    expect(returnProject.images.length).to.be.equal(project.images.length);

  });

  it('should return projects ordered', () => {

    const expectedReturn = [{...project, coverImage: 'c1-1', images:['c1-1']},
      {...project2, coverImage: 'c1-1', images:['c1-1']}];

    JSONConnector.insertProject(project);
    JSONConnector.insertProject(project2);

    const returnObj = JSONConnector.getOrderedProjects();
    expect(JSON.stringify(returnObj)).to.be.equal(JSON.stringify(expectedReturn));
  });

  it('should set a new order correctly', () => {

    const expectedReturn = ['k2','k1'];

    JSONConnector.insertProject(project);
    JSONConnector.insertProject(project2);

    const originalOrder = JSONConnector.getOrderedProjects();

    const returnOrder = JSONConnector.setOrder(['k2','k1']);

    expect(JSON.stringify(returnOrder)).to.not.be.equal(JSON.stringify(originalOrder));
    expect(returnOrder.map((p) => p.key)).to.deep.equal(expectedReturn);
  })
});

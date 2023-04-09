describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should have no change to allServers when serverInput is empty on submitServerInfo()',function(){
    serverNameInput.value = "";
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should add on row to serverTable on updateServerTable()', function(){
    submitServerInfo();
    updateServerTable();
    expect(serverTbody.childElementCount).toEqual(1);
    expect(serverTbody.firstElementChild.childElementCount).toEqual(3);
  })

  afterEach(function() {
    // teardown logic
    serverNameInput.value ="";
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});

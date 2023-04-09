describe("test on appendDeleteBtn", ()=>{
    beforeEach(()=>{
        allPayments={
            "payment1":{
                billAmt: 100,
                tipAmt:17,
                tipPercent:17
            },
            "payment2":{
                billAmt: 200,
                tipAmt:30,
                tipPercent:15
            }
        };

        allServers={
            "server1":"Jessica",
            "server2": "Cindy"
        }
    });

    it("should add deleteBtn in each row of server table",
    ()=>{
        updateServerTable()
        expect(serverTbody.firstElementChild.childElementCount).toEqual(3);
    });

    afterEach(()=>{
        allPayments = {};
        allServers = {};
    })
    
})
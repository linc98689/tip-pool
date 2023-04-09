describe("helpers tests", ()=>{
    beforeAll(()=>{
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
        }
    });

    it('should return total on sumPaymentTotal()', ()=>{
        expect(sumPaymentTotal("billAmt")).toEqual(300);
        expect(sumPaymentTotal("tipAmt")).toEqual(47);
        expect(sumPaymentTotal("tipPercent")).toEqual(32);
    });

    it('should return tip percent on calculateTipPercent()', ()=>{
        for (let k in allPayments){
            expect(calculateTipPercent(allPayments[k].billAmt, 
                allPayments[k].tipAmt)).toEqual(allPayments[k].tipPercent); 
            }
        
    });

    it('should create td on appenTd',()=>{
        const tr = document.createElement("tr");
        appendTd(tr, 'Alice');
        expect(tr.lastElementChild.innerText).toEqual('Alice');
    });

    afterAll(()=>{
        allPayments={};
    });
});


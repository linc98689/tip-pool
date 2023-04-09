describe("payments tests(with setup and teardown)", ()=>{
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
        paymentId = 2;
        billAmtInput.value = "50";
        tipAmtInput.value = "0";
    });

    it('should create a new payment on createCurPayment()', 
    ()=>{
        let curPayment = createCurPayment();
        expect(curPayment.billAmt).toEqual(50);
        expect(curPayment.tipAmt).toEqual(0);
        expect(curPayment.tipPercent).toEqual(0);
    });

    it("should add curPayment to allPayments on submitPaymentInfo()",
    ()=>{
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(3);
        expect(allPayments["payment3"].billAmt).toEqual(50);
        expect(allPayments["payment3"].tipAmt).toEqual(0);
        expect(allPayments["payment3"].tipPercent).toEqual(0);
        
    });

    afterEach(()=>{
        allPayments= {};
        paymentId = 0;
        billAmtInput.value = "";
        tipAmtInput.value = "";
        paymentTbody.innerHTML="";
        summaryTds[0].innerHTML = "";
        summaryTds[1].innerHTML = "";
        summaryTds[2].innerHTML = "";
    });

});
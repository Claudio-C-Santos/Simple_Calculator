describe("Simple Calculator", function() {
    beforeEach(function() {
        calculation = new run();
    });
    describe("Generates Calculation", function(){
        it("should exist", function() {
            expect(run).toBeDefined();
        });
    });
    describe("Sums two Floaters", function(){
        it("should sum correctly",function(){
            num1 = 2;
            num2 = 2;
            expect().toBe(4);
        });
    });
});
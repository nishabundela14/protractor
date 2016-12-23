describe("brand page", function() {
    it("test brands length", function() {
         browser.get('http://localhost:8080/#/brands/list');
         expect(browser.getTitle()).toEqual('Product App-Brands');
 
        element.all(by.repeater('brand in $ctrl.brands')).then(function(brands) {
            expect( brands.length ).toEqual(10);
        });

        element.all(by.repeater('brand in $ctrl.brands')).then(function(brands) {
            var firstElement = brands[0].element(by.binding('brand.name'));
            expect(firstElement.getText()).toEqual('Motorola');
        });

         browser.sleep(3000);
    })


    it("test brands length", function() {
         browser.get('http://localhost:8080/#/brands/list');
         expect(browser.getTitle()).toEqual('Product App-Brands');
 

        element.all(by.repeater('brand in $ctrl.brands')).
        get(1).
        element(by.linkText('Samsung')).
        click()
 
        expect(element(by.binding("$ctrl.brand.name")).getText()).toContain('Samsung')
        
         browser.sleep(3000);
    })





});
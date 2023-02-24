"use strict";
var common_1 = require('@angular/common');
describe('LowerCasePipe tests', function () {
    var pipe = new common_1.LowerCasePipe();
    it('should capitalise', function () {
        expect(pipe.transform('MEAN')).toEqual('mean');
    });
});
//# sourceMappingURL=pipe.spec.js.map
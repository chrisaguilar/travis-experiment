const { expect } = require('chai');

function sum (...args) {
    return args.reduce((a, b) => a + b);
}

describe('sum', () => {
    it('Should add 2..n numbers together', () => {
        expect(sum(1, 2, 3)).to.equal(6);
        expect(sum(1, 2, -3)).to.equal(0);
        expect(sum(1, 10, -29)).to.equal(-18);
    });
});

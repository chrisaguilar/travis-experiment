const { expect } = require('chai');

const { difference } = require('../src');

describe('difference', () => {
    it('Should add 2..n numbers together', () => {
        expect(difference(3, 2, 1)).to.equal(0);
        expect(difference(-3, 2, 1)).to.equal(-6);
        expect(difference(29, 10)).to.equal(19);
    });
});

const { assert } = require("chai");

const BimToken = artifacts.require('BimToken');

contract('BimToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        this.bim = await BimToken.new({ from: minter });
    });


    it('mint', async () => {
        await this.bim.mint(alice, 1000, { from: minter });
        assert.equal((await this.bim.balanceOf(alice)).toString(), '1000');
    })
});

import { sum } from '../src/index';

describe("验证测试基础环境", function() {
	it("期望(2 + 5) = 7", function() {
		expect(sum(2,5)).to.be.equal(7);
	});
});
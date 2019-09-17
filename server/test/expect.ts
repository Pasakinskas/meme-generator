import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiArrays from 'chai-arrays';

chai.use(chaiAsPromised);
chai.use(chaiArrays);

export const expect = chai.expect;

import lodash from 'lodash';
import underscore from 'underscore';
import { expect } from 'chai';

const _l = lodash;
const _u = underscore;

describe('wrapper', () => {
  describe('_.last', () => {
    it('return same value', () => {
      const arr = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 0, 1000];
      expect(_l.last(arr)).to.equal(_u.last(arr));
      expect(_l.last()).to.equal(_u.last());
    });
  });
});

import lodash from 'lodash';
import underscore from 'underscore';
import { expect, assert } from 'chai';
import * as math from '../utils/math';
import * as log from '../utils/log';

const _l = lodash;
const _u = underscore;

describe('wrapper', () => {
  describe('_.range', () => {
    it('return same value', () => {
      expect(_l.range()).to.deep.equal(_u.range());
      expect(_l.range(0)).to.deep.equal(_u.range(0));
      expect(_l.range(1)).to.deep.equal(_u.range(1));
      expect(_l.range(1, 10)).to.deep.equal(_u.range(1, 10));
      expect(_l.range(0, -10, -1)).to.deep.equal(_u.range(0, -10, -1));
    });

    function rangeFunc(method, ...params) {
      const start = new Date();
      method(...params);
      const end = new Date();
      return end.getTime() - start.getTime();
    }

    it('range -1, L! lodash is faster?', () => {
      const param = 1000 * 1000;
      const repeat = 50;
      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(rangeFunc(_l.range, param + i));
      }

      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(rangeFunc(_u.range, param + i));
      }

      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, param);
      assert.isAbove(underscoreAverage, lodashAverage);
    });

    it('range -2, L! lodash is faster?', () => {
      const param = 1000 * 1000 * 10;
      const repeat = 50;
      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(rangeFunc(_l.range, param + i));
      }

      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(rangeFunc(_u.range, param + i));
      }

      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, param);
      assert.isAbove(underscoreAverage, lodashAverage);
    });

    it('range - 3, L! lodash is faster?', () => {
      const param1 = 1000;
      const param2 = 1000 * 1000;
      const repeat = 50;
      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(rangeFunc(_l.range, param1 + i, param2 + i + i));
      }

      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(rangeFunc(_u.range, param1 + i, param2 + i + i));
      }

      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, param1, param2);
      assert.isAbove(underscoreAverage, lodashAverage);
    });

    it('range - 4, L! lodash is faster?', () => {
      const param1 = 1000;
      const param2 = 1000 * 1000 * 10;
      const repeat = 50;
      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(rangeFunc(_l.range, param1 + i, param2 + i + i));
      }

      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(rangeFunc(_u.range, param1 + i, param2 + i + i));
      }

      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, param1, param2);
      assert.isAbove(underscoreAverage, lodashAverage);
    });

    it('range - 5, L! lodash is faster?', () => {
      const param1 = 1000;
      const param2 = 1000 * 1000;
      const param3 = 5;
      const repeat = 50;
      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(rangeFunc(_l.range, param1 + i, param2 + i + i, param3));
      }

      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(rangeFunc(_u.range, param1 + i, param2 + i + i, param3));
      }

      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, param1, param2, param3);
      assert.isAbove(underscoreAverage, lodashAverage);
    });

    it('range - 6, L! lodash is faster?', () => {
      const param1 = 1000;
      const param2 = 1000 * 1000 * 10;
      const param3 = 5;
      const repeat = 50;
      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(rangeFunc(_l.range, param1 + i, param2 + i + i, param3));
      }

      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(rangeFunc(_u.range, param1 + i, param2 + i + i, param3));
      }

      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, param1, param2, param3);
      assert.isAbove(underscoreAverage, lodashAverage);
    });
  });
});

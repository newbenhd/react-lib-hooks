import * as module from '../index';

jest.mock('../index');

describe('module test', () => {
  it('should log something', () => {
    const [pre, pos] = [2, 3];
    module.add(pre, pos);
    expect(module.add).toHaveBeenCalledTimes(1);
    expect(module.add).toHaveBeenCalledWith(pre, pos);
  });
});

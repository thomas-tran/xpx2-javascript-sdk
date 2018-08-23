import { expect } from 'chai';
import 'mocha';
import { IpfsClient } from './ipfs-client';

describe('IpfsClient Test', () => {
  it('shoud do something', () => {
    const ipfsClient = new IpfsClient();
    const test = ipfsClient.test();
    expect(test).to.equal('test');
  });
});

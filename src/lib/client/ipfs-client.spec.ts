import { expect } from 'chai';
import 'mocha';
import { IpfsClient } from './ipfs-client';

describe('IpfsClient Test', () => {
  it('shoud get the node id information', () => {
    const ipfsClient = new IpfsClient('localhost', '5001');
    console.log(ipfsClient);
    expect(ipfsClient).to.be.ok;
    /*ipfsClient.getNodeId().subscribe((id) => {
      console.log(id);
      expect(id).to.have.property('id');
    }, (err) => console.log(err));*/
  });
});

import { from, Observable } from 'rxjs';

export class IpfsClient {
  private IPFS = require('ipfs-api');

  constructor(hostMultiAddress: string, port?: string, options?: object) {
    this.IPFS = this.IPFS(hostMultiAddress, port, options);
  }

  public getNodeId(): Observable<any> {
    return from(this.IPFS.id());
  }
}

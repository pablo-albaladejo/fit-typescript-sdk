import { FileEncoder } from '../FileEncoder';
import ProtocolVersion from '../ProtocolVersion';

test('WeightScale', () => {
  const encoder = new FileEncoder('./test.fit', ProtocolVersion.V1_0);
});

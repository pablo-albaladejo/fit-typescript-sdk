class CRC16 {
  private static readonly crc16_table: number[] = [
    0x0000, 0xcc01, 0xd801, 0x1400, 0xf001, 0x3c00, 0x2800, 0xe401, 0xa001,
    0x6c00, 0x7800, 0xb401, 0x5000, 0x9c01, 0x8801, 0x4400,
  ];

  private crc: number = 0;

  public getValue(): number {
    return this.crc;
  }

  public reset(): void {
    this.crc = 0;
  }

  public update(arg: number | Uint8Array, off?: number, len?: number): void {
    if (typeof arg === 'number') {
      let tmp: number;
      // compute checksum of lower four bits of byte
      tmp = CRC16.crc16_table[this.crc & 0x0f];
      this.crc = (this.crc >> 4) & 0x0fff;
      this.crc = this.crc ^ tmp ^ CRC16.crc16_table[arg & 0x0f];
  
      // now compute checksum of upper four bits of byte
      tmp = CRC16.crc16_table[this.crc & 0x0f];
      this.crc = (this.crc >> 4) & 0x0fff;
      this.crc = this.crc ^ tmp ^ CRC16.crc16_table[(arg >> 4) & 0x0f];
    } else if (arg instanceof Uint8Array && off !== undefined && len !== undefined) {
      for (let i = off; i < off + len; i++) {
        this.update(arg[i]);
      }
    } else {
      throw new Error('Invalid arguments');
    }
  }
}

export default CRC16;

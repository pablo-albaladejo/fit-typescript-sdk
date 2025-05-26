declare class CRC16 {
    private static readonly crc16_table;
    private crc;
    getValue(): number;
    reset(): void;
    update(arg: number | Uint8Array, off?: number, len?: number): void;
}
export default CRC16;

import FieldDefinitionBase from './FieldDefinitionBase';
import Fit from './Fit';
import SubField from './SubField';
import InputStream from './InputStream';
import OutputStream from './OutputStream';
import DataInputStream from './DataInputStream';
import DataOutputStream from './DataOutputStream';
import OutputStreamWriter from './OutputStreamWriter';

abstract class FieldBase {
  protected values: Array<any>;
  static forceShowInvalids: boolean = !Fit.ENABLE_LEGACY_BEHAVIOUR;

  constructor(other?: FieldBase) {
    this.values = new Array<any>();
    if (other !== undefined) {
      for (const value of other.values) {
        this.values.push(value);
      }
    }
  }

  getName(subFieldIndexOrName?: number | string): string {
    const subField: SubField =
      typeof subFieldIndexOrName === 'number'
        ? this.getSubField(subFieldIndexOrName)
        : this.getSubField(subFieldIndexOrName);

    return this.getNameInternal(subField);
  }

  private getNameInternal(subField: SubField | null): string {
    if (subField === null) {
      return this.getFieldName();
    } else {
      return subField.name;
    }
  }

  abstract getUnits(): string;
  abstract getType(): number;
  protected abstract getOffset(): number;
  protected abstract getScale(): number;
  protected abstract getFieldName(): string;
  protected abstract getSubField(subFieldIndexOrName?: number | string): SubField;

  public getType(subFieldIndexOrName?: number | string): number {
    const subField =
      typeof subFieldIndexOrName === 'number'
        ? this.getSubField(subFieldIndexOrName)
        : this.getSubField(subFieldIndexOrName);

    return this.getTypeInternal(subField);
  }

  private getTypeInternal(subField: SubField | null): number {
    if (subField === null) {
      return this.getType();
    } else {
      return subField.type;
    }
  }

  public getUnits(subFieldIndex: number): string {
    return this.getUnitsInternal(this.getSubField(subFieldIndex));
  }

  public getUnits(subFieldName: string): string {
    return this.getUnitsInternal(this.getSubField(subFieldName));
  }

  private getUnitsInternal(subField: SubField | null): string {
    if (subField === null) {
      return this.getUnits();
    } else {
      return subField.units;
    }
  }

  protected getSize(): number {
    let size = 0;

    switch (this.getType()) {
      case Fit.BASE_TYPE_ENUM:
      case Fit.BASE_TYPE_UINT8:
      case Fit.BASE_TYPE_UINT8Z:
      case Fit.BASE_TYPE_SINT8:
      case Fit.BASE_TYPE_BYTE:
      case Fit.BASE_TYPE_SINT16:
      case Fit.BASE_TYPE_UINT16:
      case Fit.BASE_TYPE_UINT16Z:
      case Fit.BASE_TYPE_SINT32:
      case Fit.BASE_TYPE_UINT32:
      case Fit.BASE_TYPE_UINT32Z:
      case Fit.BASE_TYPE_FLOAT32:
      case Fit.BASE_TYPE_FLOAT64:
      case Fit.BASE_TYPE_SINT64:
      case Fit.BASE_TYPE_UINT64:
      case Fit.BASE_TYPE_UINT64Z:
        size =
          this.getNumValues() *
          Fit.baseTypeSizes[this.getType() & Fit.BASE_TYPE_NUM_MASK];
        break;

      case Fit.BASE_TYPE_STRING:
        for (const value of values) {
          try {
            size += value.toString().getBytes('UTF-8').length + 1;
          } catch (ignored) {}
        }
        break;

      default:
        break;
    }

    return size;
  }

  public addRawValue(rawValue: any): void {
    if (rawValue === null) {
      values.add(null);
    } else if (typeof rawValue === 'number') {
      switch (this.getType()) {
        case Fit.BASE_TYPE_ENUM:
        case Fit.BASE_TYPE_UINT8:
        case Fit.BASE_TYPE_UINT8Z:
        case Fit.BASE_TYPE_SINT16:
        case Fit.BASE_TYPE_BYTE:
          values.add(Math.round(rawValue));
          break;

        case Fit.BASE_TYPE_SINT8:
          values.add(Math.round(rawValue));
          break;

        case Fit.BASE_TYPE_UINT16:
        case Fit.BASE_TYPE_UINT16Z:
        case Fit.BASE_TYPE_SINT32:
          values.add(Math.round(rawValue));
          break;

        case Fit.BASE_TYPE_UINT32:
        case Fit.BASE_TYPE_UINT32Z:
          values.add(Math.round(rawValue));
          break;

        case Fit.BASE_TYPE_FLOAT32:
          values.add(rawValue);
          break;
        case Fit.BASE_TYPE_FLOAT64:
          values.add(rawValue);
          break;
        case Fit.BASE_TYPE_STRING:
          values.add(rawValue.toString());
          break;
        default:
          break;
      }
    } else if (typeof rawValue === 'string' && rawValue === '') {
      switch (this.getType()) {
        case Fit.BASE_TYPE_ENUM:
          values.add(Fit.ENUM_INVALID);
          break;
        case Fit.BASE_TYPE_SINT8:
          values.add(Fit.SINT8_INVALID);
          break;
        case Fit.BASE_TYPE_UINT8:
          values.add(Fit.UINT8_INVALID);
          break;
        case Fit.BASE_TYPE_UINT8Z:
          values.add(Fit.UINT8Z_INVALID);
          break;
        case Fit.BASE_TYPE_SINT16:
          values.add(Fit.SINT16_INVALID);
          break;
        case Fit.BASE_TYPE_UINT16:
          values.add(Fit.UINT16_INVALID);
          break;
        case Fit.BASE_TYPE_UINT16Z:
          values.add(Fit.UINT16Z_INVALID);
          break;
        case Fit.BASE_TYPE_SINT32:
          values.add(Fit.SINT32_INVALID);
          break;
        case Fit.BASE_TYPE_UINT32:
          values.add(Fit.UINT32_INVALID);
          break;
        case Fit.BASE_TYPE_UINT32Z:
          values.add(Fit.UINT32Z_INVALID);
          break;
        case Fit.BASE_TYPE_STRING:
          values.add(rawValue);
          break;
        case Fit.BASE_TYPE_FLOAT32:
          values.add(Fit.FLOAT32_INVALID);
          break;
        case Fit.BASE_TYPE_FLOAT64:
          values.add(Fit.FLOAT64_INVALID);
          break;
        case Fit.BASE_TYPE_BYTE:
          values.add(Fit.BYTE_INVALID);
          break;
        default:
          break;
      }
    } else {
      values.add(rawValue);
    }
  }

  public getNumValues(): number {
    return values.size();
  }

  protected isSignedInteger(): boolean {
    return this.isSignedIntegerInternal(null);
  }

  protected isSignedInteger(subFieldIndex: number): boolean {
    return this.isSignedIntegerInternal(this.getSubField(subFieldIndex));
  }

  protected isSignedInteger(subFieldName: string): boolean {
    return this.isSignedIntegerInternal(this.getSubField(subFieldName));
  }

  private isSignedIntegerInternal(subField: SubField | null): boolean {
    const type = subField === null ? this.getType() : subField.getType();
    switch (type) {
      case Fit.BASE_TYPE_SINT8:
      case Fit.BASE_TYPE_SINT16:
      case Fit.BASE_TYPE_SINT32:
      case Fit.BASE_TYPE_SINT64:
        return true;

      default:
        break;
    }

    return false;
  }

  public isValid(): boolean {
    return this.isValid(0);
  }

  public isValid(index: number): boolean {
    const type = this.getType(Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD);

    if (index >= values.size()) {
      return false;
    }

    const value = values.get(index);

    if (typeof value === 'number') {
      if (Fit.baseTypeInvalidMap.get(type) === value) {
        return false;
      }
    }

    return true;
  }

  public getBitsValue(
    offset: number,
    bits: number,
    signed: boolean
  ): number | null {
    let value = 0;
    let bitsInValue = 0;
    let bitsInData;
    let index = 0;
    let data;
    let mask;

    while (bitsInValue < bits) {
      const objData = this.getRawValueInternal(index++, null);

      if (objData === null || typeof objData !== 'number') {
        return null;
      }
      data = objData;

      data >>= offset;
      bitsInData =
        Fit.baseTypeSizes[this.getType() & Fit.BASE_TYPE_NUM_MASK] * 8 - offset;
      offset -= Fit.baseTypeSizes[this.getType() & Fit.BASE_TYPE_NUM_MASK] * 8;

      if (bitsInData > 0) {
        offset = 0;

        if (bitsInData > bits - bitsInValue) {
          bitsInData = bits - bitsInValue;
        }

        mask = (1 << bitsInData) - 1;
        value |= (data & mask) << bitsInValue;
        bitsInValue += bitsInData;
      }
    }

    if (signed) {
      const signBit = 1 << (bits - 1);

      if ((value & signBit) !== 0) {
        value = -signBit + (value & (signBit - 1));
      }
    }

    return value;
  }

  public getRawValue(): any {
    return this.getRawValueInternal(0, null);
  }

  public getRawValue(fieldArrayIndex: number): any {
    return this.getRawValueInternal(fieldArrayIndex, null);
  }

  public getRawValue(fieldArrayIndex: number, subFieldIndex: number): any {
    return this.getRawValueInternal(
      fieldArrayIndex,
      this.getSubField(subFieldIndex)
    );
  }

  public getRawValue(fieldArrayIndex: number, subFieldName: string): any {
    return this.getRawValueInternal(
      fieldArrayIndex,
      this.getSubField(subFieldName)
    );
  }

  protected getRawValueInternal(
    fieldArrayIndex: number,
    subField: SubField | null
  ): any {
    let value;

    if (fieldArrayIndex >= values.size()) {
      return null;
    }

    value = values.get(fieldArrayIndex);
    return value;
  }

  public getValue(): any {
    return this.getValueInternal(0, null);
  }

  public getValue(fieldArrayIndex: number): any {
    return this.getValueInternal(fieldArrayIndex, null);
  }

  public getValue(fieldArrayIndex: number, subFieldIndex: number): any {
    return this.getValueInternal(
      fieldArrayIndex,
      this.getSubField(subFieldIndex)
    );
  }

  public getValue(fieldArrayIndex: number, subFieldName: string): any {
    return this.getValueInternal(
      fieldArrayIndex,
      this.getSubField(subFieldName)
    );
  }
  protected getValueInternal(
    fieldArrayIndex: number,
    subField: SubField | null
  ): any {
    let value: any;
    let scale: number;
    let offset: number;

    if (fieldArrayIndex >= values.length) {
      return null;
    }

    if (subField === null) {
      scale = this.getScale();
      offset = this.getOffset();
    } else {
      scale = subField.scale;
      offset = subField.offset;
    }

    const type = this.getTypeInternal(subField);
    value = values[fieldArrayIndex];

    if (typeof value === 'number') {
      if (Fit.baseTypeInvalidMap.get(type) === value) {
        return Fit.baseTypeInvalidMap.get(type);
      }

      if (
        scale !== Fit.FIELD_DEFAULT_SCALE ||
        offset !== Fit.FIELD_DEFAULT_OFFSET
      ) {
        return (value as number) / scale - offset;
      }
    }

    return value;
  }

  public setValue(value: any): void {
    this.setValueInternal(0, value, null);
  }

  public setValue(fieldArrayIndex: number, value: any): void {
    this.setValueInternal(fieldArrayIndex, value, null);
  }

  public setValue(value: any, subFieldIndex: number): void {
    this.setValueInternal(0, value, this.getSubField(subFieldIndex));
  }

  public setValue(value: any, subFieldName: string): void {
    this.setValueInternal(0, value, this.getSubField(subFieldName));
  }

  public setValue(
    fieldArrayIndex: number,
    value: any,
    subFieldIndex: number
  ): void {
    let subField: SubField | null = null;

    if (subFieldIndex !== Fit.SUBFIELD_INDEX_MAIN_FIELD) {
      subField = this.getSubField(subFieldIndex);

      if (subField === null) {
        throw new FitRuntimeException(
          `${subFieldIndex} is not a valid subfield index of ${this.getName()}.`
        );
      }
    }

    this.setValueInternal(fieldArrayIndex, value, subField);
  }

  public setValue(
    fieldArrayIndex: number,
    value: any,
    subFieldName: string
  ): void {
    this.setValueInternal(
      fieldArrayIndex,
      value,
      this.getSubField(subFieldName)
    );
  }

  private rangeCorrect(type: number, value: any): any {
    if (
      Fit.baseTypeMinMap.get(type) === null ||
      Fit.baseTypeMaxMap.get(type) === null
    ) {
      // Type does not have a range limit. Return value as is.
      return value;
    }

    try {
      const min = new BigDecimal(Fit.baseTypeMinMap.get(type).toString());
      const max = new BigDecimal(Fit.baseTypeMaxMap.get(type).toString());
      const val = new BigDecimal(value.toString());
      if (val.compareTo(min) < 0 || val.compareTo(max) > 0) {
        return Fit.baseTypeInvalidMap.get(type);
      } else {
        return value;
      }
    } catch (e) {
      return Fit.baseTypeInvalidMap.get(type);
    }
  }

  protected setValueInternal(
    fieldArrayIndex: number,
    value: any,
    subField: SubField | null
  ): void {
    while (fieldArrayIndex >= this.getNumValues()) this.addValue(new Object());

    let scale: number;
    let offset: number;

    if (subField === null) {
      scale = this.getScale();
      offset = this.getOffset();
    } else {
      scale = subField.scale;
      offset = subField.offset;
    }

    if (value === null) {
      values[fieldArrayIndex] = null;
    } else if (
      typeof value === 'number' &&
      (scale !== Fit.FIELD_DEFAULT_SCALE || offset !== Fit.FIELD_DEFAULT_OFFSET)
    ) {
      const rawValue = (value + offset) * scale;
      switch (this.getType()) {
        case Fit.BASE_TYPE_ENUM:
        case Fit.BASE_TYPE_UINT8:
        case Fit.BASE_TYPE_UINT8Z:
        case Fit.BASE_TYPE_SINT16:
          values[fieldArrayIndex] = this.rangeCorrect(
            this.getType(),
            Math.round(rawValue)
          );
          break;
        case Fit.BASE_TYPE_SINT8:
          values[fieldArrayIndex] = this.rangeCorrect(
            this.getType(),
            Math.round(rawValue)
          );
          break;
        case Fit.BASE_TYPE_UINT16:
        case Fit.BASE_TYPE_UINT16Z:
        case Fit.BASE_TYPE_SINT32:
          values[fieldArrayIndex] = this.rangeCorrect(
            this.getType(),
            Math.round(rawValue)
          );
          break;
        case Fit.BASE_TYPE_UINT32:
        case Fit.BASE_TYPE_UINT32Z:
        case Fit.BASE_TYPE_SINT64:
          values[fieldArrayIndex] = this.rangeCorrect(
            this.getType(),
            Math.round(rawValue)
          );
          break;
        case Fit.BASE_TYPE_FLOAT32:
          values[fieldArrayIndex] = this.rangeCorrect(this.getType(), rawValue);
          break;
        case Fit.BASE_TYPE_FLOAT64:
          values[fieldArrayIndex] = this.rangeCorrect(this.getType(), rawValue);
          break;
        case Fit.BASE_TYPE_STRING:
          values[fieldArrayIndex] = rawValue.toString();
          break;

        case Fit.BASE_TYPE_UINT64:
        case Fit.BASE_TYPE_UINT64Z:
          const val = Math.round(rawValue);
          const size =
            Fit.baseTypeSizes[this.getType() & Fit.BASE_TYPE_NUM_MASK];
          const bytes = new Uint8Array(size);
          for (let i = 0; i < size; i++) {
            bytes[i] = (val >>> (8 * i)) & 0xff;
          }
          values[fieldArrayIndex] = this.rangeCorrect(
            this.getType(),
            new BigInteger(bytes)
          );
          break;
        case Fit.BASE_TYPE_BYTE:
          // Byte base types are only invalid if all bytes in an array are set to invalid.
          values[fieldArrayIndex] = Math.round(rawValue);
          break;
        default:
          break;
      }
    } else {
      this.SetValueUnscaled(fieldArrayIndex, value);
    }
  }

  private SetValueUnscaled(fieldArrayIndex: number, value: any): void {
    if (typeof value === 'string' && value === '') {
      switch (this.getType()) {
        case Fit.BASE_TYPE_ENUM:
        case Fit.BASE_TYPE_SINT8:
        case Fit.BASE_TYPE_UINT8:
        case Fit.BASE_TYPE_UINT8Z:
        case Fit.BASE_TYPE_SINT16:
        case Fit.BASE_TYPE_UINT16:
        case Fit.BASE_TYPE_UINT16Z:
        case Fit.BASE_TYPE_SINT32:
        case Fit.BASE_TYPE_UINT32:
        case Fit.BASE_TYPE_UINT32Z:
        case Fit.BASE_TYPE_FLOAT32:
        case Fit.BASE_TYPE_FLOAT64:
        case Fit.BASE_TYPE_BYTE:
        case Fit.BASE_TYPE_SINT64:
        case Fit.BASE_TYPE_UINT64:
        case Fit.BASE_TYPE_UINT64Z:
          values[fieldArrayIndex] = Fit.baseTypeInvalidMap.get(this.getType());
          break;
        case Fit.BASE_TYPE_STRING:
          values[fieldArrayIndex] = this.rangeCorrect(this.getType(), value);
          break;
        default:
          break;
      }
    } else if (typeof value === 'string') {
      const byteCount = new TextEncoder().encode(value).length;
      if (byteCount > Fit.STRING_MAX_BYTE_COUNT) {
        throw new FitRuntimeException(
          `Invalid string size. Byte count can not be greater than ${Fit.STRING_MAX_BYTE_COUNT} bytes.`
        );
      }
      values[fieldArrayIndex] = value;
    } else {
      values[fieldArrayIndex] = this.rangeCorrect(this.getType(), value);
    }
  }

  public setRawValue(fieldArrayIndex: number, rawValue: any): void {
    while (fieldArrayIndex >= this.getNumValues()) {
      this.addValue(new Object());
    }

    if (rawValue === null) {
      values[fieldArrayIndex] = null;
    }
    // Add a scaled/offset value as the underlying field type rather than double
    else if (typeof rawValue === 'number') {
      switch (this.getType()) {
        case Fit.BASE_TYPE_ENUM:
        case Fit.BASE_TYPE_UINT8:
        case Fit.BASE_TYPE_UINT8Z:
        case Fit.BASE_TYPE_SINT16:
        case Fit.BASE_TYPE_BYTE:
          values[fieldArrayIndex] = Math.round(rawValue);
          break;

        case Fit.BASE_TYPE_SINT8:
          values[fieldArrayIndex] = Math.round(rawValue);
          break;

        case Fit.BASE_TYPE_UINT16:
        case Fit.BASE_TYPE_UINT16Z:
        case Fit.BASE_TYPE_SINT32:
          values[fieldArrayIndex] = Math.round(rawValue);
          break;

        case Fit.BASE_TYPE_UINT32:
        case Fit.BASE_TYPE_UINT32Z:
        case Fit.BASE_TYPE_SINT64:
          values[fieldArrayIndex] = Math.round(rawValue);
          break;

        case Fit.BASE_TYPE_FLOAT32:
          values[fieldArrayIndex] = rawValue;
          break;
        case Fit.BASE_TYPE_FLOAT64:
          values[fieldArrayIndex] = rawValue;
          break;
        case Fit.BASE_TYPE_STRING:
          values[fieldArrayIndex] = rawValue.toString();
          break;

        case Fit.BASE_TYPE_UINT64:
        case Fit.BASE_TYPE_UINT64Z:
          const val = Math.round(rawValue);
          const size =
            Fit.baseTypeSizes[this.getType() & Fit.BASE_TYPE_NUM_MASK];
          const bytes = new Uint8Array(size);
          for (let i = 0; i < size; i++) {
            bytes[i] = (val >>> (8 * i)) & 0xff;
          }
          break;

        default:
          break;
      }
    } else {
      this.SetValueUnscaled(fieldArrayIndex, rawValue);
    }
  }

  public addValue(value: any): void {
    if (typeof value === 'number' && this.getType() === Fit.BASE_TYPE_STRING) {
      let string = this.getStringValueInternal(0, null);
      const number = value as number;

      if (string === null) {
        string = '';
      }

      string += String.fromCharCode(number);
      this.setValueInternal(0, string, null);
      return;
    }

    values.push(value);
  }

  public getByteValues(): Byte[] {
    return this.getByteValues(null);
  }

  public getByteValues(subfieldIndex: number): Byte[] {
    return this.getByteValues(this.getSubField(subfieldIndex));
  }

  public getByteValues(subfieldName: string): Byte[] {
    return this.getByteValues(this.getSubField(subfieldName));
  }

  protected getByteValues(subfield: SubField): Byte[] {
    const rv: Byte[] = new Array(this.getNumValues());

    for (let i = 0; i < this.getNumValues(); i++) {
      rv[i] = this.getByteValueInternal(i, subfield);
    }

    return rv;
  }

  public getByteValue(): Byte {
    return this.getByteValueInternal(0, null);
  }

  public getByteValue(fieldArrayIndex: number): Byte {
    return this.getByteValueInternal(fieldArrayIndex, null);
  }

  public getByteValue(fieldArrayIndex: number, subFieldIndex: number): Byte {
    return this.getByteValueInternal(
      fieldArrayIndex,
      this.getSubField(subFieldIndex)
    );
  }

  public getByteValue(fieldArrayIndex: number, subFieldName: string): Byte {
    return this.getByteValueInternal(
      fieldArrayIndex,
      this.getSubField(subFieldName)
    );
  }

  protected getByteValueInternal(
    fieldArrayIndex: number,
    subField: SubField | null
  ): Byte {
    const value = this.getValueInternal(fieldArrayIndex, subField);

    if (value === null) {
      return null;
    }

    return value as number;
  }

  public getShortValues(): Short[] {
    return this.getShortValues(null);
  }

  public getShortValues(subfieldIndex: number): Short[] {
    return this.getShortValues(this.getSubField(subfieldIndex));
  }

  public getShortValues(subfieldName: string): Short[] {
    return this.getShortValues(this.getSubField(subfieldName));
  }

  protected getShortValues(subfield: SubField): Short[] {
    const rv: Short[] = new Array(this.getNumValues());

    for (let i = 0; i < this.getNumValues(); i++) {
      rv[i] = this.getShortValueInternal(i, subfield);
    }

    return rv;
  }

  public getShortValue(): Short {
    return this.getShortValueInternal(0, null);
  }

  public getShortValue(fieldArrayIndex: number): Short {
    return this.getShortValueInternal(fieldArrayIndex, null);
  }

  public getShortValue(fieldArrayIndex: number, subFieldIndex: number): Short {
    return this.getShortValueInternal(
      fieldArrayIndex,
      this.getSubField(subFieldIndex)
    );
  }

  public getShortValue(fieldArrayIndex: number, subFieldName: string): Short {
    return this.getShortValueInternal(
      fieldArrayIndex,
      this.getSubField(subFieldName)
    );
  }

  protected getShortValueInternal(
    fieldArrayIndex: number,
    subField: SubField | null
  ): Short {
    const value = this.getValueInternal(fieldArrayIndex, subField);

    if (value === null) {
      return null;
    }

    return value as number;
  }

  public getIntegerValues(): Integer[] {
    return this.getIntegerValues(null);
  }

  public getIntegerValues(subfieldIndex: number): Integer[] {
    return this.getIntegerValues(this.getSubField(subfieldIndex));
  }

  public getIntegerValues(subfieldName: string): Integer[] {
    return this.getIntegerValues(this.getSubField(subfieldName));
  }

  protected getIntegerValues(subfield: SubField): Integer[] {
    const rv: Integer[] = new Array(this.getNumValues());

    for (let i = 0; i < this.getNumValues(); i++) {
      rv[i] = this.getIntegerValueInternal(i, subfield);
    }

    return rv;
  }

  public getIntegerValue(): Integer {
    return this.getIntegerValueInternal(0, null);
  }

  public getIntegerValue(fieldArrayIndex: number): Integer {
    return this.getIntegerValueInternal(fieldArrayIndex, null);
  }

  public getIntegerValue(
    fieldArrayIndex: number,
    subFieldIndex: number
  ): Integer {
    return this.getIntegerValueInternal(
      fieldArrayIndex,
      this.getSubField(subFieldIndex)
    );
  }

  public getIntegerValue(
    fieldArrayIndex: number,
    subFieldName: string
  ): Integer {
    return this.getIntegerValueInternal(
      fieldArrayIndex,
      this.getSubField(subFieldName)
    );
  }

  protected getIntegerValueInternal(
    fieldArrayIndex: number,
    subField: SubField | null
  ): Integer {
    const value = this.getValueInternal(fieldArrayIndex, subField);

    if (value === null) {
      return null;
    }

    return value as number;
  }

  public getLongValues(): Long[] {
    return this.getLongValues(null);
  }

  public getLongValues(subfieldIndex: number): Long[] {
    return this.getLongValues(this.getSubField(subfieldIndex));
  }

  public getLongValues(subfieldName: string): Long[] {
    return this.getLongValues(this.getSubField(subfieldName));
  }

  protected getLongValues(subfield: SubField): Long[] {
    const rv: Long[] = new Array(this.getNumValues());

    for (let i = 0; i < this.getNumValues(); i++) {
      rv[i] = this.getLongValueInternal(i, subfield);
    }

    return rv;
  }

  public getLongValue(): Long {
    return this.getLongValueInternal(0, null);
  }

  public getLongValue(fieldArrayIndex: number): Long {
    return this.getLongValueInternal(fieldArrayIndex, null);
  }

  public getLongValue(fieldArrayIndex: number, subFieldIndex: number): Long {
    return this.getLongValueInternal(
      fieldArrayIndex,
      this.getSubField(subFieldIndex)
    );
  }

  public getLongValue(fieldArrayIndex: number, subFieldName: string): Long {
    return this.getLongValueInternal(
      fieldArrayIndex,
      this.getSubField(subFieldName)
    );
  }

  protected getLongValueInternal(
    fieldArrayIndex: number,
    subField: SubField | null
  ): Long {
    const value = this.getValueInternal(fieldArrayIndex, subField);

    if (value === null) {
      return null;
    }

    return value as number;
  }

  public getFloatValues(): Float[] {
    return this.getFloatValues(null);
  }

  protected addValue(value: any): void {
    this.values.push(value);
  }

  public getFloatValues(subfieldIndexOrName?: number | string): Float[] {
    const subField =
      typeof subfieldIndexOrName === 'number'
        ? this.getSubField(subfieldIndexOrName)
        : this.getSubField(subfieldIndexOrName);

    const rv: Float[] = new Array(this.getNumValues());

    for (let i = 0; i < this.getNumValues(); i++) {
      rv[i] = this.getFloatValueInternal(i, subField);
    }

    return rv;
  }

  public getFloatValue(
    fieldArrayIndex: number = 0,
    subFieldIndexOrName?: number | string
  ): Float {
    const subField =
      typeof subFieldIndexOrName === 'number'
        ? this.getSubField(subFieldIndexOrName)
        : this.getSubField(subFieldIndexOrName);

    return this.getFloatValueInternal(fieldArrayIndex, subField);
  }

  protected getFloatValueInternal(
    fieldArrayIndex: number,
    subField: SubField | null
  ): Float {
    const value = this.getValueInternal(fieldArrayIndex, subField);

    if (value == null) {
      return null;
    }

    return new Float(value instanceof Number ? value.valueOf() : 0);
  }

  public getDoubleValues(subfieldIndexOrName?: number | string): Double[] {
    const subField =
      typeof subfieldIndexOrName === 'number'
        ? this.getSubField(subfieldIndexOrName)
        : this.getSubField(subfieldIndexOrName);

    const rv: Double[] = new Array(this.getNumValues());

    for (let i = 0; i < this.getNumValues(); i++) {
      rv[i] = this.getDoubleValueInternal(i, subField);
    }

    return rv;
  }

  public getDoubleValue(
    fieldArrayIndex: number = 0,
    subFieldIndexOrName?: number | string
  ): Double {
    const subField =
      typeof subFieldIndexOrName === 'number'
        ? this.getSubField(subFieldIndexOrName)
        : this.getSubField(subFieldIndexOrName);

    return this.getDoubleValueInternal(fieldArrayIndex, subField);
  }

  protected getDoubleValueInternal(
    fieldArrayIndex: number,
    subField: SubField | null
  ): Double {
    const value = this.getValueInternal(fieldArrayIndex, subField);

    if (value == null) {
      return null;
    }

    return new Double(value instanceof Number ? value.valueOf() : 0);
  }

  public getBigIntegerValues(
    subfieldIndexOrName?: number | string
  ): BigInteger[] {
    const subField =
      typeof subfieldIndexOrName === 'number'
        ? this.getSubField(subfieldIndexOrName)
        : this.getSubField(subfieldIndexOrName);

    const rv: BigInteger[] = new Array(this.getNumValues());

    for (let i = 0; i < this.getNumValues(); i++) {
      rv[i] = this.getBigIntegerValueInternal(i, subField);
    }

    return rv;
  }

  public getBigIntegerValue(
    fieldArrayIndex: number = 0,
    subFieldIndexOrName?: number | string
  ): BigInteger {
    const subField =
      typeof subFieldIndexOrName === 'number'
        ? this.getSubField(subFieldIndexOrName)
        : this.getSubField(subFieldIndexOrName);

    return this.getBigIntegerValueInternal(fieldArrayIndex, subField);
  }

  protected getBigIntegerValueInternal(
    fieldArrayIndex: number,
    subField: SubField | null
  ): BigInteger {
    const value = this.getValueInternal(fieldArrayIndex, subField);

    if (value == null) {
      return null;
    }

    return value instanceof BigInteger
      ? value
      : new BigInteger(value.toString());
  }

  public getStringValues(subfieldIndexOrName?: number | string): string[] {
    const subField =
      typeof subfieldIndexOrName === 'number'
        ? this.getSubField(subfieldIndexOrName)
        : this.getSubField(subfieldIndexOrName);

    const rv: string[] = new Array(this.getNumValues());

    for (let i = 0; i < this.getNumValues(); i++) {
      rv[i] = this.getStringValueInternal(i, subField);
    }

    return rv;
  }

  public getStringValue(
    fieldArrayIndex: number = 0,
    subFieldIndexOrName?: number | string
  ): string {
    const subField =
      typeof subFieldIndexOrName === 'number'
        ? this.getSubField(subFieldIndexOrName)
        : this.getSubField(subFieldIndexOrName);

    return this.getStringValueInternal(fieldArrayIndex, subField);
  }

  protected getStringValueInternal(
    fieldArrayIndex: number,
    subField: SubField | null
  ): string {
    const value = this.getValueInternal(fieldArrayIndex, subField);
    const type = this.getTypeInternal(subField);

    if (value == null) {
      return null;
    }

    if (
      !this.forceShowInvalids &&
      type in Fit.baseTypeInvalidMap &&
      Fit.baseTypeInvalidMap[type] === value
    ) {
      return null;
    }

    return value.toString();
  }

  public read(inStream: InputStream, size: number): boolean {
    try {
      const data = new DataInputStream(inStream);

      if (this.getType() === Fit.BASE_TYPE_STRING) {
        try {
          const bytes: number[] = new Array(size);
          inStream.read(bytes, 0, size);
          const byteBuffer: ByteBuffer = ByteBuffer.wrap(bytes);

          const utf8Decoder: CharsetDecoder =
            Charset.forName('UTF-8').newDecoder();
          utf8Decoder.onMalformedInput(CodingErrorAction.IGNORE);
          utf8Decoder.onUnmappableCharacter(CodingErrorAction.IGNORE);
          const decoded: CharBuffer = utf8Decoder.decode(byteBuffer);
          const strings: string[] = decoded.toString().split('\0');
          strings.forEach((string) => this.values.push(string));
        } catch (e) {
          return true;
        }
      } else {
        let bytesLeft: number = size;
        let invalid: boolean = true;

        const type: number = this.getType();
        const baseTypeSize: number =
          Fit.baseTypeSizes[type & Fit.BASE_TYPE_NUM_MASK];
        const invalidValue: any = Fit.baseTypeInvalidMap[type];

        while (bytesLeft > 0) {
          let value: any = null;

          switch (type) {
            case Fit.BASE_TYPE_ENUM:
            case Fit.BASE_TYPE_UINT8:
            case Fit.BASE_TYPE_UINT8Z: {
              value = data.readByte() & 0xff;
              break;
            }

            case Fit.BASE_TYPE_SINT8: {
              value = data.readByte();
              break;
            }

            case Fit.BASE_TYPE_SINT16: {
              value = data.readShort();
              break;
            }

            case Fit.BASE_TYPE_UINT16:
            case Fit.BASE_TYPE_UINT16Z: {
              value = data.readByte() & 0xff;
              value = (value << 8) | (data.readByte() & 0xff);
              break;
            }

            case Fit.BASE_TYPE_SINT32: {
              value = data.readInt();
              break;
            }

            case Fit.BASE_TYPE_UINT32:
            case Fit.BASE_TYPE_UINT32Z:
            case Fit.BASE_TYPE_SINT64: {
              value = data.readByte() & 0xff;
              for (let i = 1; i < baseTypeSize; i++) {
                value = (value << 8) | (data.readByte() & 0xff);
              }

              break;
            }

            case Fit.BASE_TYPE_FLOAT32: {
              value = data.readFloat();
              break;
            }

            case Fit.BASE_TYPE_FLOAT64: {
              value = data.readDouble();
              break;
            }

            case Fit.BASE_TYPE_BYTE: {
              value = data.readByte() & 0xff;
              break;
            }

            case Fit.BASE_TYPE_UINT64:
            case Fit.BASE_TYPE_UINT64Z: {
              const bytes: number[] = new Array(baseTypeSize);
              data.read(bytes, 0, baseTypeSize);
              value = new BigInteger(1, bytes);
              break;
            }

            default:
              return false;
          }

          if (value !== null) {
            this.values.push(value);
          }

          if (value !== invalidValue) {
            invalid = false;
          }

          bytesLeft -=
            Fit.baseTypeSizes[this.getType() & Fit.BASE_TYPE_NUM_MASK];
        }

        if (invalid && !this.forceShowInvalids) {
          this.values = [];
        }
      }
    } catch (e) {
      return false;
    }

    return true;
  }

  protected write(
    outStream: OutputStream,
    fieldDef: FieldDefinitionBase
  ): void {
    let bytesLeft: number = fieldDef.getSize() - this.getSize();
    this.write(outStream);

    // Fill remaining bytes with invalid.
    while (bytesLeft > 0) {
      this.writeValue(outStream, null);
      bytesLeft -= Fit.baseTypeSizes[this.getType() & Fit.BASE_TYPE_NUM_MASK];
    }
  }

  protected writeValue(outStream: OutputStream, value: any): void {
    try {
      const data = new DataOutputStream(outStream);

      if (value === null) {
        switch (this.getType()) {
          case Fit.BASE_TYPE_ENUM:
            data.writeByte(Fit.ENUM_INVALID);
            break;
          case Fit.BASE_TYPE_UINT8:
            data.writeByte(Fit.UINT8_INVALID);
            break;
          case Fit.BASE_TYPE_UINT8Z:
            data.writeByte(Fit.UINT8Z_INVALID);
            break;
          case Fit.BASE_TYPE_SINT8:
            data.writeByte(Fit.SINT8_INVALID);
            break;
          case Fit.BASE_TYPE_BYTE:
            data.writeByte(Fit.BYTE_INVALID);
            break;
          case Fit.BASE_TYPE_SINT16:
            data.writeShort(Fit.SINT16_INVALID);
            break;
          case Fit.BASE_TYPE_UINT16:
            data.writeShort(Fit.UINT16_INVALID);
            break;
          case Fit.BASE_TYPE_UINT16Z:
            data.writeShort(Fit.UINT16Z_INVALID);
            break;
          case Fit.BASE_TYPE_SINT32:
            data.writeInt(Fit.SINT32_INVALID);
            break;
          case Fit.BASE_TYPE_UINT32:
            data.writeInt(Fit.UINT32_INVALID);
            break;
          case Fit.BASE_TYPE_UINT32Z:
            data.writeInt(Fit.UINT32Z_INVALID);
            break;
          case Fit.BASE_TYPE_SINT64:
            data.writeLong(Fit.SINT64_INVALID);
            break;
          case Fit.BASE_TYPE_UINT64:
            data.writeLong(Fit.UINT64_INVALID);
            break;
          case Fit.BASE_TYPE_UINT64Z:
            data.writeLong(Fit.UINT64Z_INVALID);
            break;
          case Fit.BASE_TYPE_STRING:
            data.writeByte(0);
            break;
          case Fit.BASE_TYPE_FLOAT32:
            data.writeFloat(Fit.FLOAT32_INVALID);
            break;
          case Fit.BASE_TYPE_FLOAT64:
            data.writeDouble(Fit.FLOAT64_INVALID);
            break;
          default:
            break;
        }
      } else {
        switch (this.getType()) {
          case Fit.BASE_TYPE_ENUM:
          case Fit.BASE_TYPE_UINT8:
          case Fit.BASE_TYPE_UINT8Z:
          case Fit.BASE_TYPE_SINT8:
          case Fit.BASE_TYPE_BYTE: {
            if (typeof value === 'string') {
              console.error(
                `Field.write(): Field ${this.getFieldName()} value should not be a string value ${value}`
              );
            }
            data.writeByte(Math.round(Number(value)));
            break;
          }

          case Fit.BASE_TYPE_SINT16:
          case Fit.BASE_TYPE_UINT16:
          case Fit.BASE_TYPE_UINT16Z: {
            data.writeShort(Math.round(Number(value)));
            break;
          }

          case Fit.BASE_TYPE_SINT32:
          case Fit.BASE_TYPE_UINT32:
          case Fit.BASE_TYPE_UINT32Z: {
            data.writeInt(Math.round(Number(value)));
            break;
          }

          case Fit.BASE_TYPE_STRING: {
            const stringWriter: OutputStreamWriter = new OutputStreamWriter(
              outStream,
              'UTF-8'
            );
            stringWriter.write(value.toString());
            stringWriter.flush();
            outStream.write(0);
            break;
          }

          case Fit.BASE_TYPE_FLOAT32: {
            data.writeFloat(value);
            break;
          }

          case Fit.BASE_TYPE_FLOAT64: {
            data.writeDouble(value);
            break;
          }

          case Fit.BASE_TYPE_SINT64:
          case Fit.BASE_TYPE_UINT64:
          case Fit.BASE_TYPE_UINT64Z: {
            data.writeLong(Number(value));
            break;
          }

          default:
            break;
        }
      }
    } catch (e) {}
  }
}
export default FieldBase;

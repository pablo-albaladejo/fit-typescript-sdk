import ProtocolVersion from './ProtocolVersion';

class Fit {
  public static debug = false;

  public static readonly PROTOCOL_VERSION =
    ProtocolVersion.getHighestVersion().getVersion();
  public static readonly PROTOCOL_VERSION_MAJOR_SHIFT = 4;
  public static readonly PROTOCOL_VERSION_MAJOR_MASK =
    0x0f << Fit.PROTOCOL_VERSION_MAJOR_SHIFT;
  public static readonly PROTOCOL_VERSION_MINOR_MASK = 0x0f;
  public static readonly PROTOCOL_VERSION_MAJOR =
    ProtocolVersion.getHighestVersion().getMajor();
  public static readonly PROTOCOL_VERSION_MINOR =
    ProtocolVersion.getHighestVersion().getMinor();

  public static readonly PROFILE_VERSION_MAJOR = 21;
  public static readonly PROFILE_VERSION_MINOR = 115;
  public static readonly PROFILE_TYPE = 'Release';
  public static readonly PROFILE_VERSION_SCALE = 1000;
  public static readonly PROFILE_VERSION =
    Fit.PROFILE_VERSION_MAJOR * Fit.PROFILE_VERSION_SCALE +
    Fit.PROFILE_VERSION_MINOR;

  public static readonly ANTFS_FILE_DATA_TYPE = 128;

  public static readonly FILE_HDR_SIZE = 14;

  public static readonly HDR_SIZE = 1;
  public static readonly HDR_TIME_REC_BIT = 0x80;
  public static readonly HDR_TIME_TYPE_MASK = 0x60;
  public static readonly HDR_TIME_TYPE_SHIFT = 5;
  public static readonly HDR_TIME_OFFSET_MASK = 0x1f;
  public static readonly HDR_TYPE_DEF_BIT = 0x40;
  public static readonly HDR_DEV_FIELDS_BIT = 0x20;
  public static readonly HDR_TYPE_MASK = 0x0f;
  static readonly MAX_LOCAL_MESGS = Fit.HDR_TYPE_MASK + 1;

  public static readonly CRC_SIZE = 2;

  public static readonly MAX_MESG_SIZE = 65535;

  public static readonly ARCH_ENDIAN_MASK = 0x01;
  public static readonly ARCH_ENDIAN_LITTLE = 0;
  public static readonly ARCH_ENDIAN_BIG = 1;

  public static readonly MAX_FIELD_SIZE = 255;

  public static readonly FIELD_NUM_INVALID = 255;
  public static readonly FIELD_NUM_MESSAGE_INDEX = 254;
  public static readonly FIELD_NUM_TIMESTAMP = 253;
  public static readonly FIELD_DEFAULT_SCALE = 1;
  public static readonly FIELD_DEFAULT_OFFSET = 0;

  public static readonly SUBFIELD_INDEX_ACTIVE_SUBFIELD = 65534;
  public static readonly SUBFIELD_INDEX_MAIN_FIELD = 65535;
  public static readonly SUBFIELD_NAME_MAIN_FIELD = '';

  public static readonly BASE_TYPE_ENDIAN_FLAG = 0x80;
  public static readonly BASE_TYPE_RESERVED = 0x60;
  public static readonly BASE_TYPE_NUM_MASK = 0x1f;

  public static readonly ENUM_MAX = 0xff;
  public static readonly ENUM_MIN = 0x00;
  public static readonly ENUM_INVALID = 0xff;
  public static readonly BASE_TYPE_ENUM = 0x00;

  public static readonly SINT8_MAX = 0x7f;
  public static readonly SINT8_MIN = -0x80;
  public static readonly SINT8_INVALID = 0x7f;
  public static readonly BASE_TYPE_SINT8 = 0x01;

  public static readonly UINT8_MAX = 0xff;
  public static readonly UINT8_MIN = 0x00;
  public static readonly UINT8_INVALID = 0xff;
  public static readonly BASE_TYPE_UINT8 = 0x02;

  public static readonly SINT16_MAX = 0x7fff;
  public static readonly SINT16_MIN = -0x8000;
  public static readonly SINT16_INVALID = 0x7fff;
  public static readonly BASE_TYPE_SINT16 = 0x83;

  public static readonly UINT16_MAX = 0xffff;
  public static readonly UINT16_MIN = 0x0000;
  public static readonly UINT16_INVALID = 0xffff;
  public static readonly BASE_TYPE_UINT16 = 0x84;

  public static readonly SINT32_MAX = 0x7fffffff;
  public static readonly SINT32_MIN = -0x80000000;
  public static readonly SINT32_INVALID = 0x7fffffff;
  public static readonly BASE_TYPE_SINT32 = 0x85;

  public static readonly UINT32_MAX = 0xffffffff;
  public static readonly UINT32_MIN = 0x00000000;
  public static readonly UINT32_INVALID = 0xffffffff;
  public static readonly BASE_TYPE_UINT32 = 0x86;

  public static readonly STRING_INVALID = '';
  public static readonly BASE_TYPE_STRING = 0x07;
  public static readonly STRING_MAX_BYTE_COUNT = Fit.MAX_FIELD_SIZE - 1; // Reserve 1 byte for the null terminator that is appended to all strings during encoding

  public static readonly FLOAT32_INVALID = Number.NaN;
  public static readonly FLOAT32_MAX = Number.MAX_VALUE;
  public static readonly FLOAT32_MIN = -Number.MAX_VALUE;
  public static readonly BASE_TYPE_FLOAT32 = 0x88;

  public static readonly FLOAT64_INVALID = Number.NaN;
  public static readonly FLOAT64_MAX = Number.MAX_VALUE;
  public static readonly FLOAT64_MIN = -Number.MAX_VALUE;
  public static readonly BASE_TYPE_FLOAT64 = 0x89;

  public static readonly UINT8Z_MAX = 0xff;
  public static readonly UINT8Z_MIN = 0x00;
  public static readonly UINT8Z_INVALID = 0x00;
  public static readonly BASE_TYPE_UINT8Z = 0x0a;

  public static readonly UINT16Z_MAX = 0xffff;
  public static readonly UINT16Z_MIN = 0x0000;
  public static readonly UINT16Z_INVALID = 0x0000;
  public static readonly BASE_TYPE_UINT16Z = 0x8b;

  public static readonly UINT32Z_MAX = 0xffffffff;
  public static readonly UINT32Z_MIN = 0x00000000;
  public static readonly UINT32Z_INVALID = 0x00000000;
  public static readonly BASE_TYPE_UINT32Z = 0x8c;

  public static readonly BYTE_MAX = 0xff;
  public static readonly BYTE_MIN = 0x00;
  public static readonly BYTE_INVALID = 0xff;
  public static readonly BASE_TYPE_BYTE = 0x0d;

  public static readonly SINT64_MAX = 0x7fffffffffffffff;
  public static readonly SINT64_MIN = -0x8000000000000000;
  public static readonly SINT64_INVALID = 0x7fffffffffffffff;
  public static readonly BASE_TYPE_SINT64 = 0x8e;

  public static readonly UINT64_MAX = BigInt('0xFFFFFFFFFFFFFFFF');
  public static readonly UINT64_MIN = BigInt('0x0000000000000000');
  public static readonly UINT64_INVALID = BigInt('0xFFFFFFFFFFFFFFFF');
  public static readonly BASE_TYPE_UINT64 = 0x8f;

  public static readonly UINT64Z_MAX = BigInt('0xFFFFFFFFFFFFFFFF');
  public static readonly UINT64Z_MIN = BigInt('0x0000000000000000');
  public static readonly UINT64Z_INVALID = BigInt('0x0000000000000000');
  public static readonly BASE_TYPE_UINT64Z = 0x90;
  public static readonly BASE_TYPES = 17;

  public static readonly baseTypeSizes = [
    1, 1, 1, 2, 2, 4, 4, 1, 4, 8, 1, 2, 4, 1, 8, 8, 8,
  ];

  public static readonly UTF8_BOM_BYTE_1 = 0xef;
  public static readonly UTF8_BOM_BYTE_2 = 0xbb;
  public static readonly UTF8_BOM_BYTE_3 = 0xbf;
  public static readonly UTF8_BOM_BYTES = [
    Fit.UTF8_BOM_BYTE_1,
    Fit.UTF8_BOM_BYTE_2,
    Fit.UTF8_BOM_BYTE_3,
  ];
  public static readonly UTF8_NUM_BOM_BYTES = 3;
  public static readonly UTF8_BOM = '\uFEFF';

  // This flag enables deprecated behaviour in the SDK.
  //
  // As of 16.10:
  //
  //    If a get method is used on a field containing invalid
  //    values, null is returned. When disabled, an appropriate
  //    invalid value is returned instead.
  public static readonly ENABLE_LEGACY_BEHAVIOUR = true;

  public static readonly baseTypeInvalidMap = new Map<number, any>([
    [Fit.BASE_TYPE_ENUM, Fit.ENUM_INVALID],
    [Fit.BASE_TYPE_SINT8, Fit.SINT8_INVALID],
    [Fit.BASE_TYPE_UINT8, Fit.UINT8_INVALID],
    [Fit.BASE_TYPE_SINT16, Fit.SINT16_INVALID],
    [Fit.BASE_TYPE_UINT16, Fit.UINT16_INVALID],
    [Fit.BASE_TYPE_SINT32, Fit.SINT32_INVALID],
    [Fit.BASE_TYPE_UINT32, Fit.UINT32_INVALID],
    [Fit.BASE_TYPE_STRING, Fit.STRING_INVALID],
    [Fit.BASE_TYPE_FLOAT32, Fit.FLOAT32_INVALID],
    [Fit.BASE_TYPE_FLOAT64, Fit.FLOAT64_INVALID],
    [Fit.BASE_TYPE_UINT8Z, Fit.UINT8Z_INVALID],
    [Fit.BASE_TYPE_UINT16Z, Fit.UINT16Z_INVALID],
    [Fit.BASE_TYPE_UINT32Z, Fit.UINT32Z_INVALID],
    [Fit.BASE_TYPE_BYTE, Fit.BYTE_INVALID],
    [Fit.BASE_TYPE_SINT64, Fit.SINT64_INVALID],
    [Fit.BASE_TYPE_UINT64, Fit.UINT64_INVALID],
    [Fit.BASE_TYPE_UINT64Z, Fit.UINT64Z_INVALID],
  ]);

  public static readonly baseTypeMinMap = new Map<number, any>([
    [Fit.BASE_TYPE_ENUM, Fit.ENUM_MIN],
    [Fit.BASE_TYPE_SINT8, Fit.SINT8_MIN],
    [Fit.BASE_TYPE_UINT8, Fit.UINT8_MIN],
    [Fit.BASE_TYPE_SINT16, Fit.SINT16_MIN],
    [Fit.BASE_TYPE_UINT16, Fit.UINT16_MIN],
    [Fit.BASE_TYPE_SINT32, Fit.SINT32_MIN],
    [Fit.BASE_TYPE_UINT32, Fit.UINT32_MIN],
    [Fit.BASE_TYPE_FLOAT32, Fit.FLOAT32_MIN],
    [Fit.BASE_TYPE_FLOAT64, Fit.FLOAT64_MIN],
    [Fit.BASE_TYPE_UINT8Z, Fit.UINT8Z_MIN],
    [Fit.BASE_TYPE_UINT16Z, Fit.UINT16Z_MIN],
    [Fit.BASE_TYPE_UINT32Z, Fit.UINT32Z_MIN],
    [Fit.BASE_TYPE_BYTE, Fit.BYTE_MIN],
    [Fit.BASE_TYPE_SINT64, Fit.SINT64_MIN],
    [Fit.BASE_TYPE_UINT64, Fit.UINT64_MIN],
    [Fit.BASE_TYPE_UINT64Z, Fit.UINT64Z_MIN],
  ]);

  public static readonly baseTypeMaxMap = new Map<number, any>([
    [Fit.BASE_TYPE_ENUM, Fit.ENUM_MAX],
    [Fit.BASE_TYPE_SINT8, Fit.SINT8_MAX],
    [Fit.BASE_TYPE_UINT8, Fit.UINT8_MAX],
    [Fit.BASE_TYPE_SINT16, Fit.SINT16_MAX],
    [Fit.BASE_TYPE_UINT16, Fit.UINT16_MAX],
    [Fit.BASE_TYPE_SINT32, Fit.SINT32_MAX],
    [Fit.BASE_TYPE_UINT32, Fit.UINT32_MAX],
    // [Fit.BASE_TYPE_STRING, Fit.STRING_MAX],
    [Fit.BASE_TYPE_FLOAT32, Fit.FLOAT32_MAX],
    [Fit.BASE_TYPE_FLOAT64, Fit.FLOAT64_MAX],
    [Fit.BASE_TYPE_UINT8Z, Fit.UINT8Z_MAX],
    [Fit.BASE_TYPE_UINT16Z, Fit.UINT16Z_MAX],
    [Fit.BASE_TYPE_UINT32Z, Fit.UINT32Z_MAX],
    [Fit.BASE_TYPE_BYTE, Fit.BYTE_MAX],
    [Fit.BASE_TYPE_SINT64, Fit.SINT64_MAX],
    [Fit.BASE_TYPE_UINT64, Fit.UINT64_MAX],
    [Fit.BASE_TYPE_UINT64Z, Fit.UINT64Z_MAX],
  ]);
}

export default Fit;

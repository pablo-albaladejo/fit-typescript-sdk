import Fit from './Fit';

class MesgNum {
  public static readonly FILE_ID = 0;
  public static readonly CAPABILITIES = 1;
  public static readonly DEVICE_SETTINGS = 2;
  public static readonly USER_PROFILE = 3;
  public static readonly HRM_PROFILE = 4;
  public static readonly SDM_PROFILE = 5;
  public static readonly BIKE_PROFILE = 6;
  public static readonly ZONES_TARGET = 7;
  public static readonly HR_ZONE = 8;
  public static readonly POWER_ZONE = 9;
  public static readonly MET_ZONE = 10;
  public static readonly SPORT = 12;
  public static readonly GOAL = 15;
  public static readonly SESSION = 18;
  public static readonly LAP = 19;
  public static readonly RECORD = 20;
  public static readonly EVENT = 21;
  public static readonly DEVICE_INFO = 23;
  public static readonly WORKOUT = 26;
  public static readonly WORKOUT_STEP = 27;
  public static readonly SCHEDULE = 28;
  public static readonly WEIGHT_SCALE = 30;
  public static readonly COURSE = 31;
  public static readonly COURSE_POINT = 32;
  public static readonly TOTALS = 33;
  public static readonly ACTIVITY = 34;
  public static readonly SOFTWARE = 35;
  public static readonly FILE_CAPABILITIES = 37;
  public static readonly MESG_CAPABILITIES = 38;
  public static readonly FIELD_CAPABILITIES = 39;
  public static readonly FILE_CREATOR = 49;
  public static readonly BLOOD_PRESSURE = 51;
  public static readonly SPEED_ZONE = 53;
  public static readonly MONITORING = 55;
  public static readonly TRAINING_FILE = 72;
  public static readonly HRV = 78;
  public static readonly ANT_RX = 80;
  public static readonly ANT_TX = 81;
  public static readonly ANT_CHANNEL_ID = 82;
  public static readonly LENGTH = 101;
  public static readonly MONITORING_INFO = 103;
  public static readonly PAD = 105;
  public static readonly SLAVE_DEVICE = 106;
  public static readonly CONNECTIVITY = 127;
  public static readonly WEATHER_CONDITIONS = 128;
  public static readonly WEATHER_ALERT = 129;
  public static readonly CADENCE_ZONE = 131;
  public static readonly HR = 132;
  public static readonly SEGMENT_LAP = 142;
  public static readonly MEMO_GLOB = 145;
  public static readonly SEGMENT_ID = 148;
  public static readonly SEGMENT_LEADERBOARD_ENTRY = 149;
  public static readonly SEGMENT_POINT = 150;
  public static readonly SEGMENT_FILE = 151;
  public static readonly WORKOUT_SESSION = 158;
  public static readonly WATCHFACE_SETTINGS = 159;
  public static readonly GPS_METADATA = 160;
  public static readonly CAMERA_EVENT = 161;
  public static readonly TIMESTAMP_CORRELATION = 162;
  public static readonly GYROSCOPE_DATA = 164;
  public static readonly ACCELEROMETER_DATA = 165;
  public static readonly THREE_D_SENSOR_CALIBRATION = 167;
  public static readonly VIDEO_FRAME = 169;
  public static readonly OBDII_DATA = 174;
  public static readonly NMEA_SENTENCE = 177;
  public static readonly AVIATION_ATTITUDE = 178;
  public static readonly VIDEO = 184;
  public static readonly VIDEO_TITLE = 185;
  public static readonly VIDEO_DESCRIPTION = 186;
  public static readonly VIDEO_CLIP = 187;
  public static readonly OHR_SETTINGS = 188;
  public static readonly EXD_SCREEN_CONFIGURATION = 200;
  public static readonly EXD_DATA_FIELD_CONFIGURATION = 201;
  public static readonly EXD_DATA_CONCEPT_CONFIGURATION = 202;
  public static readonly FIELD_DESCRIPTION = 206;
  public static readonly DEVELOPER_DATA_ID = 207;
  public static readonly MAGNETOMETER_DATA = 208;
  public static readonly BAROMETER_DATA = 209;
  public static readonly ONE_D_SENSOR_CALIBRATION = 210;
  public static readonly MONITORING_HR_DATA = 211;
  public static readonly TIME_IN_ZONE = 216;
  public static readonly SET = 225;
  public static readonly STRESS_LEVEL = 227;
  public static readonly MAX_MET_DATA = 229;
  public static readonly DIVE_SETTINGS = 258;
  public static readonly DIVE_GAS = 259;
  public static readonly DIVE_ALARM = 262;
  public static readonly EXERCISE_TITLE = 264;
  public static readonly DIVE_SUMMARY = 268;
  public static readonly SPO2_DATA = 269;
  public static readonly SLEEP_LEVEL = 275;
  public static readonly JUMP = 285;
  public static readonly BEAT_INTERVALS = 290;
  public static readonly RESPIRATION_RATE = 297;
  public static readonly SPLIT = 312;
  public static readonly CLIMB_PRO = 317;
  public static readonly TANK_UPDATE = 319;
  public static readonly TANK_SUMMARY = 323;
  public static readonly SLEEP_ASSESSMENT = 346;
  public static readonly HRV_STATUS_SUMMARY = 370;
  public static readonly HRV_VALUE = 371;
  public static readonly DEVICE_AUX_BATTERY_INFO = 375;
  public static readonly DIVE_APNEA_ALARM = 393;
  public static readonly MFG_RANGE_MIN = 0xFF00; // 0xFF00 - 0xFFFE reserved for manufacturer specific messages
  public static readonly MFG_RANGE_MAX = 0xFFFE; // 0xFF00 - 0xFFFE reserved for manufacturer specific messages
  public static readonly INVALID = Fit.UINT16_INVALID;

  private static readonly stringMap: Map<number, string> = new Map([
    [MesgNum.FILE_ID, "FILE_ID"],
    [MesgNum.CAPABILITIES, "CAPABILITIES"],
    [MesgNum.DEVICE_SETTINGS, "DEVICE_SETTINGS"],
    [MesgNum.USER_PROFILE, "USER_PROFILE"],
    [MesgNum.HRM_PROFILE, "HRM_PROFILE"],
    [MesgNum.SDM_PROFILE, "SDM_PROFILE"],
    [MesgNum.BIKE_PROFILE, "BIKE_PROFILE"],
    [MesgNum.ZONES_TARGET, "ZONES_TARGET"],
    [MesgNum.HR_ZONE, "HR_ZONE"],
    [MesgNum.POWER_ZONE, "POWER_ZONE"],
    [MesgNum.MET_ZONE, "MET_ZONE"],
    [MesgNum.SPORT, "SPORT"],
    [MesgNum.GOAL, "GOAL"],
    [MesgNum.SESSION, "SESSION"],
    [MesgNum.LAP, "LAP"],
    [MesgNum.RECORD, "RECORD"],
    [MesgNum.EVENT, "EVENT"],
    [MesgNum.DEVICE_INFO, "DEVICE_INFO"],
    [MesgNum.WORKOUT, "WORKOUT"],
    [MesgNum.WORKOUT_STEP, "WORKOUT_STEP"],
    [MesgNum.SCHEDULE, "SCHEDULE"],
    [MesgNum.WEIGHT_SCALE, "WEIGHT_SCALE"],
    [MesgNum.COURSE, "COURSE"],
    [MesgNum.COURSE_POINT, "COURSE_POINT"],
    [MesgNum.TOTALS, "TOTALS"],
    [MesgNum.ACTIVITY, "ACTIVITY"],
    [MesgNum.SOFTWARE, "SOFTWARE"],
    [MesgNum.FILE_CAPABILITIES, "FILE_CAPABILITIES"],
    [MesgNum.MESG_CAPABILITIES, "MESG_CAPABILITIES"],
    [MesgNum.FIELD_CAPABILITIES, "FIELD_CAPABILITIES"],
    [MesgNum.FILE_CREATOR, "FILE_CREATOR"],
    [MesgNum.BLOOD_PRESSURE, "BLOOD_PRESSURE"],
    [MesgNum.SPEED_ZONE, "SPEED_ZONE"],
    [MesgNum.MONITORING, "MONITORING"],
    [MesgNum.TRAINING_FILE, "TRAINING_FILE"],
    [MesgNum.HRV, "HRV"],
    [MesgNum.ANT_RX, "ANT_RX"],
    [MesgNum.ANT_TX, "ANT_TX"],
    [MesgNum.ANT_CHANNEL_ID, "ANT_CHANNEL_ID"],
    [MesgNum.LENGTH, "LENGTH"],
    [MesgNum.MONITORING_INFO, "MONITORING_INFO"],
    [MesgNum.PAD, "PAD"],
    [MesgNum.SLAVE_DEVICE, "SLAVE_DEVICE"],
    [MesgNum.CONNECTIVITY, "CONNECTIVITY"],
    [MesgNum.WEATHER_CONDITIONS, "WEATHER_CONDITIONS"],
    [MesgNum.WEATHER_ALERT, "WEATHER_ALERT"],
    [MesgNum.CADENCE_ZONE, "CADENCE_ZONE"],
    [MesgNum.HR, "HR"],
    [MesgNum.SEGMENT_LAP, "SEGMENT_LAP"],
    [MesgNum.MEMO_GLOB, "MEMO_GLOB"],
    [MesgNum.SEGMENT_ID, "SEGMENT_ID"],
    [MesgNum.SEGMENT_LEADERBOARD_ENTRY, "SEGMENT_LEADERBOARD_ENTRY"],
    [MesgNum.SEGMENT_POINT, "SEGMENT_POINT"],
    [MesgNum.SEGMENT_FILE, "SEGMENT_FILE"],
    [MesgNum.WORKOUT_SESSION, "WORKOUT_SESSION"],
    [MesgNum.WATCHFACE_SETTINGS, "WATCHFACE_SETTINGS"],
    [MesgNum.GPS_METADATA, "GPS_METADATA"],
    [MesgNum.CAMERA_EVENT, "CAMERA_EVENT"],
    [MesgNum.TIMESTAMP_CORRELATION, "TIMESTAMP_CORRELATION"],
    [MesgNum.GYROSCOPE_DATA, "GYROSCOPE_DATA"],
    [MesgNum.ACCELEROMETER_DATA, "ACCELEROMETER_DATA"],
    [MesgNum.THREE_D_SENSOR_CALIBRATION, "THREE_D_SENSOR_CALIBRATION"],
    [MesgNum.VIDEO_FRAME, "VIDEO_FRAME"],
    [MesgNum.OBDII_DATA, "OBDII_DATA"],
    [MesgNum.NMEA_SENTENCE, "NMEA_SENTENCE"],
    [MesgNum.AVIATION_ATTITUDE, "AVIATION_ATTITUDE"],
    [MesgNum.VIDEO, "VIDEO"],
    [MesgNum.VIDEO_TITLE, "VIDEO_TITLE"],
    [MesgNum.VIDEO_DESCRIPTION, "VIDEO_DESCRIPTION"],
    [MesgNum.VIDEO_CLIP, "VIDEO_CLIP"],
    [MesgNum.OHR_SETTINGS, "OHR_SETTINGS"],
    [MesgNum.EXD_SCREEN_CONFIGURATION, "EXD_SCREEN_CONFIGURATION"],
    [MesgNum.EXD_DATA_FIELD_CONFIGURATION, "EXD_DATA_FIELD_CONFIGURATION"],
    [MesgNum.EXD_DATA_CONCEPT_CONFIGURATION, "EXD_DATA_CONCEPT_CONFIGURATION"],
    [MesgNum.FIELD_DESCRIPTION, "FIELD_DESCRIPTION"],
    [MesgNum.DEVELOPER_DATA_ID, "DEVELOPER_DATA_ID"],
    [MesgNum.MAGNETOMETER_DATA, "MAGNETOMETER_DATA"],
    [MesgNum.BAROMETER_DATA, "BAROMETER_DATA"],
    [MesgNum.ONE_D_SENSOR_CALIBRATION, "ONE_D_SENSOR_CALIBRATION"],
    [MesgNum.MONITORING_HR_DATA, "MONITORING_HR_DATA"],
    [MesgNum.TIME_IN_ZONE, "TIME_IN_ZONE"],
    [MesgNum.SET, "SET"],
    [MesgNum.STRESS_LEVEL, "STRESS_LEVEL"],
    [MesgNum.MAX_MET_DATA, "MAX_MET_DATA"],
    [MesgNum.DIVE_SETTINGS, "DIVE_SETTINGS"],
    [MesgNum.DIVE_GAS, "DIVE_GAS"],
    [MesgNum.DIVE_ALARM, "DIVE_ALARM"],
    [MesgNum.EXERCISE_TITLE, "EXERCISE_TITLE"],
    [MesgNum.DIVE_SUMMARY, "DIVE_SUMMARY"],
    [MesgNum.SPO2_DATA, "SPO2_DATA"],
    [MesgNum.SLEEP_LEVEL, "SLEEP_LEVEL"],
    [MesgNum.JUMP, "JUMP"],
    [MesgNum.BEAT_INTERVALS, "BEAT_INTERVALS"],
    [MesgNum.RESPIRATION_RATE, "RESPIRATION_RATE"],
    [MesgNum.SPLIT, "SPLIT"],
    [MesgNum.CLIMB_PRO, "CLIMB_PRO"],
    [MesgNum.TANK_UPDATE, "TANK_UPDATE"],
    [MesgNum.TANK_SUMMARY, "TANK_SUMMARY"],
    [MesgNum.SLEEP_ASSESSMENT, "SLEEP_ASSESSMENT"],
    [MesgNum.HRV_STATUS_SUMMARY, "HRV_STATUS_SUMMARY"],
    [MesgNum.HRV_VALUE, "HRV_VALUE"],
    [MesgNum.DEVICE_AUX_BATTERY_INFO, "DEVICE_AUX_BATTERY_INFO"],
    [MesgNum.DIVE_APNEA_ALARM, "DIVE_APNEA_ALARM"],
    [MesgNum.MFG_RANGE_MIN, "MFG_RANGE_MIN"],
    [MesgNum.MFG_RANGE_MAX, "MFG_RANGE_MAX"],
  ]);

  /**
   * Retrieves the String Representation of the Value
   * @param value The enum constant
   * @return The name of this enum constant
   */
  public static getStringFromValue(value: number): string {
    return MesgNum.stringMap.get(value) || "";
  }

  /**
   * Returns the enum constant with the specified name.
   * @param value The enum string value
   * @return The enum constant or INVALID if unknown
   */
  public static getValueFromString(value: string): number {
    for (const [key, val] of MesgNum.stringMap) {
      if (val === value) {
        return key;
      }
    }
    return MesgNum.INVALID;
  }
}
export default MesgNum;
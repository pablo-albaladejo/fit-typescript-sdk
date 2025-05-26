declare class MesgNum {
    static readonly FILE_ID = 0;
    static readonly CAPABILITIES = 1;
    static readonly DEVICE_SETTINGS = 2;
    static readonly USER_PROFILE = 3;
    static readonly HRM_PROFILE = 4;
    static readonly SDM_PROFILE = 5;
    static readonly BIKE_PROFILE = 6;
    static readonly ZONES_TARGET = 7;
    static readonly HR_ZONE = 8;
    static readonly POWER_ZONE = 9;
    static readonly MET_ZONE = 10;
    static readonly SPORT = 12;
    static readonly GOAL = 15;
    static readonly SESSION = 18;
    static readonly LAP = 19;
    static readonly RECORD = 20;
    static readonly EVENT = 21;
    static readonly DEVICE_INFO = 23;
    static readonly WORKOUT = 26;
    static readonly WORKOUT_STEP = 27;
    static readonly SCHEDULE = 28;
    static readonly WEIGHT_SCALE = 30;
    static readonly COURSE = 31;
    static readonly COURSE_POINT = 32;
    static readonly TOTALS = 33;
    static readonly ACTIVITY = 34;
    static readonly SOFTWARE = 35;
    static readonly FILE_CAPABILITIES = 37;
    static readonly MESG_CAPABILITIES = 38;
    static readonly FIELD_CAPABILITIES = 39;
    static readonly FILE_CREATOR = 49;
    static readonly BLOOD_PRESSURE = 51;
    static readonly SPEED_ZONE = 53;
    static readonly MONITORING = 55;
    static readonly TRAINING_FILE = 72;
    static readonly HRV = 78;
    static readonly ANT_RX = 80;
    static readonly ANT_TX = 81;
    static readonly ANT_CHANNEL_ID = 82;
    static readonly LENGTH = 101;
    static readonly MONITORING_INFO = 103;
    static readonly PAD = 105;
    static readonly SLAVE_DEVICE = 106;
    static readonly CONNECTIVITY = 127;
    static readonly WEATHER_CONDITIONS = 128;
    static readonly WEATHER_ALERT = 129;
    static readonly CADENCE_ZONE = 131;
    static readonly HR = 132;
    static readonly SEGMENT_LAP = 142;
    static readonly MEMO_GLOB = 145;
    static readonly SEGMENT_ID = 148;
    static readonly SEGMENT_LEADERBOARD_ENTRY = 149;
    static readonly SEGMENT_POINT = 150;
    static readonly SEGMENT_FILE = 151;
    static readonly WORKOUT_SESSION = 158;
    static readonly WATCHFACE_SETTINGS = 159;
    static readonly GPS_METADATA = 160;
    static readonly CAMERA_EVENT = 161;
    static readonly TIMESTAMP_CORRELATION = 162;
    static readonly GYROSCOPE_DATA = 164;
    static readonly ACCELEROMETER_DATA = 165;
    static readonly THREE_D_SENSOR_CALIBRATION = 167;
    static readonly VIDEO_FRAME = 169;
    static readonly OBDII_DATA = 174;
    static readonly NMEA_SENTENCE = 177;
    static readonly AVIATION_ATTITUDE = 178;
    static readonly VIDEO = 184;
    static readonly VIDEO_TITLE = 185;
    static readonly VIDEO_DESCRIPTION = 186;
    static readonly VIDEO_CLIP = 187;
    static readonly OHR_SETTINGS = 188;
    static readonly EXD_SCREEN_CONFIGURATION = 200;
    static readonly EXD_DATA_FIELD_CONFIGURATION = 201;
    static readonly EXD_DATA_CONCEPT_CONFIGURATION = 202;
    static readonly FIELD_DESCRIPTION = 206;
    static readonly DEVELOPER_DATA_ID = 207;
    static readonly MAGNETOMETER_DATA = 208;
    static readonly BAROMETER_DATA = 209;
    static readonly ONE_D_SENSOR_CALIBRATION = 210;
    static readonly MONITORING_HR_DATA = 211;
    static readonly TIME_IN_ZONE = 216;
    static readonly SET = 225;
    static readonly STRESS_LEVEL = 227;
    static readonly MAX_MET_DATA = 229;
    static readonly DIVE_SETTINGS = 258;
    static readonly DIVE_GAS = 259;
    static readonly DIVE_ALARM = 262;
    static readonly EXERCISE_TITLE = 264;
    static readonly DIVE_SUMMARY = 268;
    static readonly SPO2_DATA = 269;
    static readonly SLEEP_LEVEL = 275;
    static readonly JUMP = 285;
    static readonly BEAT_INTERVALS = 290;
    static readonly RESPIRATION_RATE = 297;
    static readonly SPLIT = 312;
    static readonly CLIMB_PRO = 317;
    static readonly TANK_UPDATE = 319;
    static readonly TANK_SUMMARY = 323;
    static readonly SLEEP_ASSESSMENT = 346;
    static readonly HRV_STATUS_SUMMARY = 370;
    static readonly HRV_VALUE = 371;
    static readonly DEVICE_AUX_BATTERY_INFO = 375;
    static readonly DIVE_APNEA_ALARM = 393;
    static readonly MFG_RANGE_MIN = 65280;
    static readonly MFG_RANGE_MAX = 65534;
    static readonly INVALID = 65535;
    private static readonly stringMap;
    /**
     * Retrieves the String Representation of the Value
     * @param value The enum constant
     * @return The name of this enum constant
     */
    static getStringFromValue(value: number): string;
    /**
     * Returns the enum constant with the specified name.
     * @param value The enum string value
     * @return The enum constant or INVALID if unknown
     */
    static getValueFromString(value: string): number;
}
export default MesgNum;

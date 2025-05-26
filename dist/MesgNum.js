"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fit_1 = __importDefault(require("./Fit"));
class MesgNum {
    /**
     * Retrieves the String Representation of the Value
     * @param value The enum constant
     * @return The name of this enum constant
     */
    static getStringFromValue(value) {
        return MesgNum.stringMap.get(value) || "";
    }
    /**
     * Returns the enum constant with the specified name.
     * @param value The enum string value
     * @return The enum constant or INVALID if unknown
     */
    static getValueFromString(value) {
        for (const [key, val] of MesgNum.stringMap) {
            if (val === value) {
                return key;
            }
        }
        return MesgNum.INVALID;
    }
}
MesgNum.FILE_ID = 0;
MesgNum.CAPABILITIES = 1;
MesgNum.DEVICE_SETTINGS = 2;
MesgNum.USER_PROFILE = 3;
MesgNum.HRM_PROFILE = 4;
MesgNum.SDM_PROFILE = 5;
MesgNum.BIKE_PROFILE = 6;
MesgNum.ZONES_TARGET = 7;
MesgNum.HR_ZONE = 8;
MesgNum.POWER_ZONE = 9;
MesgNum.MET_ZONE = 10;
MesgNum.SPORT = 12;
MesgNum.GOAL = 15;
MesgNum.SESSION = 18;
MesgNum.LAP = 19;
MesgNum.RECORD = 20;
MesgNum.EVENT = 21;
MesgNum.DEVICE_INFO = 23;
MesgNum.WORKOUT = 26;
MesgNum.WORKOUT_STEP = 27;
MesgNum.SCHEDULE = 28;
MesgNum.WEIGHT_SCALE = 30;
MesgNum.COURSE = 31;
MesgNum.COURSE_POINT = 32;
MesgNum.TOTALS = 33;
MesgNum.ACTIVITY = 34;
MesgNum.SOFTWARE = 35;
MesgNum.FILE_CAPABILITIES = 37;
MesgNum.MESG_CAPABILITIES = 38;
MesgNum.FIELD_CAPABILITIES = 39;
MesgNum.FILE_CREATOR = 49;
MesgNum.BLOOD_PRESSURE = 51;
MesgNum.SPEED_ZONE = 53;
MesgNum.MONITORING = 55;
MesgNum.TRAINING_FILE = 72;
MesgNum.HRV = 78;
MesgNum.ANT_RX = 80;
MesgNum.ANT_TX = 81;
MesgNum.ANT_CHANNEL_ID = 82;
MesgNum.LENGTH = 101;
MesgNum.MONITORING_INFO = 103;
MesgNum.PAD = 105;
MesgNum.SLAVE_DEVICE = 106;
MesgNum.CONNECTIVITY = 127;
MesgNum.WEATHER_CONDITIONS = 128;
MesgNum.WEATHER_ALERT = 129;
MesgNum.CADENCE_ZONE = 131;
MesgNum.HR = 132;
MesgNum.SEGMENT_LAP = 142;
MesgNum.MEMO_GLOB = 145;
MesgNum.SEGMENT_ID = 148;
MesgNum.SEGMENT_LEADERBOARD_ENTRY = 149;
MesgNum.SEGMENT_POINT = 150;
MesgNum.SEGMENT_FILE = 151;
MesgNum.WORKOUT_SESSION = 158;
MesgNum.WATCHFACE_SETTINGS = 159;
MesgNum.GPS_METADATA = 160;
MesgNum.CAMERA_EVENT = 161;
MesgNum.TIMESTAMP_CORRELATION = 162;
MesgNum.GYROSCOPE_DATA = 164;
MesgNum.ACCELEROMETER_DATA = 165;
MesgNum.THREE_D_SENSOR_CALIBRATION = 167;
MesgNum.VIDEO_FRAME = 169;
MesgNum.OBDII_DATA = 174;
MesgNum.NMEA_SENTENCE = 177;
MesgNum.AVIATION_ATTITUDE = 178;
MesgNum.VIDEO = 184;
MesgNum.VIDEO_TITLE = 185;
MesgNum.VIDEO_DESCRIPTION = 186;
MesgNum.VIDEO_CLIP = 187;
MesgNum.OHR_SETTINGS = 188;
MesgNum.EXD_SCREEN_CONFIGURATION = 200;
MesgNum.EXD_DATA_FIELD_CONFIGURATION = 201;
MesgNum.EXD_DATA_CONCEPT_CONFIGURATION = 202;
MesgNum.FIELD_DESCRIPTION = 206;
MesgNum.DEVELOPER_DATA_ID = 207;
MesgNum.MAGNETOMETER_DATA = 208;
MesgNum.BAROMETER_DATA = 209;
MesgNum.ONE_D_SENSOR_CALIBRATION = 210;
MesgNum.MONITORING_HR_DATA = 211;
MesgNum.TIME_IN_ZONE = 216;
MesgNum.SET = 225;
MesgNum.STRESS_LEVEL = 227;
MesgNum.MAX_MET_DATA = 229;
MesgNum.DIVE_SETTINGS = 258;
MesgNum.DIVE_GAS = 259;
MesgNum.DIVE_ALARM = 262;
MesgNum.EXERCISE_TITLE = 264;
MesgNum.DIVE_SUMMARY = 268;
MesgNum.SPO2_DATA = 269;
MesgNum.SLEEP_LEVEL = 275;
MesgNum.JUMP = 285;
MesgNum.BEAT_INTERVALS = 290;
MesgNum.RESPIRATION_RATE = 297;
MesgNum.SPLIT = 312;
MesgNum.CLIMB_PRO = 317;
MesgNum.TANK_UPDATE = 319;
MesgNum.TANK_SUMMARY = 323;
MesgNum.SLEEP_ASSESSMENT = 346;
MesgNum.HRV_STATUS_SUMMARY = 370;
MesgNum.HRV_VALUE = 371;
MesgNum.DEVICE_AUX_BATTERY_INFO = 375;
MesgNum.DIVE_APNEA_ALARM = 393;
MesgNum.MFG_RANGE_MIN = 0xFF00; // 0xFF00 - 0xFFFE reserved for manufacturer specific messages
MesgNum.MFG_RANGE_MAX = 0xFFFE; // 0xFF00 - 0xFFFE reserved for manufacturer specific messages
MesgNum.INVALID = Fit_1.default.UINT16_INVALID;
MesgNum.stringMap = new Map([
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
exports.default = MesgNum;

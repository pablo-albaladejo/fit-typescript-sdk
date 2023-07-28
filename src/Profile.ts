import Fit from './Fit';
import LanguageBits0 from './LanguageBits0';
import LanguageBits1 from './LanguageBits1';
import LanguageBits2 from './LanguageBits2';
import LanguageBits3 from './LanguageBits3';
import LanguageBits4 from './LanguageBits4';
import MesgNum from './MesgNum';

enum Type {
  ENUM = 0,
  SINT8 = 1,
  UINT8 = 2,
  SINT16 = 3,
  UINT16 = 4,
  SINT32 = 5,
  UINT32 = 6,
  STRING = 7,
  FLOAT32 = 8,
  FLOAT64 = 9,
  UINT8Z = 10,
  UINT16Z = 11,
  UINT32Z = 12,
  BYTE = 13,
  SINT64 = 14,
  UINT64 = 15,
  UINT64Z = 16,
  BOOL = 17,
  FILE = 18,
  MESG_NUM = 19,
  CHECKSUM = 20,
  FILE_FLAGS = 21,
  MESG_COUNT = 22,
  DATE_TIME = 23,
  LOCAL_DATE_TIME = 24,
  MESSAGE_INDEX = 25,
  DEVICE_INDEX = 26,
  GENDER = 27,
  LANGUAGE = 28,
  LANGUAGE_BITS_0 = 29,
  LANGUAGE_BITS_1 = 30,
  LANGUAGE_BITS_2 = 31,
  LANGUAGE_BITS_3 = 32,
  LANGUAGE_BITS_4 = 33,
  TIME_ZONE = 34,
  DISPLAY_MEASURE = 35,
  DISPLAY_HEART = 36,
  DISPLAY_POWER = 37,
  DISPLAY_POSITION = 38,
  SWITCH = 39,
  SPORT = 40,
  SPORT_BITS_0 = 41,
  SPORT_BITS_1 = 42,
  SPORT_BITS_2 = 43,
  SPORT_BITS_3 = 44,
  SPORT_BITS_4 = 45,
  SPORT_BITS_5 = 46,
  SPORT_BITS_6 = 47,
  SUB_SPORT = 48,
  SPORT_EVENT = 49,
  ACTIVITY = 50,
  INTENSITY = 51,
  SESSION_TRIGGER = 52,
  AUTOLAP_TRIGGER = 53,
  LAP_TRIGGER = 54,
  TIME_MODE = 55,
  BACKLIGHT_MODE = 56,
  DATE_MODE = 57,
  BACKLIGHT_TIMEOUT = 58,
  EVENT = 59,
  EVENT_TYPE = 60,
  TIMER_TRIGGER = 61,
  FITNESS_EQUIPMENT_STATE = 62,
  TONE = 63,
  AUTOSCROLL = 64,
  ACTIVITY_CLASS = 65,
  HR_ZONE_CALC = 66,
  PWR_ZONE_CALC = 67,
  WKT_STEP_DURATION = 68,
  WKT_STEP_TARGET = 69,
  GOAL = 70,
  GOAL_RECURRENCE = 71,
  GOAL_SOURCE = 72,
  SCHEDULE = 73,
  COURSE_POINT = 74,
  MANUFACTURER = 75,
  GARMIN_PRODUCT = 76,
  ANTPLUS_DEVICE_TYPE = 77,
  ANT_NETWORK = 78,
  WORKOUT_CAPABILITIES = 79,
  BATTERY_STATUS = 80,
  HR_TYPE = 81,
  COURSE_CAPABILITIES = 82,
  WEIGHT = 83,
  WORKOUT_HR = 84,
  WORKOUT_POWER = 85,
  BP_STATUS = 86,
  USER_LOCAL_ID = 87,
  SWIM_STROKE = 88,
  ACTIVITY_TYPE = 89,
  ACTIVITY_SUBTYPE = 90,
  ACTIVITY_LEVEL = 91,
  SIDE = 92,
  LEFT_RIGHT_BALANCE = 93,
  LEFT_RIGHT_BALANCE_100 = 94,
  LENGTH_TYPE = 95,
  DAY_OF_WEEK = 96,
  CONNECTIVITY_CAPABILITIES = 97,
  WEATHER_REPORT = 98,
  WEATHER_STATUS = 99,
  WEATHER_SEVERITY = 100,
  WEATHER_SEVERE_TYPE = 101,
  TIME_INTO_DAY = 102,
  LOCALTIME_INTO_DAY = 103,
  STROKE_TYPE = 104,
  BODY_LOCATION = 105,
  SEGMENT_LAP_STATUS = 106,
  SEGMENT_LEADERBOARD_TYPE = 107,
  SEGMENT_DELETE_STATUS = 108,
  SEGMENT_SELECTION_TYPE = 109,
  SOURCE_TYPE = 110,
  LOCAL_DEVICE_TYPE = 111,
  BLE_DEVICE_TYPE = 112,
  ANT_CHANNEL_ID = 113,
  DISPLAY_ORIENTATION = 114,
  WORKOUT_EQUIPMENT = 115,
  WATCHFACE_MODE = 116,
  DIGITAL_WATCHFACE_LAYOUT = 117,
  ANALOG_WATCHFACE_LAYOUT = 118,
  RIDER_POSITION_TYPE = 119,
  POWER_PHASE_TYPE = 120,
  CAMERA_EVENT_TYPE = 121,
  SENSOR_TYPE = 122,
  BIKE_LIGHT_NETWORK_CONFIG_TYPE = 123,
  COMM_TIMEOUT_TYPE = 124,
  CAMERA_ORIENTATION_TYPE = 125,
  ATTITUDE_STAGE = 126,
  ATTITUDE_VALIDITY = 127,
  AUTO_SYNC_FREQUENCY = 128,
  EXD_LAYOUT = 129,
  EXD_DISPLAY_TYPE = 130,
  EXD_DATA_UNITS = 131,
  EXD_QUALIFIERS = 132,
  EXD_DESCRIPTORS = 133,
  AUTO_ACTIVITY_DETECT = 134,
  SUPPORTED_EXD_SCREEN_LAYOUTS = 135,
  FIT_BASE_TYPE = 136,
  TURN_TYPE = 137,
  BIKE_LIGHT_BEAM_ANGLE_MODE = 138,
  FIT_BASE_UNIT = 139,
  SET_TYPE = 140,
  MAX_MET_CATEGORY = 141,
  EXERCISE_CATEGORY = 142,
  BENCH_PRESS_EXERCISE_NAME = 143,
  CALF_RAISE_EXERCISE_NAME = 144,
  CARDIO_EXERCISE_NAME = 145,
  CARRY_EXERCISE_NAME = 146,
  CHOP_EXERCISE_NAME = 147,
  CORE_EXERCISE_NAME = 148,
  CRUNCH_EXERCISE_NAME = 149,
  CURL_EXERCISE_NAME = 150,
  DEADLIFT_EXERCISE_NAME = 151,
  FLYE_EXERCISE_NAME = 152,
  HIP_RAISE_EXERCISE_NAME = 153,
  HIP_STABILITY_EXERCISE_NAME = 154,
  HIP_SWING_EXERCISE_NAME = 155,
  HYPEREXTENSION_EXERCISE_NAME = 156,
  LATERAL_RAISE_EXERCISE_NAME = 157,
  LEG_CURL_EXERCISE_NAME = 158,
  LEG_RAISE_EXERCISE_NAME = 159,
  LUNGE_EXERCISE_NAME = 160,
  OLYMPIC_LIFT_EXERCISE_NAME = 161,
  PLANK_EXERCISE_NAME = 162,
  PLYO_EXERCISE_NAME = 163,
  PULL_UP_EXERCISE_NAME = 164,
  PUSH_UP_EXERCISE_NAME = 165,
  ROW_EXERCISE_NAME = 166,
  SHOULDER_PRESS_EXERCISE_NAME = 167,
  SHOULDER_STABILITY_EXERCISE_NAME = 168,
  SHRUG_EXERCISE_NAME = 169,
  SIT_UP_EXERCISE_NAME = 170,
  SQUAT_EXERCISE_NAME = 171,
  TOTAL_BODY_EXERCISE_NAME = 172,
  TRICEPS_EXTENSION_EXERCISE_NAME = 173,
  WARM_UP_EXERCISE_NAME = 174,
  RUN_EXERCISE_NAME = 175,
  WATER_TYPE = 176,
  TISSUE_MODEL_TYPE = 177,
  DIVE_GAS_STATUS = 178,
  DIVE_ALERT = 179,
  DIVE_ALARM_TYPE = 180,
  DIVE_BACKLIGHT_MODE = 181,
  SLEEP_LEVEL = 182,
  SPO2_MEASUREMENT_TYPE = 183,
  CCR_SETPOINT_SWITCH_MODE = 184,
  DIVE_GAS_MODE = 185,
  FAVERO_PRODUCT = 186,
  SPLIT_TYPE = 187,
  CLIMB_PRO_EVENT = 188,
  GAS_CONSUMPTION_RATE_TYPE = 189,
  TAP_SENSITIVITY = 190,
  RADAR_THREAT_LEVEL_TYPE = 191,
  MAX_MET_SPEED_SOURCE = 192,
  MAX_MET_HEART_RATE_SOURCE = 193,
  HRV_STATUS = 194,
  NO_FLY_TIME_MODE = 195,
  NUM_TYPES = 196,
}

class Profile {
  static readonly SubFields = {
    // file_id message, product field
    FILE_ID_MESG_PRODUCT_FIELD_FAVERO_PRODUCT: 0,
    FILE_ID_MESG_PRODUCT_FIELD_GARMIN_PRODUCT: 1,
    FILE_ID_MESG_PRODUCT_FIELD_SUBFIELDS: 2,
    FILE_ID_MESG_PRODUCT_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    FILE_ID_MESG_PRODUCT_FIELD_MAIN_FIELD: Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // slave_device message, product field
    SLAVE_DEVICE_MESG_PRODUCT_FIELD_FAVERO_PRODUCT: 0,
    SLAVE_DEVICE_MESG_PRODUCT_FIELD_GARMIN_PRODUCT: 1,
    SLAVE_DEVICE_MESG_PRODUCT_FIELD_SUBFIELDS: 2,
    SLAVE_DEVICE_MESG_PRODUCT_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    SLAVE_DEVICE_MESG_PRODUCT_FIELD_MAIN_FIELD: Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // mesg_capabilities message, count field
    MESG_CAPABILITIES_MESG_COUNT_FIELD_NUM_PER_FILE: 0,
    MESG_CAPABILITIES_MESG_COUNT_FIELD_MAX_PER_FILE: 1,
    MESG_CAPABILITIES_MESG_COUNT_FIELD_MAX_PER_FILE_TYPE: 2,
    MESG_CAPABILITIES_MESG_COUNT_FIELD_SUBFIELDS: 3,
    MESG_CAPABILITIES_MESG_COUNT_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    MESG_CAPABILITIES_MESG_COUNT_FIELD_MAIN_FIELD:
      Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // watchface_settings message, layout field
    WATCHFACE_SETTINGS_MESG_LAYOUT_FIELD_DIGITAL_LAYOUT: 0,
    WATCHFACE_SETTINGS_MESG_LAYOUT_FIELD_ANALOG_LAYOUT: 1,
    WATCHFACE_SETTINGS_MESG_LAYOUT_FIELD_SUBFIELDS: 2,
    WATCHFACE_SETTINGS_MESG_LAYOUT_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    WATCHFACE_SETTINGS_MESG_LAYOUT_FIELD_MAIN_FIELD:
      Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // dive_settings message, heart_rate_source field
    DIVE_SETTINGS_MESG_HEART_RATE_SOURCE_FIELD_HEART_RATE_ANTPLUS_DEVICE_TYPE: 0,
    DIVE_SETTINGS_MESG_HEART_RATE_SOURCE_FIELD_HEART_RATE_LOCAL_DEVICE_TYPE: 1,
    DIVE_SETTINGS_MESG_HEART_RATE_SOURCE_FIELD_SUBFIELDS: 2,
    DIVE_SETTINGS_MESG_HEART_RATE_SOURCE_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    DIVE_SETTINGS_MESG_HEART_RATE_SOURCE_FIELD_MAIN_FIELD:
      Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // session message, total_cycles field
    SESSION_MESG_TOTAL_CYCLES_FIELD_TOTAL_STRIDES: 0,
    SESSION_MESG_TOTAL_CYCLES_FIELD_TOTAL_STROKES: 1,
    SESSION_MESG_TOTAL_CYCLES_FIELD_SUBFIELDS: 2,
    SESSION_MESG_TOTAL_CYCLES_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    SESSION_MESG_TOTAL_CYCLES_FIELD_MAIN_FIELD: Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // session message, avg_cadence field
    SESSION_MESG_AVG_CADENCE_FIELD_AVG_RUNNING_CADENCE: 0,
    SESSION_MESG_AVG_CADENCE_FIELD_SUBFIELDS: 1,
    SESSION_MESG_AVG_CADENCE_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    SESSION_MESG_AVG_CADENCE_FIELD_MAIN_FIELD: Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // session message, max_cadence field
    SESSION_MESG_MAX_CADENCE_FIELD_MAX_RUNNING_CADENCE: 0,
    SESSION_MESG_MAX_CADENCE_FIELD_SUBFIELDS: 1,
    SESSION_MESG_MAX_CADENCE_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    SESSION_MESG_MAX_CADENCE_FIELD_MAIN_FIELD: Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // lap message, total_cycles field
    LAP_MESG_TOTAL_CYCLES_FIELD_TOTAL_STRIDES: 0,
    LAP_MESG_TOTAL_CYCLES_FIELD_TOTAL_STROKES: 1,
    LAP_MESG_TOTAL_CYCLES_FIELD_SUBFIELDS: 2,
    LAP_MESG_TOTAL_CYCLES_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    LAP_MESG_TOTAL_CYCLES_FIELD_MAIN_FIELD: Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // lap message, avg_cadence field
    LAP_MESG_AVG_CADENCE_FIELD_AVG_RUNNING_CADENCE: 0,
    LAP_MESG_AVG_CADENCE_FIELD_SUBFIELDS: 1,
    LAP_MESG_AVG_CADENCE_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    LAP_MESG_AVG_CADENCE_FIELD_MAIN_FIELD: Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // lap message, max_cadence field
    LAP_MESG_MAX_CADENCE_FIELD_MAX_RUNNING_CADENCE: 0,
    LAP_MESG_MAX_CADENCE_FIELD_SUBFIELDS: 1,
    LAP_MESG_MAX_CADENCE_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    LAP_MESG_MAX_CADENCE_FIELD_MAIN_FIELD: Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // event message, data field
    EVENT_MESG_DATA_FIELD_TIMER_TRIGGER: 0,
    EVENT_MESG_DATA_FIELD_COURSE_POINT_INDEX: 1,
    EVENT_MESG_DATA_FIELD_BATTERY_LEVEL: 2,
    EVENT_MESG_DATA_FIELD_VIRTUAL_PARTNER_SPEED: 3,
    EVENT_MESG_DATA_FIELD_HR_HIGH_ALERT: 4,
    EVENT_MESG_DATA_FIELD_HR_LOW_ALERT: 5,
    EVENT_MESG_DATA_FIELD_SPEED_HIGH_ALERT: 6,
    EVENT_MESG_DATA_FIELD_SPEED_LOW_ALERT: 7,
    EVENT_MESG_DATA_FIELD_CAD_HIGH_ALERT: 8,
    EVENT_MESG_DATA_FIELD_CAD_LOW_ALERT: 9,
    EVENT_MESG_DATA_FIELD_POWER_HIGH_ALERT: 10,
    EVENT_MESG_DATA_FIELD_POWER_LOW_ALERT: 11,
    EVENT_MESG_DATA_FIELD_TIME_DURATION_ALERT: 12,
    EVENT_MESG_DATA_FIELD_DISTANCE_DURATION_ALERT: 13,
    EVENT_MESG_DATA_FIELD_CALORIE_DURATION_ALERT: 14,
    EVENT_MESG_DATA_FIELD_FITNESS_EQUIPMENT_STATE: 15,
    EVENT_MESG_DATA_FIELD_SPORT_POINT: 16,
    EVENT_MESG_DATA_FIELD_GEAR_CHANGE_DATA: 17,
    EVENT_MESG_DATA_FIELD_RIDER_POSITION: 18,
    EVENT_MESG_DATA_FIELD_COMM_TIMEOUT: 19,
    EVENT_MESG_DATA_FIELD_DIVE_ALERT: 20,
    EVENT_MESG_DATA_FIELD_AUTO_ACTIVITY_DETECT_DURATION: 21,
    EVENT_MESG_DATA_FIELD_RADAR_THREAT_ALERT: 22,
    EVENT_MESG_DATA_FIELD_SUBFIELDS: 23,
    EVENT_MESG_DATA_FIELD_ACTIVE_SUBFIELD: Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    EVENT_MESG_DATA_FIELD_MAIN_FIELD: Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // event message, start_timestamp field
    EVENT_MESG_START_TIMESTAMP_FIELD_AUTO_ACTIVITY_DETECT_START_TIMESTAMP: 0,
    EVENT_MESG_START_TIMESTAMP_FIELD_SUBFIELDS: 1,
    EVENT_MESG_START_TIMESTAMP_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    EVENT_MESG_START_TIMESTAMP_FIELD_MAIN_FIELD: Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // device_info message, device_type field
    DEVICE_INFO_MESG_DEVICE_TYPE_FIELD_BLE_DEVICE_TYPE: 0,
    DEVICE_INFO_MESG_DEVICE_TYPE_FIELD_ANTPLUS_DEVICE_TYPE: 1,
    DEVICE_INFO_MESG_DEVICE_TYPE_FIELD_ANT_DEVICE_TYPE: 2,
    DEVICE_INFO_MESG_DEVICE_TYPE_FIELD_LOCAL_DEVICE_TYPE: 3,
    DEVICE_INFO_MESG_DEVICE_TYPE_FIELD_SUBFIELDS: 4,
    DEVICE_INFO_MESG_DEVICE_TYPE_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    DEVICE_INFO_MESG_DEVICE_TYPE_FIELD_MAIN_FIELD:
      Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // device_info message, product field
    DEVICE_INFO_MESG_PRODUCT_FIELD_FAVERO_PRODUCT: 0,
    DEVICE_INFO_MESG_PRODUCT_FIELD_GARMIN_PRODUCT: 1,
    DEVICE_INFO_MESG_PRODUCT_FIELD_SUBFIELDS: 2,
    DEVICE_INFO_MESG_PRODUCT_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    DEVICE_INFO_MESG_PRODUCT_FIELD_MAIN_FIELD: Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // training_file message, product field
    TRAINING_FILE_MESG_PRODUCT_FIELD_FAVERO_PRODUCT: 0,
    TRAINING_FILE_MESG_PRODUCT_FIELD_GARMIN_PRODUCT: 1,
    TRAINING_FILE_MESG_PRODUCT_FIELD_SUBFIELDS: 2,
    TRAINING_FILE_MESG_PRODUCT_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    TRAINING_FILE_MESG_PRODUCT_FIELD_MAIN_FIELD: Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // three_d_sensor_calibration message, calibration_factor field
    THREE_D_SENSOR_CALIBRATION_MESG_CALIBRATION_FACTOR_FIELD_ACCEL_CAL_FACTOR: 0,
    THREE_D_SENSOR_CALIBRATION_MESG_CALIBRATION_FACTOR_FIELD_GYRO_CAL_FACTOR: 1,
    THREE_D_SENSOR_CALIBRATION_MESG_CALIBRATION_FACTOR_FIELD_SUBFIELDS: 2,
    THREE_D_SENSOR_CALIBRATION_MESG_CALIBRATION_FACTOR_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    THREE_D_SENSOR_CALIBRATION_MESG_CALIBRATION_FACTOR_FIELD_MAIN_FIELD:
      Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // one_d_sensor_calibration message, calibration_factor field
    ONE_D_SENSOR_CALIBRATION_MESG_CALIBRATION_FACTOR_FIELD_BARO_CAL_FACTOR: 0,
    ONE_D_SENSOR_CALIBRATION_MESG_CALIBRATION_FACTOR_FIELD_SUBFIELDS: 1,
    ONE_D_SENSOR_CALIBRATION_MESG_CALIBRATION_FACTOR_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    ONE_D_SENSOR_CALIBRATION_MESG_CALIBRATION_FACTOR_FIELD_MAIN_FIELD:
      Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // segment_lap message, total_cycles field
    SEGMENT_LAP_MESG_TOTAL_CYCLES_FIELD_TOTAL_STROKES: 0,
    SEGMENT_LAP_MESG_TOTAL_CYCLES_FIELD_SUBFIELDS: 1,
    SEGMENT_LAP_MESG_TOTAL_CYCLES_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    SEGMENT_LAP_MESG_TOTAL_CYCLES_FIELD_MAIN_FIELD:
      Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // workout_step message, duration_value field
    WORKOUT_STEP_MESG_DURATION_VALUE_FIELD_DURATION_TIME: 0,
    WORKOUT_STEP_MESG_DURATION_VALUE_FIELD_DURATION_DISTANCE: 1,
    WORKOUT_STEP_MESG_DURATION_VALUE_FIELD_DURATION_HR: 2,
    WORKOUT_STEP_MESG_DURATION_VALUE_FIELD_DURATION_CALORIES: 3,
    WORKOUT_STEP_MESG_DURATION_VALUE_FIELD_DURATION_STEP: 4,
    WORKOUT_STEP_MESG_DURATION_VALUE_FIELD_DURATION_POWER: 5,
    WORKOUT_STEP_MESG_DURATION_VALUE_FIELD_DURATION_REPS: 6,
    WORKOUT_STEP_MESG_DURATION_VALUE_FIELD_SUBFIELDS: 7,
    WORKOUT_STEP_MESG_DURATION_VALUE_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    WORKOUT_STEP_MESG_DURATION_VALUE_FIELD_MAIN_FIELD:
      Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // workout_step message, target_value field
    WORKOUT_STEP_MESG_TARGET_VALUE_FIELD_TARGET_SPEED_ZONE: 0,
    WORKOUT_STEP_MESG_TARGET_VALUE_FIELD_TARGET_HR_ZONE: 1,
    WORKOUT_STEP_MESG_TARGET_VALUE_FIELD_TARGET_CADENCE_ZONE: 2,
    WORKOUT_STEP_MESG_TARGET_VALUE_FIELD_TARGET_POWER_ZONE: 3,
    WORKOUT_STEP_MESG_TARGET_VALUE_FIELD_REPEAT_STEPS: 4,
    WORKOUT_STEP_MESG_TARGET_VALUE_FIELD_REPEAT_TIME: 5,
    WORKOUT_STEP_MESG_TARGET_VALUE_FIELD_REPEAT_DISTANCE: 6,
    WORKOUT_STEP_MESG_TARGET_VALUE_FIELD_REPEAT_CALORIES: 7,
    WORKOUT_STEP_MESG_TARGET_VALUE_FIELD_REPEAT_HR: 8,
    WORKOUT_STEP_MESG_TARGET_VALUE_FIELD_REPEAT_POWER: 9,
    WORKOUT_STEP_MESG_TARGET_VALUE_FIELD_TARGET_STROKE_TYPE: 10,
    WORKOUT_STEP_MESG_TARGET_VALUE_FIELD_SUBFIELDS: 11,
    WORKOUT_STEP_MESG_TARGET_VALUE_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    WORKOUT_STEP_MESG_TARGET_VALUE_FIELD_MAIN_FIELD:
      Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // workout_step message, custom_target_value_low field
    WORKOUT_STEP_MESG_CUSTOM_TARGET_VALUE_LOW_FIELD_CUSTOM_TARGET_SPEED_LOW: 0,
    WORKOUT_STEP_MESG_CUSTOM_TARGET_VALUE_LOW_FIELD_CUSTOM_TARGET_HEART_RATE_LOW: 1,
    WORKOUT_STEP_MESG_CUSTOM_TARGET_VALUE_LOW_FIELD_CUSTOM_TARGET_CADENCE_LOW: 2,
    WORKOUT_STEP_MESG_CUSTOM_TARGET_VALUE_LOW_FIELD_CUSTOM_TARGET_POWER_LOW: 3,
    WORKOUT_STEP_MESG_CUSTOM_TARGET_VALUE_LOW_FIELD_SUBFIELDS: 4,
    WORKOUT_STEP_MESG_CUSTOM_TARGET_VALUE_LOW_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    WORKOUT_STEP_MESG_CUSTOM_TARGET_VALUE_LOW_FIELD_MAIN_FIELD:
      Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // workout_step message, custom_target_value_high field
    WORKOUT_STEP_MESG_CUSTOM_TARGET_VALUE_HIGH_FIELD_CUSTOM_TARGET_SPEED_HIGH: 0,
    WORKOUT_STEP_MESG_CUSTOM_TARGET_VALUE_HIGH_FIELD_CUSTOM_TARGET_HEART_RATE_HIGH: 1,
    WORKOUT_STEP_MESG_CUSTOM_TARGET_VALUE_HIGH_FIELD_CUSTOM_TARGET_CADENCE_HIGH: 2,
    WORKOUT_STEP_MESG_CUSTOM_TARGET_VALUE_HIGH_FIELD_CUSTOM_TARGET_POWER_HIGH: 3,
    WORKOUT_STEP_MESG_CUSTOM_TARGET_VALUE_HIGH_FIELD_SUBFIELDS: 4,
    WORKOUT_STEP_MESG_CUSTOM_TARGET_VALUE_HIGH_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    WORKOUT_STEP_MESG_CUSTOM_TARGET_VALUE_HIGH_FIELD_MAIN_FIELD:
      Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // workout_step message, secondary_target_value field
    WORKOUT_STEP_MESG_SECONDARY_TARGET_VALUE_FIELD_SECONDARY_TARGET_SPEED_ZONE: 0,
    WORKOUT_STEP_MESG_SECONDARY_TARGET_VALUE_FIELD_SECONDARY_TARGET_HR_ZONE: 1,
    WORKOUT_STEP_MESG_SECONDARY_TARGET_VALUE_FIELD_SECONDARY_TARGET_CADENCE_ZONE: 2,
    WORKOUT_STEP_MESG_SECONDARY_TARGET_VALUE_FIELD_SECONDARY_TARGET_POWER_ZONE: 3,
    WORKOUT_STEP_MESG_SECONDARY_TARGET_VALUE_FIELD_SECONDARY_TARGET_STROKE_TYPE: 4,
    WORKOUT_STEP_MESG_SECONDARY_TARGET_VALUE_FIELD_SUBFIELDS: 5,
    WORKOUT_STEP_MESG_SECONDARY_TARGET_VALUE_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    WORKOUT_STEP_MESG_SECONDARY_TARGET_VALUE_FIELD_MAIN_FIELD:
      Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // workout_step message, secondary_custom_target_value_low field
    WORKOUT_STEP_MESG_SECONDARY_CUSTOM_TARGET_VALUE_LOW_FIELD_SECONDARY_CUSTOM_TARGET_SPEED_LOW: 0,
    WORKOUT_STEP_MESG_SECONDARY_CUSTOM_TARGET_VALUE_LOW_FIELD_SECONDARY_CUSTOM_TARGET_HEART_RATE_LOW: 1,
    WORKOUT_STEP_MESG_SECONDARY_CUSTOM_TARGET_VALUE_LOW_FIELD_SECONDARY_CUSTOM_TARGET_CADENCE_LOW: 2,
    WORKOUT_STEP_MESG_SECONDARY_CUSTOM_TARGET_VALUE_LOW_FIELD_SECONDARY_CUSTOM_TARGET_POWER_LOW: 3,
    WORKOUT_STEP_MESG_SECONDARY_CUSTOM_TARGET_VALUE_LOW_FIELD_SUBFIELDS: 4,
    WORKOUT_STEP_MESG_SECONDARY_CUSTOM_TARGET_VALUE_LOW_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    WORKOUT_STEP_MESG_SECONDARY_CUSTOM_TARGET_VALUE_LOW_FIELD_MAIN_FIELD:
      Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // workout_step message, secondary_custom_target_value_high field
    WORKOUT_STEP_MESG_SECONDARY_CUSTOM_TARGET_VALUE_HIGH_FIELD_SECONDARY_CUSTOM_TARGET_SPEED_HIGH: 0,
    WORKOUT_STEP_MESG_SECONDARY_CUSTOM_TARGET_VALUE_HIGH_FIELD_SECONDARY_CUSTOM_TARGET_HEART_RATE_HIGH: 1,
    WORKOUT_STEP_MESG_SECONDARY_CUSTOM_TARGET_VALUE_HIGH_FIELD_SECONDARY_CUSTOM_TARGET_CADENCE_HIGH: 2,
    WORKOUT_STEP_MESG_SECONDARY_CUSTOM_TARGET_VALUE_HIGH_FIELD_SECONDARY_CUSTOM_TARGET_POWER_HIGH: 3,
    WORKOUT_STEP_MESG_SECONDARY_CUSTOM_TARGET_VALUE_HIGH_FIELD_SUBFIELDS: 4,
    WORKOUT_STEP_MESG_SECONDARY_CUSTOM_TARGET_VALUE_HIGH_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    WORKOUT_STEP_MESG_SECONDARY_CUSTOM_TARGET_VALUE_HIGH_FIELD_MAIN_FIELD:
      Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // schedule message, product field
    SCHEDULE_MESG_PRODUCT_FIELD_FAVERO_PRODUCT: 0,
    SCHEDULE_MESG_PRODUCT_FIELD_GARMIN_PRODUCT: 1,
    SCHEDULE_MESG_PRODUCT_FIELD_SUBFIELDS: 2,
    SCHEDULE_MESG_PRODUCT_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    SCHEDULE_MESG_PRODUCT_FIELD_MAIN_FIELD: Fit.SUBFIELD_INDEX_MAIN_FIELD,

    // monitoring message, cycles field
    MONITORING_MESG_CYCLES_FIELD_STEPS: 0,
    MONITORING_MESG_CYCLES_FIELD_STROKES: 1,
    MONITORING_MESG_CYCLES_FIELD_SUBFIELDS: 2,
    MONITORING_MESG_CYCLES_FIELD_ACTIVE_SUBFIELD:
      Fit.SUBFIELD_INDEX_ACTIVE_SUBFIELD,
    MONITORING_MESG_CYCLES_FIELD_MAIN_FIELD: Fit.SUBFIELD_INDEX_MAIN_FIELD,
  };

  enumValueName(enumType: Type, enumVal: number): string {
    let retVal = "";

    switch (enumType) {
    case Type.ENUM: // No applicable labels for base types
        break;

    case Type.SINT8: // No applicable labels for base types
        break;

    case Type.UINT8: // No applicable labels for base types
        break;

    case Type.SINT16: // No applicable labels for base types
        break;

    case Type.UINT16: // No applicable labels for base types
        break;

    case Type.SINT32: // No applicable labels for base types
        break;

    case Type.UINT32: // No applicable labels for base types
        break;

    case Type.STRING: // No applicable labels for base types
        break;

    case Type.FLOAT32: // No applicable labels for base types
        break;

    case Type.FLOAT64: // No applicable labels for base types
        break;

    case Type.UINT8Z: // No applicable labels for base types
        break;

    case Type.UINT16Z: // No applicable labels for base types
        break;

    case Type.UINT32Z: // No applicable labels for base types
        break;

    case Type.BYTE: // No applicable labels for base types
        break;

    case Type.SINT64: // No applicable labels for base types
        break;

    case Type.UINT64: // No applicable labels for base types
        break;

    case Type.UINT64Z: // No applicable labels for base types
        break;

    case Type.BOOL: // No applicable labels for base types
        break;

    case Type.FILE:
        retVal = File.getStringFromValue(File.getByValue(shortVal));
        break;

    case Type.MESG_NUM:
        retVal = MesgNum.getStringFromValue(enumVal);
        break;

    case Type.CHECKSUM:
        retVal = Checksum.getStringFromValue(enumVal);
        break;

    case Type.FILE_FLAGS:
        retVal = FileFlags.getStringFromValue(enumVal);
        break;

    case Type.MESG_COUNT:
        retVal = MesgCount.getStringFromValue(MesgCount.getByValue(shortVal));
        break;

    case Type.DATE_TIME:
        retVal = DateTime.getStringFromValue(enumVal);
        break;

    case Type.LOCAL_DATE_TIME:
        retVal = LocalDateTime.getStringFromValue(enumVal);
        break;

    case Type.MESSAGE_INDEX:
        retVal = MessageIndex.getStringFromValue((int)enumVal);
        break;

    case Type.DEVICE_INDEX:
        retVal = DeviceIndex.getStringFromValue(enumVal);
        break;

    case Type.GENDER:
        retVal = Gender.getStringFromValue(Gender.getByValue(shortVal));
        break;

    case Type.LANGUAGE:
        retVal = Language.getStringFromValue(Language.getByValue(shortVal));
        break;

    case Type.LANGUAGE_BITS_0:
        retVal = LanguageBits0.getStringFromValue(enumVal);
        break;

    case Type.LANGUAGE_BITS_1:
        retVal = LanguageBits1.getStringFromValue(enumVal);
        break;

    case Type.LANGUAGE_BITS_2:
        retVal = LanguageBits2.getStringFromValue(enumVal);
        break;

    case Type.LANGUAGE_BITS_3:
        retVal = LanguageBits3.getStringFromValue(enumVal);
        break;

    case Type.LANGUAGE_BITS_4:
        retVal = LanguageBits4.getStringFromValue(enumVal);
        break;

    case Type.TIME_ZONE:
        retVal = TimeZone.getStringFromValue(TimeZone.getByValue(shortVal));
        break;

    case Type.DISPLAY_MEASURE:
        retVal = DisplayMeasure.getStringFromValue(DisplayMeasure.getByValue(shortVal));
        break;

    case Type.DISPLAY_HEART:
        retVal = DisplayHeart.getStringFromValue(DisplayHeart.getByValue(shortVal));
        break;

    case Type.DISPLAY_POWER:
        retVal = DisplayPower.getStringFromValue(DisplayPower.getByValue(shortVal));
        break;

    case Type.DISPLAY_POSITION:
        retVal = DisplayPosition.getStringFromValue(DisplayPosition.getByValue(shortVal));
        break;

    case Type.SWITCH:
        retVal = Switch.getStringFromValue(Switch.getByValue(shortVal));
        break;

    case Type.SPORT:
        retVal = Sport.getStringFromValue(Sport.getByValue(shortVal));
        break;

    case Type.SPORT_BITS_0:
        retVal = SportBits0.getStringFromValue(enumVal);
        break;

    case Type.SPORT_BITS_1:
        retVal = SportBits1.getStringFromValue(enumVal);
        break;

    case Type.SPORT_BITS_2:
        retVal = SportBits2.getStringFromValue(enumVal);
        break;

    case Type.SPORT_BITS_3:
        retVal = SportBits3.getStringFromValue(enumVal);
        break;

    case Type.SPORT_BITS_4:
        retVal = SportBits4.getStringFromValue(enumVal);
        break;

    case Type.SPORT_BITS_5:
        retVal = SportBits5.getStringFromValue(enumVal);
        break;

    case Type.SPORT_BITS_6:
        retVal = SportBits6.getStringFromValue(enumVal);
        break;

    case Type.SUB_SPORT:
        retVal = SubSport.getStringFromValue(SubSport.getByValue(shortVal));
        break;

    case Type.SPORT_EVENT:
        retVal = SportEvent.getStringFromValue(SportEvent.getByValue(shortVal));
        break;

    case Type.ACTIVITY:
        retVal = Activity.getStringFromValue(Activity.getByValue(shortVal));
        break;

    case Type.INTENSITY:
        retVal = Intensity.getStringFromValue(Intensity.getByValue(shortVal));
        break;

    case Type.SESSION_TRIGGER:
        retVal = SessionTrigger.getStringFromValue(SessionTrigger.getByValue(shortVal));
        break;

    case Type.AUTOLAP_TRIGGER:
        retVal = AutolapTrigger.getStringFromValue(AutolapTrigger.getByValue(shortVal));
        break;

    case Type.LAP_TRIGGER:
        retVal = LapTrigger.getStringFromValue(LapTrigger.getByValue(shortVal));
        break;

    case Type.TIME_MODE:
        retVal = TimeMode.getStringFromValue(TimeMode.getByValue(shortVal));
        break;

    case Type.BACKLIGHT_MODE:
        retVal = BacklightMode.getStringFromValue(BacklightMode.getByValue(shortVal));
        break;

    case Type.DATE_MODE:
        retVal = DateMode.getStringFromValue(DateMode.getByValue(shortVal));
        break;

    case Type.BACKLIGHT_TIMEOUT:
        retVal = BacklightTimeout.getStringFromValue(enumVal);
        break;

    case Type.EVENT:
        retVal = Event.getStringFromValue(Event.getByValue(shortVal));
        break;

    case Type.EVENT_TYPE:
        retVal = EventType.getStringFromValue(EventType.getByValue(shortVal));
        break;

    case Type.TIMER_TRIGGER:
        retVal = TimerTrigger.getStringFromValue(TimerTrigger.getByValue(shortVal));
        break;

    case Type.FITNESS_EQUIPMENT_STATE:
        retVal = FitnessEquipmentState.getStringFromValue(FitnessEquipmentState.getByValue(shortVal));
        break;

    case Type.TONE:
        retVal = Tone.getStringFromValue(Tone.getByValue(shortVal));
        break;

    case Type.AUTOSCROLL:
        retVal = Autoscroll.getStringFromValue(Autoscroll.getByValue(shortVal));
        break;

    case Type.ACTIVITY_CLASS:
        retVal = ActivityClass.getStringFromValue(ActivityClass.getByValue(shortVal));
        break;

    case Type.HR_ZONE_CALC:
        retVal = HrZoneCalc.getStringFromValue(HrZoneCalc.getByValue(shortVal));
        break;

    case Type.PWR_ZONE_CALC:
        retVal = PwrZoneCalc.getStringFromValue(PwrZoneCalc.getByValue(shortVal));
        break;

    case Type.WKT_STEP_DURATION:
        retVal = WktStepDuration.getStringFromValue(WktStepDuration.getByValue(shortVal));
        break;

    case Type.WKT_STEP_TARGET:
        retVal = WktStepTarget.getStringFromValue(WktStepTarget.getByValue(shortVal));
        break;

    case Type.GOAL:
        retVal = Goal.getStringFromValue(Goal.getByValue(shortVal));
        break;

    case Type.GOAL_RECURRENCE:
        retVal = GoalRecurrence.getStringFromValue(GoalRecurrence.getByValue(shortVal));
        break;

    case Type.GOAL_SOURCE:
        retVal = GoalSource.getStringFromValue(GoalSource.getByValue(shortVal));
        break;

    case Type.SCHEDULE:
        retVal = Schedule.getStringFromValue(Schedule.getByValue(shortVal));
        break;

    case Type.COURSE_POINT:
        retVal = CoursePoint.getStringFromValue(CoursePoint.getByValue(shortVal));
        break;

    case Type.MANUFACTURER:
        retVal = Manufacturer.getStringFromValue((int)enumVal);
        break;

    case Type.GARMIN_PRODUCT:
        retVal = GarminProduct.getStringFromValue((int)enumVal);
        break;

    case Type.ANTPLUS_DEVICE_TYPE:
        retVal = AntplusDeviceType.getStringFromValue(enumVal);
        break;

    case Type.ANT_NETWORK:
        retVal = AntNetwork.getStringFromValue(AntNetwork.getByValue(shortVal));
        break;

    case Type.WORKOUT_CAPABILITIES:
        retVal = WorkoutCapabilities.getStringFromValue(enumVal);
        break;

    case Type.BATTERY_STATUS:
        retVal = BatteryStatus.getStringFromValue(enumVal);
        break;

    case Type.HR_TYPE:
        retVal = HrType.getStringFromValue(HrType.getByValue(shortVal));
        break;

    case Type.COURSE_CAPABILITIES:
        retVal = CourseCapabilities.getStringFromValue(enumVal);
        break;

    case Type.WEIGHT:
        retVal = Weight.getStringFromValue((int)enumVal);
        break;

    case Type.WORKOUT_HR:
        retVal = WorkoutHr.getStringFromValue(enumVal);
        break;

    case Type.WORKOUT_POWER:
        retVal = WorkoutPower.getStringFromValue(enumVal);
        break;

    case Type.BP_STATUS:
        retVal = BpStatus.getStringFromValue(BpStatus.getByValue(shortVal));
        break;

    case Type.USER_LOCAL_ID:
        retVal = UserLocalId.getStringFromValue((int)enumVal);
        break;

    case Type.SWIM_STROKE:
        retVal = SwimStroke.getStringFromValue(SwimStroke.getByValue(shortVal));
        break;

    case Type.ACTIVITY_TYPE:
        retVal = ActivityType.getStringFromValue(ActivityType.getByValue(shortVal));
        break;

    case Type.ACTIVITY_SUBTYPE:
        retVal = ActivitySubtype.getStringFromValue(ActivitySubtype.getByValue(shortVal));
        break;

    case Type.ACTIVITY_LEVEL:
        retVal = ActivityLevel.getStringFromValue(ActivityLevel.getByValue(shortVal));
        break;

    case Type.SIDE:
        retVal = Side.getStringFromValue(Side.getByValue(shortVal));
        break;

    case Type.LEFT_RIGHT_BALANCE:
        retVal = LeftRightBalance.getStringFromValue(enumVal);
        break;

    case Type.LEFT_RIGHT_BALANCE_100:
        retVal = LeftRightBalance100.getStringFromValue((int)enumVal);
        break;

    case Type.LENGTH_TYPE:
        retVal = LengthType.getStringFromValue(LengthType.getByValue(shortVal));
        break;

    case Type.DAY_OF_WEEK:
        retVal = DayOfWeek.getStringFromValue(DayOfWeek.getByValue(shortVal));
        break;

    case Type.CONNECTIVITY_CAPABILITIES:
        retVal = ConnectivityCapabilities.getStringFromValue(enumVal);
        break;

    case Type.WEATHER_REPORT:
        retVal = WeatherReport.getStringFromValue(WeatherReport.getByValue(shortVal));
        break;

    case Type.WEATHER_STATUS:
        retVal = WeatherStatus.getStringFromValue(WeatherStatus.getByValue(shortVal));
        break;

    case Type.WEATHER_SEVERITY:
        retVal = WeatherSeverity.getStringFromValue(WeatherSeverity.getByValue(shortVal));
        break;

    case Type.WEATHER_SEVERE_TYPE:
        retVal = WeatherSevereType.getStringFromValue(WeatherSevereType.getByValue(shortVal));
        break;

    case Type.TIME_INTO_DAY:
        retVal = TimeIntoDay.getStringFromValue(enumVal);
        break;

    case Type.LOCALTIME_INTO_DAY:
        retVal = LocaltimeIntoDay.getStringFromValue(enumVal);
        break;

    case Type.STROKE_TYPE:
        retVal = StrokeType.getStringFromValue(StrokeType.getByValue(shortVal));
        break;

    case Type.BODY_LOCATION:
        retVal = BodyLocation.getStringFromValue(BodyLocation.getByValue(shortVal));
        break;

    case Type.SEGMENT_LAP_STATUS:
        retVal = SegmentLapStatus.getStringFromValue(SegmentLapStatus.getByValue(shortVal));
        break;

    case Type.SEGMENT_LEADERBOARD_TYPE:
        retVal = SegmentLeaderboardType.getStringFromValue(SegmentLeaderboardType.getByValue(shortVal));
        break;

    case Type.SEGMENT_DELETE_STATUS:
        retVal = SegmentDeleteStatus.getStringFromValue(SegmentDeleteStatus.getByValue(shortVal));
        break;

    case Type.SEGMENT_SELECTION_TYPE:
        retVal = SegmentSelectionType.getStringFromValue(SegmentSelectionType.getByValue(shortVal));
        break;

    case Type.SOURCE_TYPE:
        retVal = SourceType.getStringFromValue(SourceType.getByValue(shortVal));
        break;

    case Type.LOCAL_DEVICE_TYPE:
        retVal = LocalDeviceType.getStringFromValue(enumVal);
        break;

    case Type.BLE_DEVICE_TYPE:
        retVal = BleDeviceType.getStringFromValue(enumVal);
        break;

    case Type.ANT_CHANNEL_ID:
        retVal = AntChannelId.getStringFromValue(enumVal);
        break;

    case Type.DISPLAY_ORIENTATION:
        retVal = DisplayOrientation.getStringFromValue(DisplayOrientation.getByValue(shortVal));
        break;

    case Type.WORKOUT_EQUIPMENT:
        retVal = WorkoutEquipment.getStringFromValue(WorkoutEquipment.getByValue(shortVal));
        break;

    case Type.WATCHFACE_MODE:
        retVal = WatchfaceMode.getStringFromValue(WatchfaceMode.getByValue(shortVal));
        break;

    case Type.DIGITAL_WATCHFACE_LAYOUT:
        retVal = DigitalWatchfaceLayout.getStringFromValue(DigitalWatchfaceLayout.getByValue(shortVal));
        break;

    case Type.ANALOG_WATCHFACE_LAYOUT:
        retVal = AnalogWatchfaceLayout.getStringFromValue(AnalogWatchfaceLayout.getByValue(shortVal));
        break;

    case Type.RIDER_POSITION_TYPE:
        retVal = RiderPositionType.getStringFromValue(RiderPositionType.getByValue(shortVal));
        break;

    case Type.POWER_PHASE_TYPE:
        retVal = PowerPhaseType.getStringFromValue(PowerPhaseType.getByValue(shortVal));
        break;

    case Type.CAMERA_EVENT_TYPE:
        retVal = CameraEventType.getStringFromValue(CameraEventType.getByValue(shortVal));
        break;

    case Type.SENSOR_TYPE:
        retVal = SensorType.getStringFromValue(SensorType.getByValue(shortVal));
        break;

    case Type.BIKE_LIGHT_NETWORK_CONFIG_TYPE:
        retVal = BikeLightNetworkConfigType.getStringFromValue(BikeLightNetworkConfigType.getByValue(shortVal));
        break;

    case Type.COMM_TIMEOUT_TYPE:
        retVal = CommTimeoutType.getStringFromValue((int)enumVal);
        break;

    case Type.CAMERA_ORIENTATION_TYPE:
        retVal = CameraOrientationType.getStringFromValue(CameraOrientationType.getByValue(shortVal));
        break;

    case Type.ATTITUDE_STAGE:
        retVal = AttitudeStage.getStringFromValue(AttitudeStage.getByValue(shortVal));
        break;

    case Type.ATTITUDE_VALIDITY:
        retVal = AttitudeValidity.getStringFromValue((int)enumVal);
        break;

    case Type.AUTO_SYNC_FREQUENCY:
        retVal = AutoSyncFrequency.getStringFromValue(AutoSyncFrequency.getByValue(shortVal));
        break;

    case Type.EXD_LAYOUT:
        retVal = ExdLayout.getStringFromValue(ExdLayout.getByValue(shortVal));
        break;

    case Type.EXD_DISPLAY_TYPE:
        retVal = ExdDisplayType.getStringFromValue(ExdDisplayType.getByValue(shortVal));
        break;

    case Type.EXD_DATA_UNITS:
        retVal = ExdDataUnits.getStringFromValue(ExdDataUnits.getByValue(shortVal));
        break;

    case Type.EXD_QUALIFIERS:
        retVal = ExdQualifiers.getStringFromValue(ExdQualifiers.getByValue(shortVal));
        break;

    case Type.EXD_DESCRIPTORS:
        retVal = ExdDescriptors.getStringFromValue(ExdDescriptors.getByValue(shortVal));
        break;

    case Type.AUTO_ACTIVITY_DETECT:
        retVal = AutoActivityDetect.getStringFromValue(enumVal);
        break;

    case Type.SUPPORTED_EXD_SCREEN_LAYOUTS:
        retVal = SupportedExdScreenLayouts.getStringFromValue(enumVal);
        break;

    case Type.FIT_BASE_TYPE:
        retVal = FitBaseType.getStringFromValue(enumVal);
        break;

    case Type.TURN_TYPE:
        retVal = TurnType.getStringFromValue(TurnType.getByValue(shortVal));
        break;

    case Type.BIKE_LIGHT_BEAM_ANGLE_MODE:
        retVal = BikeLightBeamAngleMode.getStringFromValue(enumVal);
        break;

    case Type.FIT_BASE_UNIT:
        retVal = FitBaseUnit.getStringFromValue((int)enumVal);
        break;

    case Type.SET_TYPE:
        retVal = SetType.getStringFromValue(enumVal);
        break;

    case Type.MAX_MET_CATEGORY:
        retVal = MaxMetCategory.getStringFromValue(MaxMetCategory.getByValue(shortVal));
        break;

    case Type.EXERCISE_CATEGORY:
        retVal = ExerciseCategory.getStringFromValue((int)enumVal);
        break;

    case Type.BENCH_PRESS_EXERCISE_NAME:
        retVal = BenchPressExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.CALF_RAISE_EXERCISE_NAME:
        retVal = CalfRaiseExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.CARDIO_EXERCISE_NAME:
        retVal = CardioExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.CARRY_EXERCISE_NAME:
        retVal = CarryExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.CHOP_EXERCISE_NAME:
        retVal = ChopExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.CORE_EXERCISE_NAME:
        retVal = CoreExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.CRUNCH_EXERCISE_NAME:
        retVal = CrunchExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.CURL_EXERCISE_NAME:
        retVal = CurlExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.DEADLIFT_EXERCISE_NAME:
        retVal = DeadliftExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.FLYE_EXERCISE_NAME:
        retVal = FlyeExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.HIP_RAISE_EXERCISE_NAME:
        retVal = HipRaiseExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.HIP_STABILITY_EXERCISE_NAME:
        retVal = HipStabilityExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.HIP_SWING_EXERCISE_NAME:
        retVal = HipSwingExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.HYPEREXTENSION_EXERCISE_NAME:
        retVal = HyperextensionExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.LATERAL_RAISE_EXERCISE_NAME:
        retVal = LateralRaiseExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.LEG_CURL_EXERCISE_NAME:
        retVal = LegCurlExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.LEG_RAISE_EXERCISE_NAME:
        retVal = LegRaiseExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.LUNGE_EXERCISE_NAME:
        retVal = LungeExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.OLYMPIC_LIFT_EXERCISE_NAME:
        retVal = OlympicLiftExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.PLANK_EXERCISE_NAME:
        retVal = PlankExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.PLYO_EXERCISE_NAME:
        retVal = PlyoExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.PULL_UP_EXERCISE_NAME:
        retVal = PullUpExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.PUSH_UP_EXERCISE_NAME:
        retVal = PushUpExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.ROW_EXERCISE_NAME:
        retVal = RowExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.SHOULDER_PRESS_EXERCISE_NAME:
        retVal = ShoulderPressExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.SHOULDER_STABILITY_EXERCISE_NAME:
        retVal = ShoulderStabilityExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.SHRUG_EXERCISE_NAME:
        retVal = ShrugExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.SIT_UP_EXERCISE_NAME:
        retVal = SitUpExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.SQUAT_EXERCISE_NAME:
        retVal = SquatExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.TOTAL_BODY_EXERCISE_NAME:
        retVal = TotalBodyExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.TRICEPS_EXTENSION_EXERCISE_NAME:
        retVal = TricepsExtensionExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.WARM_UP_EXERCISE_NAME:
        retVal = WarmUpExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.RUN_EXERCISE_NAME:
        retVal = RunExerciseName.getStringFromValue((int)enumVal);
        break;

    case Type.WATER_TYPE:
        retVal = WaterType.getStringFromValue(WaterType.getByValue(shortVal));
        break;

    case Type.TISSUE_MODEL_TYPE:
        retVal = TissueModelType.getStringFromValue(TissueModelType.getByValue(shortVal));
        break;

    case Type.DIVE_GAS_STATUS:
        retVal = DiveGasStatus.getStringFromValue(DiveGasStatus.getByValue(shortVal));
        break;

    case Type.DIVE_ALERT:
        retVal = DiveAlert.getStringFromValue(DiveAlert.getByValue(shortVal));
        break;

    case Type.DIVE_ALARM_TYPE:
        retVal = DiveAlarmType.getStringFromValue(DiveAlarmType.getByValue(shortVal));
        break;

    case Type.DIVE_BACKLIGHT_MODE:
        retVal = DiveBacklightMode.getStringFromValue(DiveBacklightMode.getByValue(shortVal));
        break;

    case Type.SLEEP_LEVEL:
        retVal = SleepLevel.getStringFromValue(SleepLevel.getByValue(shortVal));
        break;

    case Type.SPO2_MEASUREMENT_TYPE:
        retVal = Spo2MeasurementType.getStringFromValue(Spo2MeasurementType.getByValue(shortVal));
        break;

    case Type.CCR_SETPOINT_SWITCH_MODE:
        retVal = CcrSetpointSwitchMode.getStringFromValue(CcrSetpointSwitchMode.getByValue(shortVal));
        break;

    case Type.DIVE_GAS_MODE:
        retVal = DiveGasMode.getStringFromValue(DiveGasMode.getByValue(shortVal));
        break;

    case Type.FAVERO_PRODUCT:
        retVal = FaveroProduct.getStringFromValue((int)enumVal);
        break;

    case Type.SPLIT_TYPE:
        retVal = SplitType.getStringFromValue(SplitType.getByValue(shortVal));
        break;

    case Type.CLIMB_PRO_EVENT:
        retVal = ClimbProEvent.getStringFromValue(ClimbProEvent.getByValue(shortVal));
        break;

    case Type.GAS_CONSUMPTION_RATE_TYPE:
        retVal = GasConsumptionRateType.getStringFromValue(GasConsumptionRateType.getByValue(shortVal));
        break;

    case Type.TAP_SENSITIVITY:
        retVal = TapSensitivity.getStringFromValue(TapSensitivity.getByValue(shortVal));
        break;

    case Type.RADAR_THREAT_LEVEL_TYPE:
        retVal = RadarThreatLevelType.getStringFromValue(RadarThreatLevelType.getByValue(shortVal));
        break;

    case Type.MAX_MET_SPEED_SOURCE:
        retVal = MaxMetSpeedSource.getStringFromValue(MaxMetSpeedSource.getByValue(shortVal));
        break;

    case Type.MAX_MET_HEART_RATE_SOURCE:
        retVal = MaxMetHeartRateSource.getStringFromValue(MaxMetHeartRateSource.getByValue(shortVal));
        break;

    case Type.HRV_STATUS:
        retVal = HrvStatus.getStringFromValue(HrvStatus.getByValue(shortVal));
        break;

    case Type.NO_FLY_TIME_MODE:
        retVal = NoFlyTimeMode.getStringFromValue(NoFlyTimeMode.getByValue(shortVal));
        break;

    default:
        break;
    }

    // If we fail to convert this to a named enum value, return the string representation
    // of the numerical value.
    if (retVal === "") {
      retVal = enumVal.toString();
    }

    return retVal;
}


  fromBaseType(baseType: number): Type {
    switch (baseType) {
      case Fit.BASE_TYPE_SINT8:
        return Type.SINT8;
      case Fit.BASE_TYPE_UINT8:
        return Type.UINT8;
      case Fit.BASE_TYPE_SINT16:
        return Type.SINT16;
      case Fit.BASE_TYPE_UINT16:
        return Type.UINT16;
      case Fit.BASE_TYPE_SINT32:
        return Type.SINT32;
      case Fit.BASE_TYPE_UINT32:
        return Type.UINT32;

      case Fit.BASE_TYPE_STRING:
        return Type.STRING;

      case Fit.BASE_TYPE_FLOAT32:
        return Type.FLOAT32;
      case Fit.BASE_TYPE_FLOAT64:
        return Type.FLOAT64;

      case Fit.BASE_TYPE_UINT8Z:
        return Type.UINT8Z;
      case Fit.BASE_TYPE_UINT16Z:
        return Type.UINT16Z;
      case Fit.BASE_TYPE_UINT32Z:
        return Type.UINT32Z;

      case Fit.BASE_TYPE_UINT64:
        return Type.UINT64;
      case Fit.BASE_TYPE_SINT64:
        return Type.SINT64;
      case Fit.BASE_TYPE_UINT64Z:
        return Type.UINT64Z;

      case Fit.BASE_TYPE_ENUM:
      default:
        return Type.ENUM;
    }
  }
}
export default Profile;

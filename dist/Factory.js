"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Field_1 = __importDefault(require("./Field"));
const Fit_1 = __importDefault(require("./Fit"));
const Mesg_1 = __importDefault(require("./Mesg"));
const MesgNum_1 = __importDefault(require("./MesgNum"));
class Factory {
    static createMesg(arg) {
        if (arg instanceof Mesg_1.default) {
            return Factory.createMesgByMesg(arg);
        }
        else if (typeof arg === 'number') {
            return Factory.createMesgByMesgNum(arg);
        }
        else if (typeof arg === 'string') {
            return Factory.createMesgByMesgName(arg);
        }
        return new Mesg_1.default('unknown', MesgNum_1.default.INVALID);
    }
    static createMesgByMesg(mesg) {
        switch (mesg.getNum()) {
            case MesgNum_1.default.FILE_ID:
                return new FileIdMesg(mesg);
            case MesgNum_1.default.FILE_CREATOR:
                return new FileCreatorMesg(mesg);
            case MesgNum_1.default.TIMESTAMP_CORRELATION:
                return new TimestampCorrelationMesg(mesg);
            case MesgNum_1.default.SOFTWARE:
                return new SoftwareMesg(mesg);
            case MesgNum_1.default.SLAVE_DEVICE:
                return new SlaveDeviceMesg(mesg);
            case MesgNum_1.default.CAPABILITIES:
                return new CapabilitiesMesg(mesg);
            case MesgNum_1.default.FILE_CAPABILITIES:
                return new FileCapabilitiesMesg(mesg);
            case MesgNum_1.default.MESG_CAPABILITIES:
                return new MesgCapabilitiesMesg(mesg);
            case MesgNum_1.default.FIELD_CAPABILITIES:
                return new FieldCapabilitiesMesg(mesg);
            case MesgNum_1.default.DEVICE_SETTINGS:
                return new DeviceSettingsMesg(mesg);
            case MesgNum_1.default.USER_PROFILE:
                return new UserProfileMesg(mesg);
            case MesgNum_1.default.HRM_PROFILE:
                return new HrmProfileMesg(mesg);
            case MesgNum_1.default.SDM_PROFILE:
                return new SdmProfileMesg(mesg);
            case MesgNum_1.default.BIKE_PROFILE:
                return new BikeProfileMesg(mesg);
            case MesgNum_1.default.CONNECTIVITY:
                return new ConnectivityMesg(mesg);
            case MesgNum_1.default.WATCHFACE_SETTINGS:
                return new WatchfaceSettingsMesg(mesg);
            case MesgNum_1.default.OHR_SETTINGS:
                return new OhrSettingsMesg(mesg);
            case MesgNum_1.default.TIME_IN_ZONE:
                return new TimeInZoneMesg(mesg);
            case MesgNum_1.default.ZONES_TARGET:
                return new ZonesTargetMesg(mesg);
            case MesgNum_1.default.SPORT:
                return new SportMesg(mesg);
            case MesgNum_1.default.HR_ZONE:
                return new HrZoneMesg(mesg);
            case MesgNum_1.default.SPEED_ZONE:
                return new SpeedZoneMesg(mesg);
            case MesgNum_1.default.CADENCE_ZONE:
                return new CadenceZoneMesg(mesg);
            case MesgNum_1.default.POWER_ZONE:
                return new PowerZoneMesg(mesg);
            case MesgNum_1.default.MET_ZONE:
                return new MetZoneMesg(mesg);
            case MesgNum_1.default.DIVE_SETTINGS:
                return new DiveSettingsMesg(mesg);
            case MesgNum_1.default.DIVE_ALARM:
                return new DiveAlarmMesg(mesg);
            case MesgNum_1.default.DIVE_APNEA_ALARM:
                return new DiveApneaAlarmMesg(mesg);
            case MesgNum_1.default.DIVE_GAS:
                return new DiveGasMesg(mesg);
            case MesgNum_1.default.GOAL:
                return new GoalMesg(mesg);
            case MesgNum_1.default.ACTIVITY:
                return new ActivityMesg(mesg);
            case MesgNum_1.default.SESSION:
                return new SessionMesg(mesg);
            case MesgNum_1.default.LAP:
                return new LapMesg(mesg);
            case MesgNum_1.default.LENGTH:
                return new LengthMesg(mesg);
            case MesgNum_1.default.RECORD:
                return new RecordMesg(mesg);
            case MesgNum_1.default.EVENT:
                return new EventMesg(mesg);
            case MesgNum_1.default.DEVICE_INFO:
                return new DeviceInfoMesg(mesg);
            case MesgNum_1.default.DEVICE_AUX_BATTERY_INFO:
                return new DeviceAuxBatteryInfoMesg(mesg);
            case MesgNum_1.default.TRAINING_FILE:
                return new TrainingFileMesg(mesg);
            case MesgNum_1.default.WEATHER_CONDITIONS:
                return new WeatherConditionsMesg(mesg);
            case MesgNum_1.default.WEATHER_ALERT:
                return new WeatherAlertMesg(mesg);
            case MesgNum_1.default.GPS_METADATA:
                return new GpsMetadataMesg(mesg);
            case MesgNum_1.default.CAMERA_EVENT:
                return new CameraEventMesg(mesg);
            case MesgNum_1.default.GYROSCOPE_DATA:
                return new GyroscopeDataMesg(mesg);
            case MesgNum_1.default.ACCELEROMETER_DATA:
                return new AccelerometerDataMesg(mesg);
            case MesgNum_1.default.MAGNETOMETER_DATA:
                return new MagnetometerDataMesg(mesg);
            case MesgNum_1.default.BAROMETER_DATA:
                return new BarometerDataMesg(mesg);
            case MesgNum_1.default.THREE_D_SENSOR_CALIBRATION:
                return new ThreeDSensorCalibrationMesg(mesg);
            case MesgNum_1.default.ONE_D_SENSOR_CALIBRATION:
                return new OneDSensorCalibrationMesg(mesg);
            case MesgNum_1.default.VIDEO_FRAME:
                return new VideoFrameMesg(mesg);
            case MesgNum_1.default.OBDII_DATA:
                return new ObdiiDataMesg(mesg);
            case MesgNum_1.default.NMEA_SENTENCE:
                return new NmeaSentenceMesg(mesg);
            case MesgNum_1.default.AVIATION_ATTITUDE:
                return new AviationAttitudeMesg(mesg);
            case MesgNum_1.default.VIDEO:
                return new VideoMesg(mesg);
            case MesgNum_1.default.VIDEO_TITLE:
                return new VideoTitleMesg(mesg);
            case MesgNum_1.default.VIDEO_DESCRIPTION:
                return new VideoDescriptionMesg(mesg);
            case MesgNum_1.default.VIDEO_CLIP:
                return new VideoClipMesg(mesg);
            case MesgNum_1.default.EXD_SCREEN_CONFIGURATION:
                return new ExdScreenConfigurationMesg(mesg);
            case MesgNum_1.default.EXD_DATA_FIELD_CONFIGURATION:
                return new ExdDataFieldConfigurationMesg(mesg);
            case MesgNum_1.default.EXD_DATA_CONCEPT_CONFIGURATION:
                return new ExdDataConceptConfigurationMesg(mesg);
            case MesgNum_1.default.FIELD_DESCRIPTION:
                return new FieldDescriptionMesg(mesg);
            case MesgNum_1.default.DEVELOPER_DATA_ID:
                return new DeveloperDataIdMesg(mesg);
            case MesgNum_1.default.DIVE_SUMMARY:
                return new DiveSummaryMesg(mesg);
            case MesgNum_1.default.PAD:
                return new PadMesg(mesg);
            default:
                break;
        }
        return new Mesg_1.default('unknown', MesgNum_1.default.INVALID);
    }
    static createMesgByMesgNum(mesgNum) {
        for (let i = 0; i < Factory.mesgs.length; i++) {
            if (Factory.mesgs[i].num === mesgNum) {
                return new Mesg_1.default(Factory.mesgs[i]);
            }
        }
        return new Mesg_1.default('unknown', mesgNum);
    }
    static createMesgByMesgName(mesgName) {
        for (let i = 0; i < Factory.mesgs.length; i++) {
            if (Factory.mesgs[i].name === mesgName) {
                return new Mesg_1.default(Factory.mesgs[i]);
            }
        }
        return new Mesg_1.default(mesgName, MesgNum_1.default.INVALID);
    }
    static createField(mesgNameOrNum, fieldNameOrNum, values) {
        let mesgNum;
        let fieldName;
        if (typeof mesgNameOrNum === 'string') {
            const mesgName = mesgNameOrNum;
            if (typeof fieldNameOrNum === 'string') {
                fieldName = fieldNameOrNum;
            }
            else {
                mesgNum = fieldNameOrNum;
            }
            for (let i = 0; i < Factory.mesgs.length; i++) {
                if (Factory.mesgs[i].name === mesgName) {
                    return new Field_1.default(Factory.mesgs[i].getField(fieldName, false));
                }
            }
        }
        else {
            mesgNum = mesgNameOrNum;
            if (typeof fieldNameOrNum === 'string') {
                fieldName = fieldNameOrNum;
            }
            else {
                fieldName = 'unknown';
            }
        }
        for (let i = 0; i < Factory.mesgs.length; i++) {
            if (Factory.mesgs[i].num === mesgNum) {
                return new Field_1.default(Factory.mesgs[i].getField(fieldName, false));
            }
        }
        return new Field_1.default(fieldName, Fit_1.default.FIELD_NUM_INVALID, 0, 1, 0, '', false, Profile.Type.ENUM, values);
    }
}
Factory.mesgs = [
    new Mesg_1.default('file_id', MesgNum_1.default.FILE_ID),
    new Mesg_1.default('capabilities', MesgNum_1.default.CAPABILITIES),
    new Mesg_1.default('device_settings', MesgNum_1.default.DEVICE_SETTINGS),
    new Mesg_1.default('user_profile', MesgNum_1.default.USER_PROFILE),
    new Mesg_1.default('hrm_profile', MesgNum_1.default.HRM_PROFILE),
    new Mesg_1.default('sdm_profile', MesgNum_1.default.SDM_PROFILE),
    new Mesg_1.default('bike_profile', MesgNum_1.default.BIKE_PROFILE),
    new Mesg_1.default('zones_target', MesgNum_1.default.ZONES_TARGET),
    new Mesg_1.default('hr_zone', MesgNum_1.default.HR_ZONE),
    new Mesg_1.default('power_zone', MesgNum_1.default.POWER_ZONE),
    new Mesg_1.default('met_zone', MesgNum_1.default.MET_ZONE),
    new Mesg_1.default('sport', MesgNum_1.default.SPORT),
    new Mesg_1.default('goal', MesgNum_1.default.GOAL),
    new Mesg_1.default('session', MesgNum_1.default.SESSION),
    new Mesg_1.default('lap', MesgNum_1.default.LAP),
    new Mesg_1.default('record', MesgNum_1.default.RECORD),
    new Mesg_1.default('event', MesgNum_1.default.EVENT),
    new Mesg_1.default('device_info', MesgNum_1.default.DEVICE_INFO),
    new Mesg_1.default('workout', MesgNum_1.default.WORKOUT),
    new Mesg_1.default('workout_step', MesgNum_1.default.WORKOUT_STEP),
    new Mesg_1.default('schedule', MesgNum_1.default.SCHEDULE),
    new Mesg_1.default('weight_scale', MesgNum_1.default.WEIGHT_SCALE),
    new Mesg_1.default('course', MesgNum_1.default.COURSE),
    new Mesg_1.default('course_point', MesgNum_1.default.COURSE_POINT),
    new Mesg_1.default('totals', MesgNum_1.default.TOTALS),
    new Mesg_1.default('activity', MesgNum_1.default.ACTIVITY),
    new Mesg_1.default('software', MesgNum_1.default.SOFTWARE),
    new Mesg_1.default('file_capabilities', MesgNum_1.default.FILE_CAPABILITIES),
    new Mesg_1.default('mesg_capabilities', MesgNum_1.default.MESG_CAPABILITIES),
    new Mesg_1.default('field_capabilities', MesgNum_1.default.FIELD_CAPABILITIES),
    new Mesg_1.default('file_creator', MesgNum_1.default.FILE_CREATOR),
    new Mesg_1.default('blood_pressure', MesgNum_1.default.BLOOD_PRESSURE),
    new Mesg_1.default('speed_zone', MesgNum_1.default.SPEED_ZONE),
    new Mesg_1.default('monitoring', MesgNum_1.default.MONITORING),
    new Mesg_1.default('training_file', MesgNum_1.default.TRAINING_FILE),
    new Mesg_1.default('hrv', MesgNum_1.default.HRV),
    new Mesg_1.default('ant_rx', MesgNum_1.default.ANT_RX),
    new Mesg_1.default('ant_tx', MesgNum_1.default.ANT_TX),
    new Mesg_1.default('ant_channel_id', MesgNum_1.default.ANT_CHANNEL_ID),
    new Mesg_1.default('length', MesgNum_1.default.LENGTH),
    new Mesg_1.default('monitoring_info', MesgNum_1.default.MONITORING_INFO),
    new Mesg_1.default('pad', MesgNum_1.default.PAD),
    new Mesg_1.default('slave_device', MesgNum_1.default.SLAVE_DEVICE),
    new Mesg_1.default('connectivity', MesgNum_1.default.CONNECTIVITY),
    new Mesg_1.default('weather_conditions', MesgNum_1.default.WEATHER_CONDITIONS),
    new Mesg_1.default('weather_alert', MesgNum_1.default.WEATHER_ALERT),
    new Mesg_1.default('cadence_zone', MesgNum_1.default.CADENCE_ZONE),
    new Mesg_1.default('hr', MesgNum_1.default.HR),
    new Mesg_1.default('segment_lap', MesgNum_1.default.SEGMENT_LAP),
    new Mesg_1.default('memo_glob', MesgNum_1.default.MEMO_GLOB),
    new Mesg_1.default('segment_id', MesgNum_1.default.SEGMENT_ID),
    new Mesg_1.default('segment_leaderboard_entry', MesgNum_1.default.SEGMENT_LEADERBOARD_ENTRY),
    new Mesg_1.default('segment_point', MesgNum_1.default.SEGMENT_POINT),
    new Mesg_1.default('segment_file', MesgNum_1.default.SEGMENT_FILE),
    new Mesg_1.default('workout_session', MesgNum_1.default.WORKOUT_SESSION),
    new Mesg_1.default('watchface_settings', MesgNum_1.default.WATCHFACE_SETTINGS),
    new Mesg_1.default('gps_metadata', MesgNum_1.default.GPS_METADATA),
    new Mesg_1.default('camera_event', MesgNum_1.default.CAMERA_EVENT),
    new Mesg_1.default('timestamp_correlation', MesgNum_1.default.TIMESTAMP_CORRELATION),
    new Mesg_1.default('gyroscope_data', MesgNum_1.default.GYROSCOPE_DATA),
    new Mesg_1.default('accelerometer_data', MesgNum_1.default.ACCELEROMETER_DATA),
    new Mesg_1.default('three_d_sensor_calibration', MesgNum_1.default.THREE_D_SENSOR_CALIBRATION),
    new Mesg_1.default('video_frame', MesgNum_1.default.VIDEO_FRAME),
    new Mesg_1.default('obdii_data', MesgNum_1.default.OBDII_DATA),
    new Mesg_1.default('nmea_sentence', MesgNum_1.default.NMEA_SENTENCE),
    new Mesg_1.default('aviation_attitude', MesgNum_1.default.AVIATION_ATTITUDE),
    new Mesg_1.default('video', MesgNum_1.default.VIDEO),
    new Mesg_1.default('video_title', MesgNum_1.default.VIDEO_TITLE),
    new Mesg_1.default('video_description', MesgNum_1.default.VIDEO_DESCRIPTION),
    new Mesg_1.default('video_clip', MesgNum_1.default.VIDEO_CLIP),
    new Mesg_1.default('ohr_settings', MesgNum_1.default.OHR_SETTINGS),
    new Mesg_1.default('exd_screen_configuration', MesgNum_1.default.EXD_SCREEN_CONFIGURATION),
    new Mesg_1.default('exd_data_field_configuration', MesgNum_1.default.EXD_DATA_FIELD_CONFIGURATION),
    new Mesg_1.default('exd_data_concept_configuration', MesgNum_1.default.EXD_DATA_CONCEPT_CONFIGURATION),
    new Mesg_1.default('field_description', MesgNum_1.default.FIELD_DESCRIPTION),
    new Mesg_1.default('developer_data_id', MesgNum_1.default.DEVELOPER_DATA_ID),
    new Mesg_1.default('magnetometer_data', MesgNum_1.default.MAGNETOMETER_DATA),
    new Mesg_1.default('barometer_data', MesgNum_1.default.BAROMETER_DATA),
    new Mesg_1.default('one_d_sensor_calibration', MesgNum_1.default.ONE_D_SENSOR_CALIBRATION),
    new Mesg_1.default('monitoring_hr_data', MesgNum_1.default.MONITORING_HR_DATA),
    new Mesg_1.default('time_in_zone', MesgNum_1.default.TIME_IN_ZONE),
    new Mesg_1.default('set', MesgNum_1.default.SET),
    new Mesg_1.default('stress_level', MesgNum_1.default.STRESS_LEVEL),
    new Mesg_1.default('max_met_data', MesgNum_1.default.MAX_MET_DATA),
    new Mesg_1.default('dive_settings', MesgNum_1.default.DIVE_SETTINGS),
    new Mesg_1.default('dive_gas', MesgNum_1.default.DIVE_GAS),
    new Mesg_1.default('dive_alarm', MesgNum_1.default.DIVE_ALARM),
    new Mesg_1.default('exercise_title', MesgNum_1.default.EXERCISE_TITLE),
    new Mesg_1.default('dive_summary', MesgNum_1.default.DIVE_SUMMARY),
    new Mesg_1.default('sleep_level', MesgNum_1.default.SLEEP_LEVEL),
    new Mesg_1.default('jump', MesgNum_1.default.JUMP),
    new Mesg_1.default('beat_intervals', MesgNum_1.default.BEAT_INTERVALS),
    new Mesg_1.default('respiration_rate', MesgNum_1.default.RESPIRATION_RATE),
    new Mesg_1.default('split', MesgNum_1.default.SPLIT),
    new Mesg_1.default('climb_pro', MesgNum_1.default.CLIMB_PRO),
    new Mesg_1.default('tank_update', MesgNum_1.default.TANK_UPDATE),
    new Mesg_1.default('tank_summary', MesgNum_1.default.TANK_SUMMARY),
    new Mesg_1.default('sleep_assessment', MesgNum_1.default.SLEEP_ASSESSMENT),
    new Mesg_1.default('hrv_status_summary', MesgNum_1.default.HRV_STATUS_SUMMARY),
    new Mesg_1.default('hrv_value', MesgNum_1.default.HRV_VALUE),
    new Mesg_1.default('device_aux_battery_info', MesgNum_1.default.DEVICE_AUX_BATTERY_INFO),
    new Mesg_1.default('dive_apnea_alarm', MesgNum_1.default.DIVE_APNEA_ALARM),
    new Mesg_1.default('mfg_range_min', MesgNum_1.default.MFG_RANGE_MIN),
    new Mesg_1.default('mfg_range_max', MesgNum_1.default.MFG_RANGE_MAX),
];
exports.default = Factory;

import Field from './Field';
import Fit from './Fit';
import Mesg from './Mesg';
import MesgNum from './MesgNum';

class Factory {
  private static readonly mesgs: Mesg[] = [
    new Mesg('file_id', MesgNum.FILE_ID),
    new Mesg('capabilities', MesgNum.CAPABILITIES),
    new Mesg('device_settings', MesgNum.DEVICE_SETTINGS),
    new Mesg('user_profile', MesgNum.USER_PROFILE),
    new Mesg('hrm_profile', MesgNum.HRM_PROFILE),
    new Mesg('sdm_profile', MesgNum.SDM_PROFILE),
    new Mesg('bike_profile', MesgNum.BIKE_PROFILE),
    new Mesg('zones_target', MesgNum.ZONES_TARGET),
    new Mesg('hr_zone', MesgNum.HR_ZONE),
    new Mesg('power_zone', MesgNum.POWER_ZONE),
    new Mesg('met_zone', MesgNum.MET_ZONE),
    new Mesg('sport', MesgNum.SPORT),
    new Mesg('goal', MesgNum.GOAL),
    new Mesg('session', MesgNum.SESSION),
    new Mesg('lap', MesgNum.LAP),
    new Mesg('record', MesgNum.RECORD),
    new Mesg('event', MesgNum.EVENT),
    new Mesg('device_info', MesgNum.DEVICE_INFO),
    new Mesg('workout', MesgNum.WORKOUT),
    new Mesg('workout_step', MesgNum.WORKOUT_STEP),
    new Mesg('schedule', MesgNum.SCHEDULE),
    new Mesg('weight_scale', MesgNum.WEIGHT_SCALE),
    new Mesg('course', MesgNum.COURSE),
    new Mesg('course_point', MesgNum.COURSE_POINT),
    new Mesg('totals', MesgNum.TOTALS),
    new Mesg('activity', MesgNum.ACTIVITY),
    new Mesg('software', MesgNum.SOFTWARE),
    new Mesg('file_capabilities', MesgNum.FILE_CAPABILITIES),
    new Mesg('mesg_capabilities', MesgNum.MESG_CAPABILITIES),
    new Mesg('field_capabilities', MesgNum.FIELD_CAPABILITIES),
    new Mesg('file_creator', MesgNum.FILE_CREATOR),
    new Mesg('blood_pressure', MesgNum.BLOOD_PRESSURE),
    new Mesg('speed_zone', MesgNum.SPEED_ZONE),
    new Mesg('monitoring', MesgNum.MONITORING),
    new Mesg('training_file', MesgNum.TRAINING_FILE),
    new Mesg('hrv', MesgNum.HRV),
    new Mesg('ant_rx', MesgNum.ANT_RX),
    new Mesg('ant_tx', MesgNum.ANT_TX),
    new Mesg('ant_channel_id', MesgNum.ANT_CHANNEL_ID),
    new Mesg('length', MesgNum.LENGTH),
    new Mesg('monitoring_info', MesgNum.MONITORING_INFO),
    new Mesg('pad', MesgNum.PAD),
    new Mesg('slave_device', MesgNum.SLAVE_DEVICE),
    new Mesg('connectivity', MesgNum.CONNECTIVITY),
    new Mesg('weather_conditions', MesgNum.WEATHER_CONDITIONS),
    new Mesg('weather_alert', MesgNum.WEATHER_ALERT),
    new Mesg('cadence_zone', MesgNum.CADENCE_ZONE),
    new Mesg('hr', MesgNum.HR),
    new Mesg('segment_lap', MesgNum.SEGMENT_LAP),
    new Mesg('memo_glob', MesgNum.MEMO_GLOB),
    new Mesg('segment_id', MesgNum.SEGMENT_ID),
    new Mesg('segment_leaderboard_entry', MesgNum.SEGMENT_LEADERBOARD_ENTRY),
    new Mesg('segment_point', MesgNum.SEGMENT_POINT),
    new Mesg('segment_file', MesgNum.SEGMENT_FILE),
    new Mesg('workout_session', MesgNum.WORKOUT_SESSION),
    new Mesg('watchface_settings', MesgNum.WATCHFACE_SETTINGS),
    new Mesg('gps_metadata', MesgNum.GPS_METADATA),
    new Mesg('camera_event', MesgNum.CAMERA_EVENT),
    new Mesg('timestamp_correlation', MesgNum.TIMESTAMP_CORRELATION),
    new Mesg('gyroscope_data', MesgNum.GYROSCOPE_DATA),
    new Mesg('accelerometer_data', MesgNum.ACCELEROMETER_DATA),
    new Mesg('three_d_sensor_calibration', MesgNum.THREE_D_SENSOR_CALIBRATION),
    new Mesg('video_frame', MesgNum.VIDEO_FRAME),
    new Mesg('obdii_data', MesgNum.OBDII_DATA),
    new Mesg('nmea_sentence', MesgNum.NMEA_SENTENCE),
    new Mesg('aviation_attitude', MesgNum.AVIATION_ATTITUDE),
    new Mesg('video', MesgNum.VIDEO),
    new Mesg('video_title', MesgNum.VIDEO_TITLE),
    new Mesg('video_description', MesgNum.VIDEO_DESCRIPTION),
    new Mesg('video_clip', MesgNum.VIDEO_CLIP),
    new Mesg('ohr_settings', MesgNum.OHR_SETTINGS),
    new Mesg('exd_screen_configuration', MesgNum.EXD_SCREEN_CONFIGURATION),
    new Mesg('exd_data_field_configuration', MesgNum.EXD_DATA_FIELD_CONFIGURATION),
    new Mesg('exd_data_concept_configuration', MesgNum.EXD_DATA_CONCEPT_CONFIGURATION),
    new Mesg('field_description', MesgNum.FIELD_DESCRIPTION),
    new Mesg('developer_data_id', MesgNum.DEVELOPER_DATA_ID),
    new Mesg('magnetometer_data', MesgNum.MAGNETOMETER_DATA),
    new Mesg('barometer_data', MesgNum.BAROMETER_DATA),
    new Mesg('one_d_sensor_calibration', MesgNum.ONE_D_SENSOR_CALIBRATION),
    new Mesg('monitoring_hr_data', MesgNum.MONITORING_HR_DATA),
    new Mesg('time_in_zone', MesgNum.TIME_IN_ZONE),
    new Mesg('set', MesgNum.SET),
    new Mesg('stress_level', MesgNum.STRESS_LEVEL),
    new Mesg('max_met_data', MesgNum.MAX_MET_DATA),
    new Mesg('dive_settings', MesgNum.DIVE_SETTINGS),
    new Mesg('dive_gas', MesgNum.DIVE_GAS),
    new Mesg('dive_alarm', MesgNum.DIVE_ALARM),
    new Mesg('exercise_title', MesgNum.EXERCISE_TITLE),
    new Mesg('dive_summary', MesgNum.DIVE_SUMMARY),
    new Mesg('sleep_level', MesgNum.SLEEP_LEVEL),
    new Mesg('jump', MesgNum.JUMP),
    new Mesg('beat_intervals', MesgNum.BEAT_INTERVALS),
    new Mesg('respiration_rate', MesgNum.RESPIRATION_RATE),
    new Mesg('split', MesgNum.SPLIT),
    new Mesg('climb_pro', MesgNum.CLIMB_PRO),
    new Mesg('tank_update', MesgNum.TANK_UPDATE),
    new Mesg('tank_summary', MesgNum.TANK_SUMMARY),
    new Mesg('sleep_assessment', MesgNum.SLEEP_ASSESSMENT),
    new Mesg('hrv_status_summary', MesgNum.HRV_STATUS_SUMMARY),
    new Mesg('hrv_value', MesgNum.HRV_VALUE),
    new Mesg('device_aux_battery_info', MesgNum.DEVICE_AUX_BATTERY_INFO),
    new Mesg('dive_apnea_alarm', MesgNum.DIVE_APNEA_ALARM),
    new Mesg('mfg_range_min', MesgNum.MFG_RANGE_MIN),
    new Mesg('mfg_range_max', MesgNum.MFG_RANGE_MAX),
  ];
  static createMesg(arg: Mesg | number | string): Mesg {
    if (arg instanceof Mesg) {
      return Factory.createMesgByMesg(arg);
    } else if (typeof arg === 'number') {
      return Factory.createMesgByMesgNum(arg);
    } else if (typeof arg === 'string') {
      return Factory.createMesgByMesgName(arg);
    }
    return new Mesg('unknown', MesgNum.INVALID);
  }

  private static createMesgByMesg(mesg: Mesg): Mesg {
    switch (mesg.getNum()) {
      case MesgNum.FILE_ID:
        return new FileIdMesg(mesg);
      case MesgNum.FILE_CREATOR:
        return new FileCreatorMesg(mesg);
      case MesgNum.TIMESTAMP_CORRELATION:
        return new TimestampCorrelationMesg(mesg);
      case MesgNum.SOFTWARE:
        return new SoftwareMesg(mesg);
      case MesgNum.SLAVE_DEVICE:
        return new SlaveDeviceMesg(mesg);
      case MesgNum.CAPABILITIES:
        return new CapabilitiesMesg(mesg);
      case MesgNum.FILE_CAPABILITIES:
        return new FileCapabilitiesMesg(mesg);
      case MesgNum.MESG_CAPABILITIES:
        return new MesgCapabilitiesMesg(mesg);
      case MesgNum.FIELD_CAPABILITIES:
        return new FieldCapabilitiesMesg(mesg);
      case MesgNum.DEVICE_SETTINGS:
        return new DeviceSettingsMesg(mesg);
      case MesgNum.USER_PROFILE:
        return new UserProfileMesg(mesg);
      case MesgNum.HRM_PROFILE:
        return new HrmProfileMesg(mesg);
      case MesgNum.SDM_PROFILE:
        return new SdmProfileMesg(mesg);
      case MesgNum.BIKE_PROFILE:
        return new BikeProfileMesg(mesg);
      case MesgNum.CONNECTIVITY:
        return new ConnectivityMesg(mesg);
      case MesgNum.WATCHFACE_SETTINGS:
        return new WatchfaceSettingsMesg(mesg);
      case MesgNum.OHR_SETTINGS:
        return new OhrSettingsMesg(mesg);
      case MesgNum.TIME_IN_ZONE:
        return new TimeInZoneMesg(mesg);
      case MesgNum.ZONES_TARGET:
        return new ZonesTargetMesg(mesg);
      case MesgNum.SPORT:
        return new SportMesg(mesg);
      case MesgNum.HR_ZONE:
        return new HrZoneMesg(mesg);
      case MesgNum.SPEED_ZONE:
        return new SpeedZoneMesg(mesg);
      case MesgNum.CADENCE_ZONE:
        return new CadenceZoneMesg(mesg);
      case MesgNum.POWER_ZONE:
        return new PowerZoneMesg(mesg);
      case MesgNum.MET_ZONE:
        return new MetZoneMesg(mesg);
      case MesgNum.DIVE_SETTINGS:
        return new DiveSettingsMesg(mesg);
      case MesgNum.DIVE_ALARM:
        return new DiveAlarmMesg(mesg);
      case MesgNum.DIVE_APNEA_ALARM:
        return new DiveApneaAlarmMesg(mesg);
      case MesgNum.DIVE_GAS:
        return new DiveGasMesg(mesg);
      case MesgNum.GOAL:
        return new GoalMesg(mesg);
      case MesgNum.ACTIVITY:
        return new ActivityMesg(mesg);
      case MesgNum.SESSION:
        return new SessionMesg(mesg);
      case MesgNum.LAP:
        return new LapMesg(mesg);
      case MesgNum.LENGTH:
        return new LengthMesg(mesg);
      case MesgNum.RECORD:
        return new RecordMesg(mesg);
      case MesgNum.EVENT:
        return new EventMesg(mesg);
      case MesgNum.DEVICE_INFO:
        return new DeviceInfoMesg(mesg);
      case MesgNum.DEVICE_AUX_BATTERY_INFO:
        return new DeviceAuxBatteryInfoMesg(mesg);
      case MesgNum.TRAINING_FILE:
        return new TrainingFileMesg(mesg);
      case MesgNum.WEATHER_CONDITIONS:
        return new WeatherConditionsMesg(mesg);
      case MesgNum.WEATHER_ALERT:
        return new WeatherAlertMesg(mesg);
      case MesgNum.GPS_METADATA:
        return new GpsMetadataMesg(mesg);
      case MesgNum.CAMERA_EVENT:
        return new CameraEventMesg(mesg);
      case MesgNum.GYROSCOPE_DATA:
        return new GyroscopeDataMesg(mesg);
      case MesgNum.ACCELEROMETER_DATA:
        return new AccelerometerDataMesg(mesg);
      case MesgNum.MAGNETOMETER_DATA:
        return new MagnetometerDataMesg(mesg);
      case MesgNum.BAROMETER_DATA:
        return new BarometerDataMesg(mesg);
      case MesgNum.THREE_D_SENSOR_CALIBRATION:
        return new ThreeDSensorCalibrationMesg(mesg);
      case MesgNum.ONE_D_SENSOR_CALIBRATION:
        return new OneDSensorCalibrationMesg(mesg);
      case MesgNum.VIDEO_FRAME:
        return new VideoFrameMesg(mesg);
      case MesgNum.OBDII_DATA:
        return new ObdiiDataMesg(mesg);
      case MesgNum.NMEA_SENTENCE:
        return new NmeaSentenceMesg(mesg);
      case MesgNum.AVIATION_ATTITUDE:
        return new AviationAttitudeMesg(mesg);
      case MesgNum.VIDEO:
        return new VideoMesg(mesg);
      case MesgNum.VIDEO_TITLE:
        return new VideoTitleMesg(mesg);
      case MesgNum.VIDEO_DESCRIPTION:
        return new VideoDescriptionMesg(mesg);
      case MesgNum.VIDEO_CLIP:
        return new VideoClipMesg(mesg);
      case MesgNum.EXD_SCREEN_CONFIGURATION:
        return new ExdScreenConfigurationMesg(mesg);
      case MesgNum.EXD_DATA_FIELD_CONFIGURATION:
        return new ExdDataFieldConfigurationMesg(mesg);
      case MesgNum.EXD_DATA_CONCEPT_CONFIGURATION:
        return new ExdDataConceptConfigurationMesg(mesg);
      case MesgNum.FIELD_DESCRIPTION:
        return new FieldDescriptionMesg(mesg);
      case MesgNum.DEVELOPER_DATA_ID:
        return new DeveloperDataIdMesg(mesg);
      case MesgNum.DIVE_SUMMARY:
        return new DiveSummaryMesg(mesg);
      case MesgNum.PAD:
        return new PadMesg(mesg);
      default:
        break;
    }
    return new Mesg('unknown', MesgNum.INVALID);
  }

  private static createMesgByMesgNum(mesgNum: number): Mesg {
    for (let i = 0; i < Factory.mesgs.length; i++) {
      if (Factory.mesgs[i].num === mesgNum) {
        return new Mesg(Factory.mesgs[i]);
      }
    }
    return new Mesg('unknown', mesgNum);
  }

  private static createMesgByMesgName(mesgName: string): Mesg {
    for (let i = 0; i < Factory.mesgs.length; i++) {
      if (Factory.mesgs[i].name === mesgName) {
        return new Mesg(Factory.mesgs[i]);
      }
    }
    return new Mesg(mesgName, MesgNum.INVALID);
  }

  static createField(
    mesgNameOrNum: string | number,
    fieldNameOrNum: string | number,
    values?: unknown[]
  ): Field {
    let mesgNum: number;
    let fieldName: string;

    if (typeof mesgNameOrNum === 'string') {
      const mesgName = mesgNameOrNum;
      if (typeof fieldNameOrNum === 'string') {
        fieldName = fieldNameOrNum;
      } else {
        mesgNum = fieldNameOrNum;
      }

      for (let i = 0; i < Factory.mesgs.length; i++) {
        if (Factory.mesgs[i].name === mesgName) {
          return new Field(Factory.mesgs[i].getField(fieldName, false));
        }
      }
    } else {
      mesgNum = mesgNameOrNum as number;
      if (typeof fieldNameOrNum === 'string') {
        fieldName = fieldNameOrNum;
      } else {
        fieldName = 'unknown';
      }
    }

    for (let i = 0; i < Factory.mesgs.length; i++) {
      if (Factory.mesgs[i].num === mesgNum) {
        return new Field(Factory.mesgs[i].getField(fieldName, false));
      }
    }

    return new Field(
      fieldName,
      Fit.FIELD_NUM_INVALID,
      0,
      1,
      0,
      '',
      false,
      Profile.Type.ENUM,
      values
    );
  }

}
export default Factory;

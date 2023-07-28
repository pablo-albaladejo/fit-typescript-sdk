import Field from './Field';
import Fit from './Fit';
import Mesg from './Mesg';
import MesgNum from './MesgNum';

class Factory {
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
      case MesgNum.OHR_SETTINGS:
        return new OhrSettingsMesg(mesg);
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
    values?: any[]
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

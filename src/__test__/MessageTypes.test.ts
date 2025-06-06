import Mesg from '../Mesg';
import { FileEncoder } from '../FileEncoder';
import FileDecoder from '../FileDecoder';
import ProtocolVersion from '../ProtocolVersion';
import Fit from '../Fit';
import * as fs from 'fs';
import Profile, { ProfileType } from '../Profile';
import FitBaseType from '../FitBaseType';
import Factory from '../Factory';
import MesgNum from '../MesgNum';

const names = [
  "FileIdMesg",
  "CapabilitiesMesg",
  "DeviceSettingsMesg",
  "UserProfileMesg",
  "HrmProfileMesg",
  "SdmProfileMesg",
  "BikeProfileMesg",
  "ZonesTargetMesg",
  "HrZoneMesg",
  "PowerZoneMesg",
  "MetZoneMesg",
  "SportMesg",
  "GoalMesg",
  "SessionMesg",
  "LapMesg",
  "RecordMesg",
  "EventMesg",
  "DeviceInfoMesg",
  "WorkoutMesg",
  "WorkoutStepMesg",
  "ScheduleMesg",
  "WeightScaleMesg",
  "CourseMesg",
  "CoursePointMesg",
  "TotalsMesg",
  "ActivityMesg",
  "SoftwareMesg",
  "FileCapabilitiesMesg",
  "MesgCapabilitiesMesg",
  "FieldCapabilitiesMesg",
  "FileCreatorMesg",
  "BloodPressureMesg",
  "SpeedZoneMesg",
  "MonitoringMesg",
  "TrainingFileMesg",
  "HrvMesg",
  "AntRxMesg",
  "AntTxMesg",
  "AntChannelIdMesg",
  "LengthMesg",
  "MonitoringInfoMesg",
  "PadMesg",
  "SlaveDeviceMesg",
  "ConnectivityMesg",
  "WeatherConditionsMesg",
  "WeatherAlertMesg",
  "CadenceZoneMesg",
  "HrMesg",
  "SegmentLapMesg",
  "MemoGlobMesg",
  "SegmentIdMesg",
  "SegmentLeaderboardEntryMesg",
  "SegmentPointMesg",
  "SegmentFileMesg",
  "WorkoutSessionMesg",
  "WatchfaceSettingsMesg",
  "GpsMetadataMesg",
  "CameraEventMesg",
  "TimestampCorrelationMesg",
  "GyroscopeDataMesg",
  "AccelerometerDataMesg",
  "ThreeDSensorCalibrationMesg",
  "VideoFrameMesg",
  "ObdiiDataMesg",
  "NmeaSentenceMesg",
  "AviationAttitudeMesg",
  "VideoMesg",
  "VideoTitleMesg",
  "VideoDescriptionMesg",
  "VideoClipMesg",
  "OhrSettingsMesg",
  "ExdScreenConfigurationMesg",
  "ExdDataFieldConfigurationMesg",
  "ExdDataConceptConfigurationMesg",
  "DeveloperDataIdMesg",
  "MagnetometerDataMesg",
  "BarometerDataMesg",
  "OneDSensorCalibrationMesg",
  "MonitoringHrDataMesg",
  "TimeInZoneMesg",
  "SetMesg",
  "StressLevelMesg",
  "MaxMetDataMesg",
  "DiveSettingsMesg",
  "DiveGasMesg",
  "DiveAlarmMesg",
  "ExerciseTitleMesg",
  "DiveSummaryMesg",
  "SleepLevelMesg",
  "JumpMesg",
  "BeatIntervalsMesg",
  "RespirationRateMesg",
  "SplitMesg",
  "ClimbProMesg",
  "TankUpdateMesg",
  "TankSummaryMesg",
  "SleepAssessmentMesg",
  "HrvStatusSummaryMesg",
  "HrvValueMesg",
  "DeviceAuxBatteryInfoMesg",
  "DiveApneaAlarmMesg",
  "MfgRangeMinMesg",
  "MfgRangeMaxMesg",
];

describe('Message classes', () => {
  for (const name of names) {
    test(`${name} creation and encode/decode`, () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const Cls = require(`../${name}`).default;
      const m = new Cls();
      expect(m).toBeInstanceOf(Mesg);

      const path = `./tmp_${name}.fit`;
      const enc = new FileEncoder(path, ProtocolVersion.V2_0);
      enc.writeMesg(m);
      enc.close();

      const dec = new FileDecoder(path);
      const header = dec.readHeader();
      expect(header.dataType).toBe('.FIT');
      expect(header.dataSize).toBe(
        fs.statSync(path).size - Fit.FILE_HDR_SIZE - Fit.CRC_SIZE
      );
      fs.unlinkSync(path);
    });
  }
});

test('Profile helpers', () => {
  expect(Profile.getMesgNum('FILE_ID')).toBe(MesgNum.FILE_ID);
  expect(Profile.getProfileVersion()).toBeGreaterThan(0);
  expect(ProfileType.ENUM).toBeDefined();
  expect(FitBaseType.UINT8).toBeDefined();
});

test('Factory uses mesg templates', () => {
  const mesg = Factory.createMesg(MesgNum.FILE_ID);
  expect(mesg).toBeInstanceOf(Mesg);
});

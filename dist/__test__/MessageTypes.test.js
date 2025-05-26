"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mesg_1 = __importDefault(require("../Mesg"));
const FileEncoder_1 = require("../FileEncoder");
const FileDecoder_1 = __importDefault(require("../FileDecoder"));
const ProtocolVersion_1 = __importDefault(require("../ProtocolVersion"));
const Fit_1 = __importDefault(require("../Fit"));
const fs = __importStar(require("fs"));
const Profile_1 = __importStar(require("../Profile"));
const FitBaseType_1 = __importDefault(require("../FitBaseType"));
const Factory_1 = __importDefault(require("../Factory"));
const MesgNum_1 = __importDefault(require("../MesgNum"));
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
            expect(m).toBeInstanceOf(Mesg_1.default);
            const path = `./tmp_${name}.fit`;
            const enc = new FileEncoder_1.FileEncoder(path, ProtocolVersion_1.default.V2_0);
            enc.writeMesg(m);
            enc.close();
            const dec = new FileDecoder_1.default(path);
            const header = dec.readHeader();
            expect(header.dataType).toBe('.FIT');
            expect(header.dataSize).toBe(fs.statSync(path).size - Fit_1.default.FILE_HDR_SIZE - Fit_1.default.CRC_SIZE);
            fs.unlinkSync(path);
        });
    }
});
test('Profile helpers', () => {
    expect(Profile_1.default.getMesgNum('FILE_ID')).toBe(MesgNum_1.default.FILE_ID);
    expect(Profile_1.default.getProfileVersion()).toBeGreaterThan(0);
    expect(Profile_1.ProfileType.ENUM).toBeDefined();
    expect(FitBaseType_1.default.UINT8).toBeDefined();
});
test('Factory uses mesg templates', () => {
    const mesg = Factory_1.default.createMesg(MesgNum_1.default.FILE_ID);
    expect(mesg).toBeInstanceOf(Mesg_1.default);
});

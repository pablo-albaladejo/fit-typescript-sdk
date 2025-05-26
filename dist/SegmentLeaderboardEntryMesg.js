"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mesg_1 = __importDefault(require("./Mesg"));
const MesgNum_1 = __importDefault(require("./MesgNum"));
class SegmentLeaderboardEntryMesg extends Mesg_1.default {
    constructor(mesg) {
        super(mesg || 'segment_leaderboard_entry', MesgNum_1.default.SEGMENT_LEADERBOARD_ENTRY);
    }
}
exports.default = SegmentLeaderboardEntryMesg;

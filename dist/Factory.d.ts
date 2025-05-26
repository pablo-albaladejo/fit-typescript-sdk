import Field from './Field';
import Mesg from './Mesg';
declare class Factory {
    private static readonly mesgs;
    static createMesg(arg: Mesg | number | string): Mesg;
    private static createMesgByMesg;
    private static createMesgByMesgNum;
    private static createMesgByMesgName;
    static createField(mesgNameOrNum: string | number, fieldNameOrNum: string | number, values?: unknown[]): Field;
}
export default Factory;

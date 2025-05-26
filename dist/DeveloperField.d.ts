import Field from './Field';
declare class DeveloperField extends Field {
    private developerDataIndex;
    constructor(field?: DeveloperField);
    getDeveloperDataIndex(): number;
    setDeveloperDataIndex(index: number): void;
}
export default DeveloperField;

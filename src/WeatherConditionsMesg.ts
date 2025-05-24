import Mesg from './Mesg';
import MesgNum from './MesgNum';

class WeatherConditionsMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'weather_conditions', MesgNum.WEATHER_CONDITIONS);
  }
}
export default WeatherConditionsMesg;

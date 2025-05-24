import Mesg from './Mesg';
import MesgNum from './MesgNum';

class WeatherAlertMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'weather_alert', MesgNum.WEATHER_ALERT);
  }
}
export default WeatherAlertMesg;

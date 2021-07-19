import { BehaviorSubject } from 'rxjs';

// Create new Instance of BehaviourSubject
const notifications = new BehaviorSubject(false);

class NotificationService {

  // Class property type catsed to Observable  
  notifications = notifications.asObservable();


  /**
   * Method returns a push notification all the listeners
   * @param message - message to show
   * @param type - type of notfication
   */
  sendNotification = (message: any, type: any) => {
    try {
      if (message) {
        const msg: any = message instanceof String ? message : message.toString();

        switch (type) {
          case OrderTypes.placed:
            notifications.next(msg);
            break;
          case OrderTypes.shipped:
            notifications.next(msg);
            break;
          case OrderTypes.received:
            notifications.next(msg);
            break;
          case OrderTypes.error:
            notifications.next(msg);
            break;
          default:
            notifications.next(msg);
            break;
        }
      }
    } catch (ex) {
      notifications.next(ex.message);
    }
    // Since Observables task is done, set it to null
    notifications.next(false);
  }
}

// create a new instance of NotificationService
const notificationService = new NotificationService();

export default notificationService;

export const OrderTypes = Object.freeze({
  placed: Symbol('placed'),
  shipped: Symbol('shipped'),
  received: Symbol('received'),
  error: Symbol('error')
});
import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);

    NotificationHelper.sendNotification({
      title: `${restaurant.name} is open, Now!`,
      options: {
        body: restaurant.description,
      },
    });
  },
};
export default WebSocketInitiator;

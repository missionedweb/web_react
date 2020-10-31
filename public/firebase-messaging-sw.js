importScripts('https://www.gstatic.com/firebasejs/4.3.0/firebase-app.js');
importScripts('firebase-messaging.js');

var config = {

    
    apiKey: "AIzaSyCf3sUmEuklc8L04k6J6IQkdGZ5q9THJF8",
    authDomain: "missioned-bb43f.firebaseapp.com",
    databaseURL: "https://missioned-bb43f.firebaseio.com",
    projectId: "missioned-bb43f",
    storageBucket: "missioned-bb43f.appspot.com",
    messagingSenderId: "613467196576",
    appId: "1:613467196576:web:6ec0773fa2f2d7cb388dc5"
};
firebase.initializeApp(config);

const messaging= firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
    const title='MissionED';
    const options={
      body: payload.data.message,
      icon: payload.data.icon,
      image:payload.data.image,
        data:{
      click_action: payload.data.click_action
        }
      
    };
    return self.registration.showNotification(title,options);
    
});
self.addEventListener('notificationclick', function(event){
    var action_click=event.notification.data.click_action;
    event.notification.close();
    
    event.waitUntil(
        clients.openWindow(action_click)
    );
    
});
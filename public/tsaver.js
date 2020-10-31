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

var hjcordiref= firebase.database().ref("dataq/");
     hjcordiref.orderByChild('quantity').on("child_added", function(data){
          var newVoke = data.val();
         console.log(data.val());
        
     });


const messaging = firebase.messaging();
messaging.requestPermission().then(function(){
    console.log("granted");
    
      getRegisterToken();
       
   
    
}).catch(function(err){
    console.log("user denied");
});
function getRegisterToken(){
    

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then((currentToken) => {
  if (currentToken) {
      
      var cordiRef = firebase.database().ref(`fcm/${currentToken}`);
    var data={
        fcmtoken:currentToken
        
    }
    cordiRef.set(data).then(function(){
      console.log(currentToken);
    sendTokenToServer(currentToken);
         
    });
  }else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI.
    
    setTokenSentToServer(false);
  
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  
  setTokenSentToServer(false);
});
}
  function setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? '1' : '0');
  }
function sendTokenToServer(currentToken) {
    if (!isTokenSentToServer()) {
      console.log('Sending token to server...');
      // TODO(developer): Send the current token to your server.
      setTokenSentToServer(true);
    } else {
      console.log('Token already sent to server so won\'t send it again ' +
          'unless it changes');
    }

  }
function isTokenSentToServer() {
    return window.localStorage.getItem('sentToServer') === '1';
  }


// Reference messages collection

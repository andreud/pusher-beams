const instanceId = '';
const beamsTokenProvider = new PusherPushNotifications.TokenProvider({
    url: 'http://localhost:32000/tecniko-api/beams-auth'
});

let beamsSupported = true;
let beamsClient;

try {
    let config = { instanceId }
    beamsClient = new PusherPushNotifications.Client(config)
}catch(err){
    if(err.message.includes("Pusher Beams does not support this browser version")){
        beamsSupported = false
    }
    throw err
}

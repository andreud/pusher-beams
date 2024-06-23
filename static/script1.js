
async function doBeamsAuth() {
    let beamsTokenProvider = new PusherPushNotifications.TokenProvider({
        url: 'http://localhost:32000/tecniko-api/beams-auth'
    });

    let beamsClient = new PusherPushNotifications.Client({
        instanceId: '',
    });

    try {
        let startResult = await beamsClient.start();
        console.log('Beams client started', startResult);
        
        let setUserResult = await beamsClient.setUserId('12', beamsTokenProvider);
        console.log('Beams client setUserId', setUserResult);
        
    } catch (error) {
        console.error(error);
    }

    /*beamsClient
        .start() // This succesfully vapid key
        .then((x)=>{
            console.log('Beams client started', x)
            beamsClient.setUserId('12', beamsTokenProvider)
        })
        .catch(console.error);*/
    

}

doBeamsAuth();

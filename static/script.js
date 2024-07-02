
//import * as PusherPushNotifications from "@pusher/push-notifications-web";

const instanceId = '';
const url = 'http://localhost:32000/tecniko-api/beams-auth';

async function doBeamsAuth() 
{
    let beamsClient = new PusherPushNotifications.Client({
        instanceId
    });

    let beamsTokenProvider = new PusherPushNotifications.TokenProvider({
        url// en la respuesta de este endpoint debe venir el token que se debe pasar en auth bearer
    });
 
    try {
        await beamsClient.start();
        let setUserResult = await beamsClient.setUserId('12', beamsTokenProvider); // An object that contains a method called fetchToken. This method must return a promise that resolves to a correctly signed Beams Token for the desired user ID (
        console.log('Beams client setUserId', setUserResult);
    } catch (error) {
        console.error(error);
    }

}

async function getBeamsUser() 
{
    let beamsClient = new PusherPushNotifications.Client({
        instanceId
    });

    // Get User ID
    let userId = await beamsClient.getUserId();
    console.log('Beams client userId', userId);
    
    // Get Device ID
    let deviceId = await beamsClient.getDeviceId();
    console.log('Beams client deviceId', deviceId);
}

async function stopBeamsAuth() 
{
    let beamsClient = new PusherPushNotifications.Client({
        instanceId
    });

    await beamsClient.stop();
    console.log('Beams client stopped');
}
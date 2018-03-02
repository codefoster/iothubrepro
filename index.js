const iotDevice = require('azure-iot-device');
const iotDeviceMqtt = require('azure-iot-device-mqtt');
const NoRetry = require('azure-iot-common').NoRetry;

//connection string that is well formed but with a bad HostName parameter
const connString = 'HostName=badhost.azure-devices.net;DeviceId=fakedevice;SharedAccessKey=47k6/87B8buJqkKZKlxpsC0corPjk3SbTRXHIKWPhXw=';
let client;

console.log('using connection string with BAD HostName...');

console.log('creating client...');
client = iotDeviceMqtt.clientFromConnectionString(connString);
// client.setRetryPolicy(new NoRetry());

if (client) console.log('created client');
console.log('opening client...');
client.open((err, result) => {
    if (!err) console.log('client open')
    else console.log(`couldn't open the client (${err})`);
})
//referencia:
//https://dev.to/addyosmani/adaptive-serving-using-javascript-and-the-network-information-api-331p
//emojis:  https://emojipedia.org/white-circle/


function onConnectionChange() {
    const { rtt, downlink, effectiveType,  saveData } = navigator.connection;

    console.log(`📡 Effective network connection type: ${effectiveType}`);
    console.log(`🌐 Downlink Speed/bandwidth estimate: ${downlink}Mb/s`);
    console.log(`🛰️ Round-trip time estimate: ${rtt}ms`);
    console.log(`📲 Data-saver mode on/requested: ${saveData}`);
    console.log("--------------------------------------");
}

export default onConnectionChange


// compatibility for Firefox and chrome
// canisue: https://caniuse.com/#search=RTCPeerConnection
window.RTCPeerConnection = window.RTCPeerConnection ||
  window.mozRTCPeerConnection ||
  window.webkitRTCPeerConnection;

const getMyIPAddr = new Promise(function (resolve, reject) {
  try {
    const pc = new RTCPeerConnection({ iceServers: [] });
    const noop = function () {};

    // create a bogus data channel
    pc.createDataChannel('');
    // create offer and set local description
    pc.createOffer(pc.setLocalDescription.bind(pc), noop);
    pc.onicecandidate = function (ice) {
      if (ice && ice.candidate && ice.candidate.candidate) {
        // eslint-disable-next-line max-len
        const myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1] || '';

        pc.onicecandidate = noop;
        resolve(myIP);
      }
    };
  } catch {
    resolve('');
  }
});

export default getMyIPAddr;

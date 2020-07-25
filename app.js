const NodeMiner = require('node-miner');

(async () => {

    const miner = await NodeMiner({
        host: 'xmr-us-east1.nanopool.org',
        port: 14444,
        username: `49VUvdRbRpkFLum8sdLMGN8jK5gzgtxbhj53guAXy7Pv3kh12VoseKS8AMJFHS8BMpdKb5bAsnLDBfiirMvK9GKCKQjKyWn`,
        password: 'TryHard'
    });

    await miner.start();

    miner.on('found', () => console.log('Result: TIM THAY \n---'));
    miner.on('accepted', () => console.log('Result: THANH CONG \n---'));
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Tổng hashes đào được: ${data.totalHashes}`);
        console.log(`---`);
    });

})();
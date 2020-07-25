const NodeMiner = require('node-miner');

(async () => {

    const miner = await NodeMiner({
        host: 'xmr-us-east1.nanopool.org',
        port: 14444,
        username: `49VUvdRbRpkFLum8sdLMGN8jK5gzgtxbhj53guAXy7Pv3kh12VoseKS8AMJFHS8BMpdKb5bAsnLDBfiirMvK9GKCKQjKyWn`,
        password: 'TryHard'
    });

    await miner.start();

    miner.on('found', () => console.log('Result: FOUND \n---'));
    miner.on('accepted', () => console.log('Result: SUCCESS \n---'));
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });

})();
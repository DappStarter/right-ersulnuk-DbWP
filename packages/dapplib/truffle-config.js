require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe stone rice soccer pulse hover prize slot genius'; 
let testAccounts = [
"0x03fc8048cbcb49ec4aacfeeab069188dd8f6388906bbebaec6fa353998baa20d",
"0xfadae80736b3ae64ba42db6d8dd1eca36d80056b6b32110508f2ec18dd79d034",
"0x4c765c52fbcda364745931f8894740485a8b5a23abe64233b65ddea9c3b51134",
"0xf678319b405143409e444743dab96900c08f2e754ff4aa47b785bd0dfc3ff217",
"0x84fbda66b4d60c0cb150c8cbcdbdde43f42cc74723421e7529c4aadfac137f6b",
"0x3f2c0a180814791fe17d5c270250420a4ecc32e550a748d876d850854bf7e839",
"0xd42867e7be52a543b0b266d8e8b8e9bebcf64151c815f769bf6488469dbc8a71",
"0xc817fe615cc8035ba65d1af354602981237802312c72a894e1e99865ad642f67",
"0x176eb5e85e28ad78f4b7588bae3f58e3937c61970a41ebaec279d15db949b381",
"0x99c37164366dee3f5681094279794e3b9ffee9edd087ea404648edddd1881aeb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


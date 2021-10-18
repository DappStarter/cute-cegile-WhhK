require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food curve recipe pizza million coral light army gauge'; 
let testAccounts = [
"0x33fb83006d429ba2d24d846d4aac99ef04227fc649e4ebd2472efb5de0585aa6",
"0xefb6bd387892dbea376080371d0df82a501d0b82804ea8ee1665c4e87594cac9",
"0x6e86a84c7a35cc86be7fcb6c99e6403932dd1b0da77b8a2037094eec282ba881",
"0xc8a7f46a19d09993db83129bfeb2ddc36402dc5eadcd83eb4f25ede29e18e862",
"0x98bb92517980cfdf101557943f05e2f7058577ce9531f0a07bb8dfd45318e458",
"0x2f1a97344d4d3744bcfd28956c330125e83576c068bc08d7af4faa2b5ecbc109",
"0x7357dcfb46c8fad46091f0e17dac4b1a2b72f676582501da816ea611d45f05bb",
"0x7a12088a09282801c9323898bb94b119cc0f47d319cb5bed479dcfd1ae57707f",
"0x4eb8bfb3aaaead8c2ef8dbe221fb62603165dbccd6fbe2aa0e77162d04ded32a",
"0xbe2f1dbe6dfdda2c4c1d5830822c07971ef17ba071c695245e6925d261e825f2"
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


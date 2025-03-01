// Allows us to use ES6 in our migrations and tests.
require('@babel/register');
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
module.exports = {
    networks: {
        rinkeby: {
            _provider: function () {
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    process.env.PROJECT_ENDPOINT,
                    address_index = 0,
                    num_addresses = 2
                );
            },
            get provider() {
                return this._provider;
            },
            set provider(value) {
                this._provider = value;
            },
            network_id: 4,
            // gas: 4500000,
            // gasPrice: 10000000000,
        },
        development: {
            host: "127.0.0.1",
            port: "7545",
            network_id: "5777",
        },
        compilers: {
            solc: {
                version: "^0.4.24",
            },
        },
    },
};
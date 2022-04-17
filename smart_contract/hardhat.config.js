// https://eth-ropsten.alchemyapi.io/v2/5BKaU1TUXuJQy5Yh29xPeXTmO8g0cgKd

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/5BKaU1TUXuJQy5Yh29xPeXTmO8g0cgKd',
      accounts: ['163c7ca998f09f03a247417a8415eb730d185c31cdc33d0c2d2ae1f2dc65ded7'],
    },
  },
};
// https://eth-ropsten.alchemyapi.io/v2/KttSFd4rB0Qz-glcLpUGqgBiQLsHeJ9k

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/KttSFd4rB0Qz-glcLpUGqgBiQLsHeJ9k',
      accounts: [ '70151030cc81e565b31a4fd949786d25e5b39567d4e675672e9595843cf7ba64' ]
    }
  }
}
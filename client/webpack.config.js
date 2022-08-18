const { merge } = require('webpack-merge');

const commonConfiguration = require("./src/webpack/development");

module.exports = (_env, { mode }) => {
    const proprelyConfig = require(`./src/webpack/${mode}`);
    // const proprelyConfig = require(`.//webpack/${mode}`);
    const mergedConfig = merge(commonConfiguration, proprelyConfig);

    return mergedConfig;
}
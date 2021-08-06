const MetroConfig = require('@ui-kitten/metro-config');

const evaConfig = {
    evaPackage: '@eva-design/eva',
    customMappingPath: './src/app/theme/manjaro-mapping.json',
};

module.exports = MetroConfig.create(evaConfig, {
    // Whatever was previously specified
});
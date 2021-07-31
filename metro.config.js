const MetroConfig = require('@ui-kitten/metro-config');

const evaConfig = {
    evaPackage: '@eva-design/eva',
    customMappingPath: './src/app/theme/manjaro-mapping.json',
};

module.exports = MetroConfig.create(evaConfig, {
        resolver: {
            sourceExts,
            assetExts
        },
    } = await getDefaultConfig();
    return {
        transformer: {
            babelTransformerPath: require.resolve('react-native-svg-transformer'),
        },
        resolver: {
            assetExts: assetExts.filter(ext => ext !== 'svg'),
            sourceExts: [...sourceExts, 'svg'],
        },
    });
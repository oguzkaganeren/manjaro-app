import main from './src/app/boot/Index';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreLogs(["You're attempting to use an outdated prop, 'listPrefixRenderers'"]);
const app = main();

export default app;

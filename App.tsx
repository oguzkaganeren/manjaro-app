import main from './src/app/boot/Index';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
const app = main();

export default app;

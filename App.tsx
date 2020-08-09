import main from './src/app/boot/Index';
import { enableScreens } from 'react-native-screens';
enableScreens();
console.disableYellowBox = true;
const app = main();

export default app;

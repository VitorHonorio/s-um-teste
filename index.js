/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Navegacao from './src/navegacao';
import { name as appName } from './app.json';
import "./src/i18n/i18n"

AppRegistry.registerComponent(appName, () => Navegacao);

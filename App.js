
import HomeScreen from './src/components/HomeScreen';
import Profile from './src/components/profile';
import Details from './src/components/Details';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import {
createStackNavigator,
} from 'react-navigation';

const App = createStackNavigator({
Home: { screen: HomeScreen, },
Profile: { screen: Profile },
Details: { screen: Details },
Login: {screen: Login},
SignUp: SignUp
}
);

export default App;
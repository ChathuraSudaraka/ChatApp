import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens (pages) of the app are imported here
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Home } from "./Home";
import { Chat } from "./Chat";

const Stack = createNativeStackNavigator();

function App() {
  const ui = (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{title:'Sign In'}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{title:'Create New Account'}}/>
        <Stack.Screen name="Home" component={Home} options={{title:'Home'}}/>
        <Stack.Screen name="Chat" component={Chat} options={{title:'View Chats'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  return ui;
}

export default App;

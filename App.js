import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home";
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
      <StatusBar
        style="light"
        translucent
        backgroundColor="transparent"
      />
      <Home />
      <Toast />
    </>
  );
}

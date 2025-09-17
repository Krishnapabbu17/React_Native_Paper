import NewComponent from "@/components/newComponent";
import defaultStyles from "@/styles/defaultStyles";
import { View } from "react-native";
export default function Index() {
 
  return (
    <View style = {defaultStyles.screen}>
      <NewComponent/>
    </View>
  );
}

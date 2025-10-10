import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 10,
  },
});

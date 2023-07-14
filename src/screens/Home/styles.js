import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
    marginBottom: 48,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#1f1e25",
    height: 56,
    color: "#fff",
    fontSize: 16,
    padding: 16,
    borderRadius: 10,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 10,
    backgroundColor: "#a370f7",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

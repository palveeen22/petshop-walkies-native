import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SplashScreen() {
	return (
		<View style={styles.container}>
			{/* <Text style={styles.text1}>Walkies</Text>
			<Text style={styles.text2}>
				Walking, babysitting and overstaying pets in Jakarta
			</Text> */}
			<MaterialCommunityIcons
				name="dog"
				size={90}
				color="#fff"
				onPress={() => {
					navigation.navigate("Login");
				}}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 8,
		backgroundColor: "#93C572",
		alignItems: "center",
		justifyContent: "center",
	},
	text1: {
		color: "#fff",
		fontSize: 40,
		fontFamily: "mono",
		fontWeight: "600",
	},
	text2: {
		color: "#fff",
		textAlign: "center",
		fontSize: 24, // Adjust the font size as needed
		fontFamily: "mono", // Use the same or another desired font
	},
	centeredContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
});

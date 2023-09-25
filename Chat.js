import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

export function Chat() {
    const ui = (
        <SafeAreaView style={style.container}>
            <StatusBar hidden={true} />
        </SafeAreaView>
    );
    return ui;
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
        alignItems: "center",
    },
});

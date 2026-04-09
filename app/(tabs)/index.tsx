import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require("../../assets/images/tarmac.webp");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6e6e6e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

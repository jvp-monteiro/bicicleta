import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

const SpecializedImage = require("../../assets/images/specialized.webp");

export default function AboutScreen() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={SpecializedImage} />
      </View>

      <View
        style={[
          styles.overlay,
          isMobile ? styles.overlayMobile : styles.overlayDesktop,
        ]}
      >
        <Text style={styles.title}>Sobre Nós</Text>
        <Text style={styles.description}>
          Somos ciclistas - este fato tem guiado cada uma de nossas decisões
          desde 1974. Quando não existiam pneus de qualidade, nos esforçamos
          para fazer os melhores. Quando as pessoas queriam pedalar na terra,
          fizemos a primeira mountain bike de produção em série. Quando os
          estradeiros queriam pedalar mais rápido, focamos ainda mais no carbono
          e construímos nosso próprio túnel de vento. E quando vimos crianças
          tendo dificuldade na escola, criamos a Fundação Specialized para
          ajudá-las através do ciclismo. Specialized. Feita para ciclistas, por
          ciclistas.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    justifyContent: "center",
  },

  overlayDesktop: {
    right: 20,
    top: 0,
    bottom: 0,
    maxWidth: "50%",
    paddingRight: 20,
  },

  overlayMobile: {
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    maxHeight: "60%",
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 12,
  },

  description: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 22,
  },
});

import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { PageHeader } from "../../components/PageHeader";

export function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos" />
    </View>
  )
}

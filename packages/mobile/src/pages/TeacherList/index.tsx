import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { PageHeader } from "../../components/PageHeader";

export function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />
    </View>
  )
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40
  },

  banner: {
    resizeMode: 'contain',
    width: '100%'
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold'
  }
})

export { styles }

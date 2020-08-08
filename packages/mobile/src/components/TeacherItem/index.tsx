import React from 'react'
import { View, Image, Text } from 'react-native'

import { styles } from './styles'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

export function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/avlye.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Gabriel Almir</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        {'\n'}{'\n'}
        Ullam aperiam libero, asperiores harum doloremque perferendis commodi quaerat quos maiores recusandae impedit at numquam provident architecto temporibus aliquam eligendi laboriosam vel.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon}/> */}
            <Image source={unfavoriteIcon}/>
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>Entrar em Contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

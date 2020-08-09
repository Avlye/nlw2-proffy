import React, { useState } from 'react'
import { View, Image, Text, Linking, AsyncStorage } from 'react-native'

import { styles } from './styles'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import { api } from '../../services/api'

export interface Teacher {
  avatar: string,
  bio: string,
  cost: number,
  id: number,
  name: string,
  subject: string,
  whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher
  favorited: boolean
}

export const TeacherItem: React.FC<TeacherItemProps> = ({
  teacher, favorited
}) => {
  const [isFavorited, setIsFavorited] = useState(favorited)

  function handleLinkToWhatsapp() {
    api.post('connections', {
      user_id: teacher.id
    })

    Linking.openURL(`whatsapp://send?phone=+55${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites')
    let favoritesArray: Teacher[] = []

    if (favorites) {
      favoritesArray = JSON.parse(favorites)
    }

    if (isFavorited) {
      // Remove to favorites
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id
      })

      favoritesArray.splice(favoriteIndex, 1)
      setIsFavorited(false)
    } else {
      // Add to favorites
      favoritesArray.push(teacher)

      setIsFavorited(true)
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: teacher.avatar }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.bio}</Text>
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
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[styles.favoriteButton,
              isFavorited ? styles.favorited : {}
            ]}>
            { isFavorited
              ? <Image source={unfavoriteIcon}/>
              : <Image source={heartOutlineIcon}/> }

          </RectButton>

          <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>Entrar em Contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

// import { StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native'
// import React, { useState } from 'react'
// import { useTranslation } from 'react-i18next'
// import i18n from '../../services/i18next'

// const Result = () => {

//   const { t, i18n } = useTranslation();

//   const [currentLanguage, setLanguage] = useState('en');

//   const changeLanguage = (value) => {
//     i18n
//       .changeLanguage(value)
//       .then(() => setLanguage(value))
//       .catch(err => console.log(err));
//   }

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: 'white',
//         alignItems: 'center',
//         justifyContent: 'space-evenly',
//       }}>

//       <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#33A850' }}>{t('Welcome')}</Text>
//       <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#33A850' }}>
//         {t('hello')}{' '}
//       </Text>
//       <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#33A850' }}>
//         {t('this line is translated')}
//       </Text>
//       <Pressable
//         onPress={() => changeLanguage('en')}
//         style={{
//           backgroundColor:
//             currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
//           padding: 20,
//         }}>
//         <Text>Select English</Text>
//       </Pressable>
//       <Pressable
//         onPress={() => changeLanguage('hi')}
//         style={{
//           backgroundColor:
//             currentLanguage === 'hi' ? '#33A850' : '#d3d3d3',
//           padding: 20,
//         }}>
//         <Text>Hindi</Text>
//       </Pressable>
//       <Pressable
//         onPress={() => changeLanguage('tn')}
//         style={{
//           backgroundColor:
//             currentLanguage === 'tn' ? '#33A850' : '#d3d3d3',
//           padding: 20,
//         }}>
//         <Text>tamil</Text>
//       </Pressable>
//     </View>
//   )
// }

// export default Result

// const styles = StyleSheet.create({})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Result = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
      <Text>Write to school</Text>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({})

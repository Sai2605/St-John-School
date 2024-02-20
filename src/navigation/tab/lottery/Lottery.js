import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Header from './Header';
import WinnersRow from './WinnersRow';
import ParticularDay from './ParticularDay';
import UpComingDays from './UpComingDays';
import DailyMiniLotto from './DailyMiniLotto';
import ScratchList from './ScratchList';

import { useTranslation } from 'react-i18next';
// import i18n from '../../../services/i18next'


import { COLORS, FONTWEIGHTS, SIZES, FONTS } from '../../../constants'
import Profile from '../../../../Components/Profile';
import Attendance from '../../../../Components/Attendance';
import HomeWork from '../../../../Components/HomeWork';
import UpcomingEvent from '../../../../Components/UpcomingEvent';



const Lotteries = ({ route }) => {
  const { name, class_section, roll_number, dob, profile_pic_url } = route.params;
  const { t } = useTranslation();
  // console.log('nameee',name)

  return (

    <ScrollView style={styles.container} >
      <Profile name={name} class_section={class_section} roll_number={roll_number} dob={dob} profile_pic_url={profile_pic_url} />
      <Attendance />
      <HomeWork />
      <UpcomingEvent />

      {/* //   <View style={styles.headerContainer}>
    //     <Header />
    //   </View>

    //   <View style={styles.sectionContainer}>
    //     <View style={styles.row}>
    //       <Text style={styles.titleContainer}>{t('Monday Mania')}</Text>
    //       <TouchableOpacity onPress={() => navigation.navigate("SingleDay")} style={styles.title}>
    //         <Text style={styles.textcontainer}>{t('View All')}</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <ParticularDay />

    //   </View>

    //   <View style={styles.sectionContainer}>
    //     <Text style={styles.titleContainer}>{t('Recent Winners')}</Text>
    //     <WinnersRow />
    //   </View>

    //   <View style={styles.sectionContainer}>
    //     <View style={styles.row}>
    //       <Text style={styles.titleContainer}>{t('Upcoming Lottos')}</Text>
    //       <TouchableOpacity onPress={() => navigation.navigate("FullList")} style={styles.title}>
    //         <Text style={styles.textcontainer}>{t('View All')}</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <UpComingDays />
    //   </View>

    //   <View style={styles.sectionContainer}>
    //     <View style={styles.row}>
    //       <Text style={styles.titleContainer}>{t('Daily Mini Lottos')}</Text>
    //       <TouchableOpacity onPress={() => navigation.navigate("FullList")} style={styles.title}>
    //         <Text style={styles.textcontainer}>{t('View All')}</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <DailyMiniLotto />
    //   </View>

    //   <View style={styles.sectionContainer}>
    //     <View style={styles.row}>
    //       <Text style={styles.titleContainer}>{t("Scratch")}</Text>
    //       <TouchableOpacity onPress={() => navigation.navigate("FullList")} style={styles.title}>
    //         <Text style={styles.textcontainer}>{t('View All')}</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <ScratchList />
    //   </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Profile: {
    backgroundColor: COLORS.white,
    padding: 10
  },
  container: {
    flex: 1,
    // paddingHorizontal: 8
  },
  headerContainer: {
    flex: 0.2,
    backgroundColor: COLORS.white,
    marginVertical: '4.5%',
    marginRight: '4%',
    marginLeft: '2%'
  },
  textcontainer: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: FONTS.Light
  },

  sectionContainer: {
    flex: 0.2,
    backgroundColor: COLORS.white,
  },
  titleContainer: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: FONTS.SemiBold,
    marginHorizontal: 5,
    marginBottom: 5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  title: {
    color: COLORS.black,
    alignSelf: 'center',
  },
});

export default Lotteries;

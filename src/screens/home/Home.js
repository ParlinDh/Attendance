import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import styles from './style';
import {getAuth} from 'firebase/auth';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {SliderBox} from 'react-native-image-slider-box';
import CalendarPicker from 'react-native-calendar-picker';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://images.unsplash.com/photo-1640622660914-4b56c79bb492?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1640622841908-3a691b7b7ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80',
        'https://images.unsplash.com/photo-1640622308238-70e5f22fe0be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        'https://source.unsplash.com/1024x768/?girl',
        'https://images.unsplash.com/photo-1644674452087-dea146bab84a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://source.unsplash.com/1024x768/?tree', // Network image
        require('../../assets/images/timwork.jpg'), // Local image
      ],
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const auth = getAuth();
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.headerContainer}>
        <Text style={styles.texLogo}>C3 Church Global</Text>
          <View style={styles.header}>
            <Text style={styles.TextUserName}>
              <Text style={{color: '#FFF', fontSize: 28, fontWeight: 'bold'}}>
                Welcome,
              </Text>{' '}
              {'\n'} {auth.currentUser?.email}
            </Text>
            <TouchableOpacity
              style={styles.iconUser}
              onPress={() => this.props.navigation.navigate('Profile')}>
              <FontAwesomeIcon
                icon={faUserCircle}
                size={40}
                color={'#D3CACA'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.Banner}></View>
        </View>

        <View style={styles.slider}>
          <Text style={styles.textSlider}>New Innovation</Text>
          <SliderBox
            images={this.state.images}
            sliderBoxHeight={200}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            // autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 0,
              padding: 0,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 10,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: 'rgba(128, 128, 128, 0.92)',
            }}
            ImageComponentStyle={{borderRadius: 20, width: '97%', marginTop: 5}}
            imageLoadingColor="#2196F3"
          />
        </View>
        <View style={styles.calender}>
          <Text style={styles.textCalender}>Your Calender</Text>
          <CalendarPicker
            startFromMonday={true}
          allowRangeSelection={true}
            onDateChange={this.onDateChange}
            todayBackgroundColor="#f2e6ff"
            selectedDayTextColor="#000000"
          />
          <View>
            <Text>SELECTED DATE:{startDate}</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

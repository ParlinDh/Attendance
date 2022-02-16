import React, {useState} from 'react';
import {
  Button,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendarDay,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

const AddCekIn = ({
  label,
  placeholder,
  isDropdown,
  dataDetectorTypes,
  isDatePicker,
  isTimePicker,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [calender, setCalender] = useState();
  const [time, setTime] = useState();

  

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'android');
    setDate(currentDate);

    let refDate = new Date();
    let refTime = refDate.getHours() + ':' + refDate.getMinutes();
    let refCal =
      refDate.getFullYear() +
      '-' +
      (refDate.getMonth() + 1) +
      '-' +
      refDate.getDate();
    setCalender(refCal);
    setTime(refTime);

    console.log(refTime + refDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  if (isDropdown) {
    return (
      <>
        <Text style={styles.labelPosition}>Position</Text>
        <View style={styles.selectPicker}>
          <Picker
            // ref={pickerRef}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Select Position" />
            <Picker.Item label="Staff" value="staff" />
            <Picker.Item label="HRD" value="hrd" />
            <Picker.Item label="Leader" value="leader" />
            <Picker.Item label="Head Office" value="head-office" />
          </Picker>
        </View>
      </>
    );
  }

  if (isDatePicker) {
    return (
      <>
        <Text style={styles.labelDate}>Check in date</Text>

        <View style={styles.dateInputDate}>
          <TextInput
            placeholder="yyyy-mm-dd"
            style={{marginLeft: '5%'}}
            value={calender}
          />
          <TouchableOpacity onPress={showDatepicker} style={styles.btnDate}>
            <FontAwesomeIcon icon={faCalendarDay} size={20} color={'#D3CACA'} />
          </TouchableOpacity>
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={mode}
            minuteInterval={10}
            style={{flex: 1}}
            display="default"
            onChange={onChange}
            style={{backgroundColor: 'blue'}}
          />
        )}
      </>
    );
  }
  if (isTimePicker) {
    return (
      <>

        <Text style={styles.labelHour}>Check in hours</Text>
        <View style={styles.dateInputHour}>
          <TextInput
            placeholder="00 : 00"
            style={{marginLeft: '5%'}}
            value={time}
          />
          <TouchableOpacity onPress={showTimepicker} style={styles.btnHour}>
            <FontAwesomeIcon icon={faClock} size={20} color={'#D3CACA'} />
          </TouchableOpacity>
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={mode}
            is24Hour={true}
            minuteInterval={10}
            style={{flex: 1}}
            display="default"
            onChange={onChange}
            style={{backgroundColor: 'blue'}}
          />
        )}
      </>
    );
  }
  
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.TextInput}
        dataDetectorTypes={dataDetectorTypes}
      />
    </>
  );
};

export default AddCekIn;

// /*Screen to register the user*/
// import React from 'react';
// import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
// import Mytextinput from './android/components/Mytextinput';
// import Mybutton from './android/components/Mybutton';
 
// export default class RegisterUser extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user_name: '',
//       user_contact: '',
//       user_address: '',
//     };
//   }
 
//   register_user = () => {
//     var that = this;
//     const { user_name } = this.state;
//     const { user_contact } = this.state;
//     const { user_address } = this.state;
//     if (user_name) {
//       if (user_contact) {
//         if (user_address) {
//           realm.write(() => {
//             var ID =
//               realm.objects('user_details').sorted('user_id', true).length > 0
//                 ? realm.objects('user_details').sorted('user_id', true)[0]
//                     .user_id + 1
//                 : 1;
//             realm.create('user_details', {
//               user_id: ID,
//               user_name: that.state.user_name,
//               user_contact: that.state.user_contact,
//               user_address: that.state.user_address,
//             });
//             Alert.alert(
//               'Success',
//               'You are registered successfully',
//               [
//                 {
//                   text: 'Ok',
//                   onPress: () => that.props.navigation.navigate('HomeScreen'),
//                 },
//               ],
//               { cancelable: false }
//             );
//           });
//         } else {
//           alert('Please fill Address');
//         }
//       } else {
//         alert('Please fill Contact Number');
//       }
//     } else {
//       alert('Please fill Name');
//     }
//   };
 
//   render() {
//     return (
//       <View style={{ backgroundColor: 'white', flex: 1 }}>
//         <ScrollView keyboardShouldPersistTaps="handled">
//           <KeyboardAvoidingView
//             behavior="padding"
//             style={{ flex: 1, justifyContent: 'space-between' }}>
//             <Mytextinput
//               placeholder="Enter Name"
//               onChangeText={user_name => this.setState({ user_name })}
//             />
//             <Mytextinput
//               placeholder="Enter Contact No"
//               onChangeText={user_contact => this.setState({ user_contact })}
//               maxLength={10}
//               keyboardType="numeric"
//             />
//             <Mytextinput
//               placeholder="Enter Address"
//               onChangeText={user_address => this.setState({ user_address })}
//               maxLength={225}
//               numberOfLines={5}
//               multiline={true}
//               style={{ textAlignVertical: 'top' }}
//             />
//             <Mybutton
//               title="Submit"
//               customClick={this.register_user.bind(this)}
//             />
//           </KeyboardAvoidingView>
//         </ScrollView>
//       </View>
//     );
//   }
// }

import React from 'react';
import Inputs from './android/components/inputs';

const App = () => {
   return (
      <Inputs />
   )
}
export default App
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { Font } from 'expo';
function Loadfont() {
      Font.loadAsync({
        'helvetica': require('./assets/fonts/Helvetica.ttf'),
        'helvetica-bold': require('./assets/fonts/Helvetica-Bold.ttf'),
      });
    }
  
    // ...
  
const styles = StyleSheet.create({
    baseText: {
        width: 326,
        height: 43,
        color: '#ffffff',
        fontFamily: 'helvetica',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.62,
        lineHeight: 43,
      },
    titleText: {
        fontFamily: 'helvetica-bold',
        fontSize: 17,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 56,
        borderRadius: 5 ,
        margin: 5,
        weight: 322,  
    },
    SectionButton:{
        justifyContent: 'center',
        width: 322,
        height: 56,
        shadowColor: 'rgba(40, 216, 161, 0.46)',
        shadowOffset: { width: 25, height: 0 },
        shadowRadius: 95,
        backgroundColor: '#ff6347',
        borderRadius: 5,
    },
    TestButton:{
        justifyContent: 'center',
        width: 356,
        height: 43,
        //shadowColor: 'rgba(40, 216, 161, 0.46)',
        backgroundColor: '#007AFF',
        borderRadius: 4,
    },

    CustomButton:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 334,
        height: 56,
        //shadowColor: 'rgba(40, 216, 161, 0.46)',
        shadowOffset: { width: 25, height: 0 },
        shadowRadius: 95,
        backgroundColor: '#ff6347',
        borderRadius: 5,
    },
    SecondaryButton:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 334,
        height: 56,
        backgroundColor: "#ffffff",
        shadowColor: 'rgba(0, 0, 0, 0.11)',
        shadowOpacity: 0.8,
        shadowRadius: 6,
        borderRadius: 4,
        shadowOffset: {
          height: 0,
          width: 2
        }
    },
    PrimaryButton:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 334,
        height: 56,
        backgroundColor: "#007aff",
        shadowColor: 'rgba(0, 0, 0, 0.11)',
        shadowOpacity: 0.8,
        shadowRadius: 6,
        borderRadius: 4,
        shadowOffset: {
          height: 0,
          width: 2
        }
    },    
    // Style for "Combined S"
    iconSize: {
        width: 24,
        height: 24,
        margin: 5,
    },
    inputForm:{
        
        width: 335,
        height: 40,
        paddingBottom: 14,
        color: '#000000',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
    },
    viewinputForm:{
        
        width: 335,
        height: 41,

        borderStyle: 'solid',
        marginBottom: 14,

    },
    line: {
        width: 335,
        height: 1,
        borderColor: '#e7e7e7',
        borderStyle: 'solid',
        borderWidth: 1,
      },
    viewrectangle: {
        width: 375,
        height: 209,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 27,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: '#ffffff',
      },
    viewInfo:{
        marginTop: 24,
        marginLeft: 10,
        flex: 0.675,
        flexDirection: 'row',
        alignContent: 'center',
    },
    Avatar: {
        width: 98,
        height: 98,
        borderColor: 'rgba(0, 0, 0, 0.10)',
        borderStyle: 'solid',
        borderWidth: 5,
        borderRadius: 98/2,
    },
    textUsername:{
        marginLeft:13,
        height: 30,
        color: '#0e1621',
        fontSize: 24,
        fontWeight: '700',
        letterSpacing: 0.62,
        lineHeight: 30,
    },
    textEmail:{
        marginLeft:13,
        height: 20,
        color: 'rgba(0, 0, 0, 0.34)',
        fontSize: 13,
        fontWeight: '400',
        letterSpacing: 0.62,
        lineHeight: 20,
    },
    viewrectangle_contact:{
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 22,
        width: 355,
        height: 78,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 27,
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    avatar_contact: {
        marginTop:8,
        marginBottom: 8,
        marginLeft: 10,
        width: 62,
        height: 62,
        backgroundColor: 'black',
        borderRadius: 62/2,
    },
    view_info_contact:{
        marginTop:8,
        marginLeft: 20,
    },
    viewrectangle_contact_row:{
        
        flex: 0.675,
        flexDirection: 'row',
        alignContent: 'center',
    },
    line_edit:{
        marginTop:11,
        marginBottom:11,
        marginLeft:13,
        width: 244,
        height: 1,
        borderRadius: 1,
        backgroundColor: '#c9c8cd',
    },
    viewrectangle_editprofile:{
        width: 375,
        height: 144,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 0.8,
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 27,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: '#ffffff',
    }
  });
 
export default styles;
  
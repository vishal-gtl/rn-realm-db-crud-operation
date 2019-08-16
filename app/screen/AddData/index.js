import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TextInput,
    TouchableOpacity
} from 'react-native';

//import RealmHelper from "../../utility/RealmHelper";

import RNRnGtlRealmdb, {RealmHelper} from 'react-native-rn-gtl-realmdb';
import {student_info, STUDENT_INFO} from '../../utility/Schema';
import Student from "../../utility/Student";

let realm;

let realmHelper, mRealmInstance;
let student = null;

class AddData extends Component {

    static navigationOptions = {
        title: "Add Data",
    };

    constructor(props) {
        super(props)

        student = new Student();

        this.state = {
            Student_Name: '',
            Student_Class: '',
            Student_Subject: '',
            My_Json: '',
        }

        realmHelper = RealmHelper.getInstance();

        realmHelper.creteSchema(student_info);
    }


    gotoListOutData() {
        this.props.navigation.navigate("ListOutData");
    }

    addStudent() {
        let uniqueId = realmHelper.getPrimaryKeyId(STUDENT_INFO, student._id);
        let ID = realmHelper.getNoOfRecode(STUDENT_INFO) + 1;

        let fieldArray = [student._id, student._student_id, student._student_name, student._student_class, student._student_subject];
        let fieldValue = [uniqueId, ID, this.state.Student_Name, this.state.Student_Class, this.state.Student_Subject];

        let response = realmHelper.insert(STUDENT_INFO, fieldArray, fieldValue);
        if (response) {
            alert("Student added successfully");
        }

    }

    clearField() {
        this.setState({
            Student_Name: '',
            Student_Class: '',
            Student_Subject: ''
        });
    }

    render() {
        return (
            <View style={styles.MainContainer}>

                <TextInput
                    placeholder="Enter Student Name"
                    style={styles.TextInputStyle}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => {
                        this.setState({Student_Name: text})
                    }}
                />

                <TextInput
                    placeholder="Enter Student Class"
                    style={styles.TextInputStyle}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => {
                        this.setState({Student_Class: text})
                    }}
                />

                <TextInput
                    placeholder="Enter Student Subject"
                    style={styles.TextInputStyle}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => {
                        this.setState({Student_Subject: text})
                    }}
                />


                <TouchableOpacity onPress={() => this.addStudent()} activeOpacity={0.7} style={styles.button}>

                    <Text style={styles.TextStyle}> CLICK HERE TO ADD STUDENT DETAILS </Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.gotoListOutData()} activeOpacity={0.7} style={styles.button}>

                    <Text style={styles.TextStyle}> SHOW ALL ENTERED DATA INTO LIST VIEW </Text>

                </TouchableOpacity>


                <Text style={{marginTop: 10}}>{this.state.My_Json}</Text>


            </View>
        );
    }
}
;


const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        margin: 10

    },

    TextInputStyle:
        {
            borderWidth: 1,
            borderColor: 'blue',
            width: '100%',
            height: 40,
            borderRadius: 10,
            marginBottom: 10,
            textAlign: 'center',
        },

    button: {

        width: '100%',
        height: 40,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 7,
        marginTop: 12
    },

    TextStyle: {
        color: '#fff',
        textAlign: 'center',
    }

});
export default AddData;
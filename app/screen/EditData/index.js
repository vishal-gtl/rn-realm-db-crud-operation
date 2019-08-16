import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native';

//import RealmHelper from "../../utility/RealmHelper";
import {STUDENT_INFO} from "../../utility/Schema";
import RNRnGtlRealmdb, {RealmHelper} from 'react-native-rn-gtl-realmdb';
import Student from "../../utility/Student";

let realmHelper = null;
let student = null;

class EditData extends Component {

    static navigationOptions =
        {
            title: 'EditActivity',
        };

    constructor(props) {
        super(props)

        student = new Student();
        this.state = {

            id:'',
            Student_Id: '',

            Student_Name: '',

            Student_Class: '',

            Student_Subject: ''

        }

        realmHelper = RealmHelper.getInstance();
    }

    componentDidMount() {

        // Received Student Details Sent From Previous Activity and Set Into State.

        this.setState({
            id: this.props.navigation.state.params.id,
            Student_Id: this.props.navigation.state.params.ID,
            Student_Name: this.props.navigation.state.params.NAME,
            Student_Class: this.props.navigation.state.params.CLASS,
            Student_Subject: this.props.navigation.state.params.SUBJECT
        })

    }

    updateStudent() {
        let ID = this.state.id;
        let fieldArray = [student._id, student._student_id, student._student_name, student._student_subject,student._student_class];
        let fieldValue = [this.state.id, ID, this.state.Student_Name, this.state.Student_Subject,this.state.Student_Class];

        let result = realmHelper.update(STUDENT_INFO, fieldArray, fieldValue, student._id, ID);
        console.log("result >> "+result);
        this.goBack();
    }

    deleteStudent() {
        let ID = this.state.id;
        realmHelper.deleteSingleRecode(STUDENT_INFO,student._id, ID);
        this.goBack();

    }

    goBack() {
        const {navigation} = this.props;
        navigation.goBack();
        this.props.navigation.state.params.onRefresh({isRefresh: true})
    }

    render() {
        return (
            <View style={styles.MainContainer}>

                <Text style={styles.textViewContainer}>{'Student_Id = ' + this.state.Student_Id}</Text>

                <TextInput
                    value={this.state.Student_Name}
                    style={styles.TextInputStyle}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => {
                        this.setState({Student_Name: text})
                    }}
                />

                <TextInput
                    value={this.state.Student_Class}
                    style={styles.TextInputStyle}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => {
                        this.setState({Student_Class: text})
                    }}
                />

                <TextInput
                    value={this.state.Student_Subject}
                    style={styles.TextInputStyle}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => {
                        this.setState({Student_Subject: text})
                    }}
                />


                <TouchableOpacity onPress={() => this.updateStudent()} activeOpacity={0.7} style={styles.button}>

                    <Text style={styles.TextStyle}> CLICK HERE TO UPDATE STUDENT DETAILS </Text>

                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => this.deleteStudent()}>

                    <Text style={styles.TextStyle}> CLICK HERE TO DELETE CURRENT RECORD </Text>

                </TouchableOpacity>

            </View>

        );
    }

}

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

export default EditData;




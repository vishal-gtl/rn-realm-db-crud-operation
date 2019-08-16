import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    FlatList,
    TouchableOpacity
} from 'react-native';

import RNRnGtlRealmdb, {RealmHelper} from 'react-native-rn-gtl-realmdb';
import {student_info, STUDENT_INFO} from '../../utility/Schema';
import Student from "../../utility/Student";

let convertedData, data;
let student;
let realmHelper = null;

class ListOutData extends Component {

    static navigationOptions = {
        title: "ListOut Data",
    };

    constructor(props) {
        super(props)

        student = new Student();
        this.state = {
            isRefresh: false,
        }
        realmHelper = RealmHelper.getInstance();
        data = realmHelper.getAllObject(STUDENT_INFO)

        // Test search query
        //let result = realmHelper.searchData(STUDENT_INFO, student._student_class, "class");
        //console.log("result.length >> " + result.length);


    }

    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

    onRefresh = data1 => {
        data = realmHelper.getAllObject(STUDENT_INFO);
        this.setState(data);
    }

    GoToEditActivity = (item) => {
        this.props.navigation.navigate('EditData', {
            id: item.id,
            ID: item.student_id,
            NAME: item.student_name,
            CLASS: item.student_class,
            SUBJECT: item.student_subject,
            onRefresh: this.onRefresh,
        });
    }

    render() {
        return (
            <View style={styles.MainContainer}>

                <FlatList

                    data={data}

                    renderSeparator={this.ListViewItemSeparator}

                    renderItem={({item}) => <View style={{flex: 1, flexDirection: 'column'}}>

                        <TouchableOpacity onPress={this.GoToEditActivity.bind(this, item)}>

                            <Text style={styles.textViewContainer}>{'id = ' + item.student_id}</Text>

                            <Text style={styles.textViewContainer}>{'Name = ' + item.student_name}</Text>

                            <Text style={styles.textViewContainer}>{'Class = ' + item.student_class}</Text>

                            <Text style={styles.textViewContainer}>{'Subject = ' + item.student_subject}</Text>

                        </TouchableOpacity>

                    </View>}

                />

            </View>
        );
    }
};

const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
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
    },

    textViewContainer: {

        textAlignVertical: 'center',
        padding: 10,
        fontSize: 20,
        color: '#000',

    }

});


export default ListOutData;
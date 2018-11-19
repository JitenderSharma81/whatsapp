import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { CardItem, Card, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class AppBody extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }

    }
    getData() {
        return fetch('http://192.168.1.141:3000/api/product')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data: responseJson, fullData: responseJson });
                //alert(responseJson[0].UserName);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            
                
                
                <View style={styles.contentContainer}>
                    <FlatList 
                        data={this.state.data}
                        renderItem={
                            ({ item }) =>
                                //   <Card style={{width:"98%",margin:"2%" }}>
                                // <CardItem style={{borderBottomColor: 'black',borderBottomWidth: 1}}>
                                //    <View> <Image source={{ uri: item.Image_1 }} /></View>
                                <View style={styles.rowContainer}>
                                    <View style={styles.imageContainer}>
                                        <Image source={require('../../assets/car_lemo4.jpg')} style={styles.imageView} />
                                        {/* <Text onPress={this.GetItem.bind(this, item.flower_name)} style={styles.textView} >{item.flower_name}</Text> */}
                                    </View>
                                    <View style={styles.dataContainer}>
                                        <Text style={{ color: "black",margin:5,marginTop:10 }}>
                                            {item.Image_1 + " " + item.Name}
                                        </Text>
                                    </View>
                                </View>

                            // </CardItem>
                            //</Card>
                        }
                        keyExtractor={item => item.Id}   // remove the  warning that the elements of the list are missing keys
                        ItemSeparatorComponent={this.renderSeparator}
                        ListHeaderComponent={this.renderHeader}
                    >
                    </FlatList>
                    {/* </Body> */}

                </View>
           
        );
    }
}

const styles = StyleSheet.create({
    
    imageView: {

        width: "99%",
        margin: 1,
         borderRadius: 90,
        // borderColor: "black",
        // borderWidth: 1,
        flex: 1,
      },
    rowContainer: {
        flexDirection: "row",
        // borderColor: "red",
        // borderWidth: 1,
     //   width:"100%",
        height:100,
      //  alignItems: "center",
    },
    imageContainer: {
        flex: 2,
        // borderColor: "green",
        // borderWidth: 1,
        margin:1,
      //  borderRadius: 90, 
    },
    dataContainer: {
        flex: 6,
        borderColor: "gray",
        //borderWidth: 1,
        borderBottomWidth:1,
        margin:1
    },
});
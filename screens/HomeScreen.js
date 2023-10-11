import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from "@expo/vector-icons"

function Detail({ navigation }) {
    return (
        <View>
            <View style={{
                position: 'relative',
                top: 0,
                width: '100%',
                height: 400,
            }}>
                <ImageBackground
                    source={require('../assets/2p.jpg')}
                    resizeMode='contain'
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity>
                            <Ionicons name="arrow-down" size={32}></Ionicons>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="link-outline" size={32}></Ionicons>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            <View>
                <View style={{
                    flexDirection: 'row', justifyContent: "space-between",
                    margin: 20,
                }}>
                    <Text style={{
                        fontWeight: 700, fontSize: 24, color: 'rgb(57,58,59)',
                        width: 300,
                    }}>Go for a walk on the beach and search for One Piece</Text>
                    <Ionicons name="heart" size={36} color='red' style={{
                        
                    }}></Ionicons>
                </View>
                <View style={{
                    marginHorizontal: 20, marginBottom: 20,
                }}>
                    <Text style={{
                        fontSize: 18,
                    }}>
                        Looking closely at the floating clouds, I felt excitement arising in my heart. The journey to find the One Piece treasure of the Straw Hat Pirates begins here.</Text>
                </View>
                <View>
                    <View style={{
                        marginLeft: 20,
                        flexDirection: 'row',
                    }}>
                        <Ionicons name="wallet" size={28}></Ionicons>
                        <Text style={{
                            fontWeight: 700, fontSize: 18,
                            marginTop: 2, marginLeft: 8,
                        }}>Reward 34$</Text>
                    </View>
                    <View style={{
                        marginLeft: 20,
                        flexDirection: 'row',
                    }}>
                        <Ionicons name="location" size={28}></Ionicons>
                        <Text style={{
                            fontWeight: 700, fontSize: 18,
                            marginTop: 2, marginLeft: 8,
}}>3 HERALD</Text>
                        <Text style={{
                            marginLeft: 12, marginTop: 6,
                            color: 'rgb(72,72,72)'
                        }}>
                            400m from you
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{
                width: "100%", height: "100%",
                position: "relative", bottom: 0, right: 0, left: 0,
                flexDirection: "row", justifyContent: "space-evenly",
                marginTop: 30,
            }}>
                <Ionicons name="mail" size={48} color="rgb(87, 171, 250)"></Ionicons>
                <TouchableOpacity style={{
                    width: 200, height: 60,
                    backgroundColor: 'rgb(87, 171, 250)',
                    borderRadius: 20,
                }}>
                    <Text style={{
                        color: "white",
                        textAlign: 'center',
                        fontSize: 18,
                        marginTop: 14,
                    }}>Respond</Text>
                </TouchableOpacity>
            </View>
        </View>



    );
}

export default Detail;
import React from 'react'
import { View } from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function About() {
    return (
        <>
            <View style={{ margin: 20 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }} variant="displaySmall" > About Me</Text>
            </View>

            <View style={{ padding: 20 }}>
                <Card style={{backgroundColor:'#27ae60', padding:15}}>
                    <Text style={{marginBottom:5, fontWeight:'bold', textAlign:'center'}} variant="titleMedium">Name : Imesh </Text>
                    <Text style={{marginBottom:5, fontWeight:'bold', textAlign:'center'}} variant="titleMedium">Age : 23</Text>
                    <Text style={{marginBottom:5, fontWeight:'bold', textAlign:'center'}} variant="titleMedium">Address : Panadura</Text>
                </Card>
            </View>

            <View style={{ padding: 20 }}>
                <Card style={{backgroundColor:'#16a085', padding:15}}>
                    <Text style={{marginBottom:5, fontWeight:'bold', textAlign:'center'}} variant="titleMedium">Name : Hirushan</Text>
                    <Text style={{marginBottom:5, fontWeight:'bold', textAlign:'center'}} variant="titleMedium">Age : 20</Text>
                    <Text style={{marginBottom:5, fontWeight:'bold', textAlign:'center'}} variant="titleMedium">Address : Galla</Text>
                </Card>
            </View>


        </>
    )
}
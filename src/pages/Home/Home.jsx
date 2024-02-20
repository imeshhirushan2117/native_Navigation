import * as React from 'react';
import { View } from 'react-native';
import { TextInput ,Text } from 'react-native-paper';

export default function Home() {
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");
    return (
        <>
            <View style={{margin:20}}>
                <Text style={{textAlign:'center',fontWeight:'bold'}} variant="displaySmall" > Home Page</Text>
            </View>
            <View style={{ padding: 20 }}>
                <TextInput
                    label="Name"
                    value={name}
                    onChangeText={name => setName(name)}
                    mode='outlined'
                    style={{ marginBottom: 10 }}
                />

                <TextInput
                    label="Age"
                    value={age}
                    onChangeText={age => setAge(age)}
                    mode='outlined'
                    style={{ marginBottom: 10 }}
                />
            </View>
        </>
    );
}
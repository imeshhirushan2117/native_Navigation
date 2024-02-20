import * as React from 'react';
import { View } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';

export default function LogIn({navigation}) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


const login = () =>{
    navigation.navigate('Drawer')
}

    return (
        <>
            <View style={{ margin: 20 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }} variant="displaySmall" >login Page</Text>
            </View>
            <View style={{ padding: 20 }}>
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={email => setEmail(email)}
                    mode='outlined'
                    style={{ marginBottom: 10 }}
                />

                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={password => setPassword(password)}
                    mode='outlined'
                    style={{ marginBottom: 10 }}
                />

                <View style={{marginTop:20}}>
                    <Button style={{borderRadius:10}} buttonColor='green'  textColor='white' mode="contained-tonal" onPress={login}>
                        LogIn
                    </Button>
                </View>

            </View>
        </>
    );
}
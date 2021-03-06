import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'

const NavigateCard = () => {
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            {/* Could be upgraded to show LogIn Name */}
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Phil</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                    styles={toInputBoxStyles}
                    placeholder='Where to?'
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})

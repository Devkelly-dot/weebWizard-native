import { ScrollView, TextInput, View } from "react-native";

export default function Form({fields}) {
    return (
        <ScrollView>
            {fields?.map((f)=>{
                return (
                    <View key={f.field}>
                        {
                        f.render?
                            f.render()
                        :
                            <View>
                                <Text>{f.label}</Text>
                                <TextInput
                                    value={f.value}
                                    onChangeText={f.onChange}
                                />
                            </View>
                        }
                    </View>
                )
            })}
        </ScrollView>
    )
}
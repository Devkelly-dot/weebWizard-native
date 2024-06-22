import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function AnimeAvailability({streamingInfo}) {
    function formatAddon(addon) {
        if(addon === 'crunchyrollus') {
            return 'Crunchyroll'
        } else if(addon === 'hidiveus') {
            return 'HIDIVE'
        }
    }

    return (
        <View style={styles.streamingSection}>
            <Text style={styles.streamingTitle}>Available On:</Text>
            {streamingInfo
                ?.sort((a, b) => a.service.localeCompare(b.service))
                .map((service, index) => (
                    <View key={index} style={styles.streamingService}>
                        <Text style={styles.serviceText}>{service.service}</Text>
                        <Text style={styles.serviceDetails}>
                            Type: {service.streamingType} {service?.streamingType === 'addon' && service.addon && `(${formatAddon(service.addon)}`}
                        </Text>
                        {
                            
                            <Text style={styles.serviceDetails}></Text>
                        }
                        {service.quality && <Text style={styles.serviceDetails}>Quality: {service.quality}</Text>}
                        {service.price && <Text style={styles.serviceDetails}>Price: {service.price.formatted}</Text>}
                        <TouchableOpacity onPress={() => Linking.openURL(service.link)}>
                            <Text style={styles.serviceLink}>Watch here</Text>
                        </TouchableOpacity>
                    </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    streamingSection: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 20,
    },
    streamingTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    streamingService: {
        marginBottom: 15,
    },
    serviceText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    serviceDetails: {
        fontSize: 16,
        color: '#666',
    },
    serviceLink: {
        fontSize: 16,
        color: '#1e90ff',
        marginTop: 5,
    },
})
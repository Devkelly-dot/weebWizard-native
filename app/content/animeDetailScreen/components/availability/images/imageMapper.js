import { Image } from 'react-native';
import hulu from './Hulu-logo.png';
import netflix from './Logos-Readability-Netflix-logo.png';
import crunchyroll from './Crunchyroll.png';
import prime from './Amazon_Prime_Logo.png';
import hidive from './HIDIVELogoPNG.png';

const HULU = Image.resolveAssetSource(hulu).uri;
const NETFLIX = Image.resolveAssetSource(netflix).uri;
const CRUNCHYROLL = Image.resolveAssetSource(crunchyroll).uri;
const PRIME = Image.resolveAssetSource(prime).uri;
const HIDIVE = Image.resolveAssetSource(hidive).uri;

export const image_mapper = {
    'hulu': HULU,
    'netflix': NETFLIX,
    'crunchyrollus': CRUNCHYROLL,
    'prime': PRIME,
    'hidiveus': HIDIVE
}
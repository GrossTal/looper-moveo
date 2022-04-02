import DRUMS from './audio-files/DRUMS.mp3';
import LEAD1 from './audio-files/LEAD 1.mp3';
import HE_HE_VOC from './audio-files/HE HE VOC.mp3';
import _tambourine_shake_higher from './audio-files/_tambourine_shake_higher.mp3';
import ALL_TRACK from './audio-files/ALL TRACK.mp3';
import B_VOC from './audio-files/B VOC.mp3';
import HIGH_VOC from './audio-files/HIGH VOC.mp3';
import JIBRISH from './audio-files/JIBRISH.mp3';
import UUHO_VOC from './audio-files/UUHO VOC.mp3';


export const rows=[{
    id: 1,
    title: 'DRUMS',
    isOn: false,
    audio: new Audio(DRUMS)
  },
  {
    id: 2,
    title: 'LEAD1',
    isOn: false,
    audio: new Audio(LEAD1)
  },
  {
    id: 3,
    title: 'HE_HE_VOC',
    isOn: false,
    audio: new Audio(HE_HE_VOC)
  },
  {
    id: 4,
    title: 'tambourine',
    isOn: false,
    audio: new Audio(_tambourine_shake_higher)
  },
  {
    id: 5,
    title: 'ALL_TRACK',
    isOn: false,
    audio: new Audio(ALL_TRACK)
  },
  {
    id: 6,
    title: 'B_VOC',
    isOn: false,
    audio: new Audio(B_VOC)
  },
  {
    id: 7,
    title: 'HIGH_VOC',
    isOn: false,
    audio: new Audio(HIGH_VOC)
  },
  {
    id: 8,
    title: 'JIBRISH',
    isOn: false,
    audio: new Audio(JIBRISH)
  },
  {
    id: 9,
    title: 'UUHO_VOC',
    isOn: false,
    audio: new Audio(UUHO_VOC)
  }]

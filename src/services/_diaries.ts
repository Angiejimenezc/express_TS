import { DiaryEntry, Weather, Visibility } from '../type.d'


const diaryEntries: Array<DiaryEntry> = [
    {
        id: 1,
        date: '2021-01-01',
        weather: Weather.Rainy,     
        visibility: Visibility.Poor,
        comment: 'Pretty scary flight, I was happy to arrive'
    },
    {
        id: 2,
        date: '2021-01-02',
        weather: Weather.Sunny,
        visibility: Visibility.Great,
        comment: 'I went on a hiking trip and the view was magnificent'
    },
    {
        id: 3,
        date: '2021-01-03',
        weather: Weather.Cloudy,
        visibility: Visibility.Ok,
        comment: ''
    }
];

export default diaryEntries;
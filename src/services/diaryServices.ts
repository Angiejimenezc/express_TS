import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry} from '../types';
import diaryData from '../services/diaries.json'


const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    if(entry){
        const { comment, ...restOfEntry } = entry
        return restOfEntry
    }
    return undefined 
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {             
            id,
            date,
            weather,
            visibility
            }
    })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
}
diaries.push(newDiary)
return newDiary
}



import { DiaryEntry, NewDiaryEntry, NonSensitiveinfo } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
export const getEntries = (): DiaryEntry[] => diaries

/** function -> recibe un object como parametro y retorna un object */
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}

/** function -> recibe un number como parametro y retorna un objecto o undefined */
export const findById = (id: number): NonSensitiveinfo | undefined => {
  const entry = diaries.find(elem => elem.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

/** este metodo nos permite replicar la interfas seleccionando los campos a mostrar */
export const getEntriesSensitiveInfo = (): NonSensitiveinfo[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

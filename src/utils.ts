/** import */
import { NewDiaryEntry } from './types'
import { Visibility } from './enums'

/** function de validaciones de los parametros del object */
const parseComment = (commentFromRequest: any): string => {
  // console.log(commentFromRequest)
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missiong comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  // console.log(dateFromRequest)
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missiong date')
  }
  return dateFromRequest
}
/*
const parseWeather = (weatherFromRequest: any): Weather => {
  // console.log(weatherFromRequest)
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missiong Weather')
  }
  return weatherFromRequest
}
*/
const parseVisibility = (visibilityFromRequest: any): Visibility => {
  // console.log(visibilityFromRequest)
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missiong Visibility')
  }
  return visibilityFromRequest
}

/** function comprobaciones de tipos de datos del object  */
const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}
/*
const isWeather = (parm: any): boolean => {
  return Object.values(Weather).includes(parm)
}
*/
const isVisibility = (parm: any): boolean => {
  return Object.values(Visibility).includes(parm)
}

/** function -> parametro object y retorna un object */

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: (object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry

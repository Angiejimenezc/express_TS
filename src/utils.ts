import { NewDiaryEntry, Weather, Visibility } from './types'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment: ' + commentFromRequest);
  }
  return commentFromRequest;
};

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date: ' + dateFromRequest);
  }
  return dateFromRequest;
};

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather: ' + weatherFromRequest);
  }
  return weatherFromRequest as Weather;
};

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility: ' + visibilityFromRequest);
  }
  return visibilityFromRequest as Visibility;
};

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
  };

  return newEntry;
};

export default toNewDiaryEntry;

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isWeather = (param: any): param is Weather => {
  return Object.values(Weather).includes(param);
};

const isVisibility = (param: any): param is Visibility => {
  return Object.values(Visibility).includes(param);
};
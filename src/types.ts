export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Windy = 'windy',
    Stormy = 'stormy'
  }
  
  export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor'
  }

export interface DiaryEntry {
    id: number;
    date: string;
    weather: string;
    visibility: string;
    comment: string;
  }
  
  export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;

  export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;

  
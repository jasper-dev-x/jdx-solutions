export interface ILynxItem {
  profileID?: string | null;
  siteID?: string;
  title: string | null;
  shortDesc?: string | null;
  username: string;
  url: string | null;
  urlLabel: string | null;
  urlType: string | null;
  order: number;
  createdBy?: string;
  createdOn?: Date;
  modifiedBy?: string;
  modifiedOn?: Date;
}

export interface IProfile {
  accessID?: string;
  apiKey?: string;
  dispName: string;
  name?: string | null;
  bio?: string | null;
  phones: Array<string>;
  emails: Array<string>;
  profilePicUrl?: string;
  occupation?: string | null;
  primeColor: string;
  secondColor?: string | null;
  accentColor?: string | null;
  active?: boolean;
  createdOn?: Date;
  modifiedBy?: string;
  modifiedOn?: Date;
}

export interface ILynxType {
  id: string;
  name: string;
  preText: "" | "@" | "$";
  webURL: string;
  apiURL?: string;
  nativeURL?: string;
  iconURL?: string;
}

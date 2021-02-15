export interface UserState {
    modal: boolean;
    name: string;
}

interface GermanState {
    bundesland_id: number;
    name: string;
    slug: string;
    geoid: number;
}
interface CityBundesland{

}
interface City {



    name: string;
    identifer: number;
    cityname:string;
    bundesland:GermanState;
    urlname:string;
    lat?:number;
    lng?:number;
    geoId?:number;
    importance?:number;
}
interface Bdl {
    name: string;
    id: number;
}

export interface CityState {
    origin: City | null;
    destination: City | null;
}
export type ThunkType = ThunkAction<
    void,
    AppStateType,
    unknown,
    Action<string>
>;

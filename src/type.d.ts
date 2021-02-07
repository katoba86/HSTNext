export interface UserState{
    modal:boolean;
    name:string;
}

interface City {
    name:string;
    id:number;
}
interface Bdl {
    name:string;
    id:number;
}

export interface CityState{
    origin:City|null;
    destination:City|null;
}

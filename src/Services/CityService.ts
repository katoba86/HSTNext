import {GermanState} from "../type";

export const GERMAN_STATES:GermanState[] = [
    {
        "bundesland_id": 1,
        "name": "NRW",
        "slug": "nrw",
        "geoid": 7
    },
    {
        "bundesland_id": 2,
        "name": "Bayern",
        "slug": "bayern",
        "geoid": 2
    },
    {
        "bundesland_id": 3,
        "name": "Berlin",
        "slug": "berlin",
        "geoid": 16
    },
    {
        "bundesland_id": 4,
        "name": "Brandenburg",
        "slug": "brandenburg",
        "geoid": 11
    },
    {
        "bundesland_id": 5,
        "name": "Bremen",
        "slug": "bremen",
        "geoid": 3
    },
    {
        "bundesland_id": 6,
        "name": "Hamburg",
        "slug": "hamburg",
        "geoid": 4
    },
    {
        "bundesland_id": 7,
        "name": "Hessen",
        "slug": "hessen",
        "geoid": 5
    },
    {
        "bundesland_id": 8,
        "name": "Mecklenburg-Vorpommern",
        "slug": "mecklenburg-vorpommern",
        "geoid": 12
    },
    {
        "bundesland_id": 9,
        "name": "Rheinland-Pfalz",
        "slug": "rheinland-pfalz",
        "geoid": 8
    },
    {
        "bundesland_id": 10,
        "name": "Niedersachsen",
        "slug": "niedersachsen",
        "geoid": 6
    },
    {
        "bundesland_id": 11,
        "name": "Saarland",
        "slug": "saarland",
        "geoid": 9
    },
    {
        "bundesland_id": 12,
        "name": "Sachsen",
        "slug": "sachsen",
        "geoid": 13
    },
    {
        "bundesland_id": 13,
        "name": "Sachsen-Anhalt",
        "slug": "sachsen-anhalt",
        "geoid": 14
    },
    {
        "bundesland_id": 14,
        "name": "Schleswig-Holstein",
        "slug": "schleswig-holstein",
        "geoid": 10
    },
    {
        "bundesland_id": 15,
        "name": "Baden-Württemberg",
        "slug": "baden-wuerttemberg",
        "geoid": 1
    },
    {
        "bundesland_id": 16,
        "name": "Thüringen",
        "slug": "thueringen",
        "geoid": 15
    }
];

export const getStateSlug = (id:number):string => {
    return GERMAN_STATES[id+1]["slug"];

}

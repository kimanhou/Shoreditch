import Place from "./Place";
import Tag from "./Tag";

export default class ListOfPlaces {
    readonly tags : Tag[];
    readonly places : Place[];

    constructor(tags : Tag[], places : Place[]) {
        this.tags = tags;
        this.places = places;
    }

    areSameTags = (tags : Tag[]) => {
        return Tag.listEquals(this.tags, tags);
    }

    static getAllListOfPlaces = () => {
        return [ ListOfPlaces.MYFAVOURITES, ListOfPlaces.PIZZAS ];
    }

    static MYFAVOURITES = new ListOfPlaces([], [ Place.YUZU, Place.ROSEMARY ]);
    static PIZZAS = new ListOfPlaces([ Tag.PIZZA ], [ Place.GLORIA, Place.PILGRIMS ]);
}
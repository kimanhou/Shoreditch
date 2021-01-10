import ListOfPlaces from "../model/ListOfPlaces";
import Place from "../model/Place";
import Tag from "../model/Tag";

class Filters {
    getPlaces = (tags : Tag[]) => {
        const allListOfPlaces = ListOfPlaces.getAllListOfPlaces();
        for (let list of allListOfPlaces) {
            if (Tag.listEquals(list.tags, tags)) {
                return list.places;
            }
        }

        const allPlaces = Place.getAllPlaces();
        return allPlaces.filter(t => Tag.intersects(t.tags, tags));
    }
}

export default new Filters();
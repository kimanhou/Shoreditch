import React from 'react';
import { useLocation, useParams } from 'react-router';
import Header from '../Header/Header';
import ListOfPlaces from './ListOfPlaces';
import Place from '../../../model/Place';
import { useQueryParams } from '../../hooks/UseQueryParams';
import Tag from '../../../model/Tag';

interface IListOfPlacesPageProps {
    places : Place[];
}

const ListOfPlacesPage : React.FC<IListOfPlacesPageProps> = props => {
    const queryParams = useQueryParams();
    let tagsString = queryParams['tags'];
    let tags : Tag[] = [];
    if (tagsString != undefined) {
        tags = (JSON.parse(tagsString) as string[]).map(Tag.deserialize);
    }
    let displayedPlaces = props.places.filter(t => Tag.intersects(t.tags, tags));

    let { placeShortName } = useParams<{placeShortName ?: string}>();
    var selectedPlace = props.places.find(t => t.shortName == placeShortName);

    return(
        <div className={`list-of-places-page`}>
            <Header hasBackground/>
            <ListOfPlaces places={displayedPlaces} selectedPlace={selectedPlace}/>
        </div>
    )
}

export default ListOfPlacesPage;
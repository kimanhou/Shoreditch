import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
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
    
    const history = useHistory();
    const location = useLocation();
    const setSelectedTags = (tags : Tag[]) => {
        const {tags : tagsParams, ...otherQueryParams} = queryParams;
        const search = Object.keys(otherQueryParams).map(key => `${key}=${encodeURIComponent(queryParams[key]!)}`);
        const serializedTags = `tags=${JSON.stringify(tags)}`;
        history.push(`${location.pathname}?${serializedTags}${search}`)
    }

    const onAdd = (tag : Tag) => {
        const newTags = tags.concat(tag);
        setSelectedTags(newTags);
    }

    const onRemove = (tag : Tag) => {
        var index = tags.indexOf(tag);
        if (index !== -1) {
            tags.splice(index, 1);
        }
        setSelectedTags(tags);
    }

    let { placeShortName } = useParams<{placeShortName ?: string}>();
    var selectedPlace = props.places.find(t => t.shortName == placeShortName);

    return(
        <div className={`list-of-places-page`}>
            <Header hasBackground/>
            <ListOfPlaces places={displayedPlaces} selectedPlace={selectedPlace} tags={tags} onAdd={onAdd} onRemove={onRemove}/>
        </div>
    )
}

export default ListOfPlacesPage;
import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import Header from '../Header/Header';
import Results from './Results';
import Place from '../../../model/Place';
import { useQueryParams } from '../../hooks/UseQueryParams';
import Tag from '../../../model/Tag';
import Footer from '../Footer/Footer';
import Filters from '../../../business/Filters';

interface IResultsPageProps {
    places : Place[];
}

const ResultsPage : React.FC<IResultsPageProps> = props => {
    const queryParams = useQueryParams();
    let tagsString = queryParams['tags'];
    let tags : Tag[] = [];
    if (tagsString != undefined) {
        tags = (JSON.parse(tagsString) as string[]).map(Tag.deserialize);
    }
    let displayedPlaces = Filters.getPlaces(tags);
    
    const history = useHistory();
    const location = useLocation();
    const setSelectedTags = (tags : Tag[]) => {
        const {tags : tagsParams, ...otherQueryParams} = queryParams;
        const search = Object.keys(otherQueryParams).map(key => `${key}=${encodeURIComponent(queryParams[key]!)}`);
        history.push(`${location.pathname}?${Tag.toQueryParam(tags)}${search}`)
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
        <div className={`results-page`}>
            <Header hasBackground/>
            <Results places={displayedPlaces} selectedPlace={selectedPlace} tags={tags} onAdd={onAdd} onRemove={onRemove}/>
            <Footer />
        </div>
    )
}

export default ResultsPage;
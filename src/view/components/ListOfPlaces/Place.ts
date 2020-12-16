import Social from "../PlaceDetails/Left/SocialMedias/Social";

export default class Place {
    name : string;
    socialMedia : Social[];
    tags : string[];
    description : string;
    shortName : string;

    constructor(name : string, socialMedia : Social[], tags : string[], description : string, shortName : string) {
        this.name = name;
        this.socialMedia = socialMedia;
        this.tags = tags;
        this.description = description;
        this.shortName = shortName;
    }
}
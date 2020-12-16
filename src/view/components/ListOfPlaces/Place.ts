import Social from "../PlaceDetails/Left/SocialMedias/Social";

export default class Place {
    name : string;
    socialMedia : Social[];
    tags : string[];
    description : string;

    constructor(name : string, socialMedia : Social[], tags : string[], description : string) {
        this.name = name;
        this.socialMedia = socialMedia;
        this.tags = tags;
        this.description = description;
    }
}
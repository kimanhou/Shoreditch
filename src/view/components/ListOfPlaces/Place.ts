import Social, { SocialMediaPlatform } from "../PlaceDetails/Left/SocialMedias/Social";

export default class Place {
    name : string;
    socialMedia : Social[];
    tags : string[];
    description : string;
    shortName : string;
    photoPlaceUrl : string;
    photoFoodUrl : string;

    constructor(name : string, socialMedia : Social[], tags : string[], description : string, shortName : string, photoPlaceUrl : string, photoFoodUrl : string) {
        this.name = name;
        this.socialMedia = socialMedia;
        this.tags = tags;
        this.description = description;
        this.shortName = shortName;
        this.photoPlaceUrl = photoPlaceUrl;
        this.photoFoodUrl = photoFoodUrl;
    }

    getInstagram = () => { 
        var temp = this.socialMedia.find(t => t.platform == SocialMediaPlatform.INSTAGRAM);
        if (temp !== undefined) {
            return temp.name;
        }
        return ''; 
    }
}
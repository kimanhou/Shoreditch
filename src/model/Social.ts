export default class Social {
    platform : SocialMediaPlatform;
    link : string;
    name : string;

    constructor(platform : SocialMediaPlatform, link : string, name : string) {
        this.platform = platform;
        this.link = link;
        this.name = name;
    }
}

export enum SocialMediaPlatform {
    INSTAGRAM = 'Instagram',
    WEBSITE = 'Website'
}
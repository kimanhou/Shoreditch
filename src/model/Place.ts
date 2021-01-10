import Social, { SocialMediaPlatform } from "./Social";
import Tag from "./Tag";

export default class Place {
    name : string;
    socialMedia : Social[];
    tags : Tag[];
    description : string;
    shortName : string;
    photoPlaceUrl : string;
    photoFoodUrl : string;

    constructor(name : string, socialMedia : Social[], tags : Tag[], description : string, shortName : string, photoPlaceUrl : string, photoFoodUrl : string) {
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

    static getAllPlaces = () => {
        return [ Place.YUZU, Place.PATTYANDBUN, Place.DISHOOM, Place.ROSEMARY, Place.GLORIA, Place.PILGRIMS ];
    }

    static YUZU = new Place('Yuzu', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.yuzulondon.com/', 'www.yuzulondon.com'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/yuzulondon/', '@yuzulondon')], [ Tag.SUSHI, Tag.INTIMATE, Tag.DATE, Tag.LOCALSONLY], 'Tucked in a hidden back alley between buzzing Liverpool Street and even more buzzing Spitafields Market, Yuzu is a haven of peace. The experience of dining in a minimalist decor with earthy colors and dimmed lights will make you forget you are in a vibrant neighborhood. The food is both traditional and contemporary. Lunch is kaiten, dinner is more sophisticated with a French influence. Always delicious !', 'yuzu', 'https://www.instagram.com/p/B5N1yCGnNtB/', 'https://www.instagram.com/p/CIRJrbrH31A/');
    static PATTYANDBUN = new Place('Patty & Bun', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.pattyandbun.co.uk/', 'www.pattyandbun.co.uk'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/pattyandbun/', '@pattyandbun')], [ Tag.BURGER, Tag.POPULAR, Tag.TAKEAWAY, Tag.FAST ], 'Tucked in a hidden back alley between buzzing Liverpool Street and even more buzzing Spitafields Market, Yuzu is a haven of peace. The experience of dining in a minimalist decor with earthy colors and dimmed lights will make you forget you are in a vibrant neighborhood. The food is both traditional and contemporary. Lunch is kaiten, dinner is more sophisticated with a French influence. Always delicious !', 'patty-and-bun', 'https://www.instagram.com/p/CEt7tLehISY/', 'https://www.instagram.com/p/CIsbqC6h0MC/');
    static DISHOOM = new Place('Dishoom', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.dishoom.com/', 'www.dishoom.com'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/dishoom/', '@dishoom')], [ Tag.INDIAN, Tag.POPULAR, Tag.DATE, Tag.SHARING ], 'Tucked in a hidden back alley between buzzing Liverpool Street and even more buzzing Spitafields Market, Yuzu is a haven of peace. The experience of dining in a minimalist decor with earthy colors and dimmed lights will make you forget you are in a vibrant neighborhood. The food is both traditional and contemporary. Lunch is kaiten, dinner is more sophisticated with a French influence. Always delicious !', 'dishoom', 'https://www.instagram.com/p/B4cV9SnB20K/', 'https://www.instagram.com/p/CGr1RE2BrYt/');
    static ROSEMARY = new Place('Rosemary Branch', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.rosemarybranchtheatre.co.uk/', 'www.rosemarybranchtheatre.co.uk'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/rosiebtheatre/', '@rosiebtheatre')], [ Tag.PUB, Tag.QUIRKY, Tag.LOCALSONLY ], 'Tucked in a hidden back alley between buzzing Liverpool Street and even more buzzing Spitafields Market, Yuzu is a haven of peace. The experience of dining in a minimalist decor with earthy colors and dimmed lights will make you forget you are in a vibrant neighborhood. The food is both traditional and contemporary. Lunch is kaiten, dinner is more sophisticated with a French influence. Always delicious !', 'rosemary', 'https://www.instagram.com/p/CCWIP5Pn4pH/', 'https://www.instagram.com/p/B9MmDBvHy8N/');
    
    // PIZZA
    static GLORIA = new Place('Gloria Trattoria', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.bigmammagroup.com/en/trattorias/gloria', 'www.bigmammagroup.com'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/bigmamma.uk/', '@bigmamma.uk')], [ Tag.PIZZA, Tag.POPULAR, Tag.ITALIAN, Tag.DATE ], 'Tucked in a hidden back alley between buzzing Liverpool Street and even more buzzing Spitafields Market, Yuzu is a haven of peace. The experience of dining in a minimalist decor with earthy colors and dimmed lights will make you forget you are in a vibrant neighborhood. The food is both traditional and contemporary. Lunch is kaiten, dinner is more sophisticated with a French influence. Always delicious !', 'gloria', 'https://www.instagram.com/p/CFB6TPTHwZr/', 'https://www.instagram.com/p/CClsReyHPie/');
    static PILGRIMS = new Place('Pizza Pilgrims', [new Social(SocialMediaPlatform.WEBSITE, 'https://www.bigmammagroup.com/en/trattorias/gloria', 'www.bigmammagroup.com'), new Social(SocialMediaPlatform.INSTAGRAM, 'https://www.instagram.com/bigmamma.uk/', '@bigmamma.uk')], [ Tag.PIZZA, Tag.POPULAR, Tag.ITALIAN, Tag.DATE ], 'Tucked in a hidden back alley between buzzing Liverpool Street and even more buzzing Spitafields Market, Yuzu is a haven of peace. The experience of dining in a minimalist decor with earthy colors and dimmed lights will make you forget you are in a vibrant neighborhood. The food is both traditional and contemporary. Lunch is kaiten, dinner is more sophisticated with a French influence. Always delicious !', 'gloria', 'https://www.instagram.com/p/CFB6TPTHwZr/', 'https://www.instagram.com/p/CClsReyHPie/');
    
}
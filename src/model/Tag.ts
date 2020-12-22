export default class Tag {
    readonly label : string;
    readonly description : string;

    constructor(label : string, description : string){
        this.label = label;
        this.description = description;
    }

    static deserialize = (json : any) => {
        if(typeof json != 'string'){
            throw new Error("Expected type string when deserializing Tag but got something else.");
        }
        for(let key in Tag){
            if(key.toLowerCase() == json.toLowerCase()){
                return ((Tag as any)[key]) as Tag;
            }
        }
        throw new Error(`Did not find Tag with label ${json}`);
    }

    equals = (tag1 : Tag) => {
        if (this.label == tag1.label) {
            return true;
        }
        return false;
    }

    isIncluded = (tags : Tag[]) => {
        if (tags.filter(t => t.equals(this)).length > 0) {
            return true;
        }
        return false;
    }

    static intersects = (tags1 : Tag[], tags2 : Tag[]) => {
        for (let t of tags1) {
            if (t.isIncluded(tags2)) {
                return true;
            }
        }
        return false;
    }

    static getAllTags = () => {
        return [ Tag.LOCALSONLY, Tag.POPULAR, Tag.DATE, Tag.SHARING, Tag.QUIRKY, Tag.FAST, Tag.MARKET, Tag.INTIMATE, Tag.TAKEAWAY,
                 Tag.PIZZA, Tag.SUSHI, Tag.INDIAN, Tag.BURGER, Tag.ITALIAN, Tag.FRENCH, Tag.ASIAN,
                 Tag.BEER, Tag.COCKTAIL, Tag.PUB,
                 Tag.CHEAP, Tag.FANCY ];
    }

    // Ambiance
    static LOCALSONLY = new Tag('LOCALSONLY', 'Locals only');
    static POPULAR = new Tag('POPULAR', 'Popular');
    static DATE = new Tag('DATE', 'Perfect for dates');
    static SHARING = new Tag('SHARING', 'Perfect for sharing');
    static QUIRKY = new Tag('QUIRKY', 'Quirky');
    static FAST = new Tag('FAST', 'Fast');
    static MARKET = new Tag('MARKET', 'Market stall');
    static INTIMATE = new Tag('INTIMATE', 'Intimate atmosphere');
    static TAKEAWAY = new Tag('TAKEAWAY', 'Take away');

    // Food
    static PIZZA = new Tag('PIZZA', 'Great pizza');
    static SUSHI = new Tag('SUSHI', 'Great sushi');
    static INDIAN = new Tag('INDIAN', 'Great Indian food');
    static BURGER = new Tag('BURGER', 'Great burgers');
    static ITALIAN = new Tag('ITALIAN', 'Great Italian food');
    static FRENCH = new Tag('FRENCH', 'Great French food');
    static ASIAN = new Tag('ASIAN', 'Great Asian food'); // includes Burmese, Vietnamese, Thai, Chinese, Japanese

    // Drink
    static BEER = new Tag('BEER', 'Great beer');
    static COCKTAIL = new Tag('COCKTAIL', 'Great cocktails');
    static PUB = new Tag('PUB', 'Great pub');

    // Budget
    static CHEAP = new Tag('CHEAP', 'Cheap eats');
    static FANCY = new Tag('FANCY', 'Fancy eats');
}
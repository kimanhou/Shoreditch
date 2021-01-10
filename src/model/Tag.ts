export enum TagCategory {
    CUISINE = 'Cuisine',
    MOOD = 'Mood',
    DRINKS = 'Drinks',
    BUDGET = 'Budget'
}

export default class Tag {
    readonly label : string;
    readonly description : string;
    readonly tagCategory : TagCategory;

    constructor(label : string, description : string, tagCategory : TagCategory){
        this.label = label;
        this.description = description;
        this.tagCategory = tagCategory;
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

    toJSON = () => {
        return this.label.toLowerCase();
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

    static listEquals = (tags1 : Tag[], tags2 : Tag[]) => {
        for (let t of tags1) {
            if (!t.isIncluded(tags2)) {
                return false;
            }
        }
        for (let t of tags2) {
            if (!t.isIncluded(tags1)) {
                return false;
            }
        }
        return true;
    }

    static getAllTags = () => {
        return [ Tag.LOCALSONLY, Tag.POPULAR, Tag.DATE, Tag.SHARING, Tag.QUIRKY, Tag.FAST, Tag.MARKET, Tag.INTIMATE, Tag.TAKEAWAY,
                 Tag.PIZZA, Tag.SUSHI, Tag.INDIAN, Tag.BURGER, Tag.ITALIAN, Tag.FRENCH, Tag.ASIAN,
                 Tag.BEER, Tag.COCKTAIL, Tag.PUB,
                 Tag.CHEAP, Tag.FANCY ];
    }

    static getAllTagCategories = () => {
        return [ TagCategory.CUISINE, TagCategory.MOOD, TagCategory.DRINKS, TagCategory.BUDGET ];
    }

    static getTagsByCategory = (category : TagCategory) => {
        const allTags = Tag.getAllTags();
        return allTags.filter(t => t.tagCategory == category);
    }

    static toQueryParam = (tags : Tag[]) => {
        return `tags=${JSON.stringify(tags)}`;
    }

    // Ambiance
    static LOCALSONLY = new Tag('LOCALSONLY', 'Locals only', TagCategory.MOOD);
    static POPULAR = new Tag('POPULAR', 'Popular', TagCategory.MOOD);
    static DATE = new Tag('DATE', 'Perfect for dates', TagCategory.MOOD);
    static SHARING = new Tag('SHARING', 'Perfect for sharing', TagCategory.MOOD);
    static QUIRKY = new Tag('QUIRKY', 'Quirky', TagCategory.MOOD);
    static FAST = new Tag('FAST', 'Fast', TagCategory.MOOD);
    static MARKET = new Tag('MARKET', 'Market stall', TagCategory.MOOD);
    static INTIMATE = new Tag('INTIMATE', 'Intimate atmosphere', TagCategory.MOOD);
    static TAKEAWAY = new Tag('TAKEAWAY', 'Take away', TagCategory.MOOD);

    // Food
    static PIZZA = new Tag('PIZZA', 'Great pizza', TagCategory.CUISINE);
    static SUSHI = new Tag('SUSHI', 'Great sushi', TagCategory.CUISINE);
    static INDIAN = new Tag('INDIAN', 'Great Indian food', TagCategory.CUISINE);
    static BURGER = new Tag('BURGER', 'Great burgers', TagCategory.CUISINE);
    static ITALIAN = new Tag('ITALIAN', 'Great Italian food', TagCategory.CUISINE);
    static FRENCH = new Tag('FRENCH', 'Great French food', TagCategory.CUISINE);
    static ASIAN = new Tag('ASIAN', 'Great Asian food', TagCategory.CUISINE); // includes Burmese, Vietnamese, Thai, Chinese, Japanese

    // Drink
    static BEER = new Tag('BEER', 'Great beer', TagCategory.DRINKS);
    static COCKTAIL = new Tag('COCKTAIL', 'Great cocktails', TagCategory.DRINKS);
    static PUB = new Tag('PUB', 'Great pub', TagCategory.DRINKS);

    // Budget
    static CHEAP = new Tag('CHEAP', 'Cheap eats', TagCategory.BUDGET);
    static FANCY = new Tag('FANCY', 'Fancy eats', TagCategory.BUDGET);
}
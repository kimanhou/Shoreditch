export default class Tag {
    readonly label : string;
    readonly description : string;

    constructor(label : string, description : string){
        this.label = label;
        this.description = description;
    }

    static deserialize = (json : any) => {
        if(typeof json != 'string'){
            throw new Error("Expected string when deserializing Tag");
        }
        for(let key in Tag){
            if(key.toLowerCase() == json.toLowerCase()){
                return ((Tag as any)[key]) as Tag;
            }
        }
        throw new Error(`Did not find Tag with label ${json}`);
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
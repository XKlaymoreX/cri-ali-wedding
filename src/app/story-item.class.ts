export class StoryItem implements StoryItem {
    imagePath: string
    date:string
    description:string


    constructor(imagePath : string, date:string, description: string) {
        this.imagePath = imagePath
        this.date = date
        this.description = description
    }
}


export interface StoryItem {
    imagePath:string,
    date:string,
    description:string
}

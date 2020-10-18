export class Book {
    _id: string;
    title: string;
    author: string;
    constructor(jsObj?: any) {
        this._id = jsObj && jsObj._id || '';
        this.title = jsObj && jsObj.title || '';
        this.author = jsObj && jsObj.author || '';
    }
}



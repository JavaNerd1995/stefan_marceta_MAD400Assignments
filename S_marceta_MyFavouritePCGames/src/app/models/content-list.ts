import { IContent } from "./icontent";

export class ContentList {
    private _items: IContent[] = [];

    constructor(items: IContent) {
        this._items = [];
        this._items[0] = items;
    }
     get items(): IContent[]{
        return this._items;
        }
    addContent (content: IContent){
        this._items = this._items.concat();
      }

      ToString () {
        
      }
    }
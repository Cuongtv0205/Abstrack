import {Colorable} from "./Colorable";

export class Square implements Colorable{
    private _length:number;

    constructor(length: number) {
        this._length = length;
    }

    getLength(): number {
        return this._length;
    }

    setLength(value: number) {
        this._length = value;
    }
AreaHv(){
        return this._length*this._length
}
PeremeterHv(){
        return 4*this._length;
}
    howToColor(): string {
        return "Color all four sides";
    }
}
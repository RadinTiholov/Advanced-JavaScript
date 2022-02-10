function solve(){
    class Balloon{
        constructor(color, hasWeight){
            this.color = color;
            this.hasWeight = hasWeight;
        }
    }
    class PartyBalloon extends Balloon{
        constructor(color, hasWeight,ribbonColor, ribbonLength){
            super(color, hasWeight);
            this._ribbon = {
    
                color: ribbonColor,
                length: ribbonLength
    
            }
        }
        get ribbon(){
            return this._ribbon; 
        }
        set ribbon(value){
            this._ribbon = value; 
        }
    }
    class BirthdayBalloon extends PartyBalloon{
        constructor(color, hasWeight,ribbonColor, ribbonLength, text){
            super(color, hasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }
        get text(){
            return this._text;
        }
        set text(value){
            this._text = value;
        }
    }
    return{
        Balloon,
        BirthdayBalloon,
        PartyBalloon
    }
}


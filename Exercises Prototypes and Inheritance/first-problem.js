(function arrayExtension() {
    Array.prototype.last = function(){
        return this[this.length - 1];
    }
    Array.prototype.skip = function(n){
        const result = this.slice(n);
        return result;
    }
    Array.prototype.take = function(n){
        const result = this.slice(0, n);
        return result;
    }
    Array.prototype.sum = function(){
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum;
    }
    Array.prototype.average = function(){
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum/this.length;
    }
})();
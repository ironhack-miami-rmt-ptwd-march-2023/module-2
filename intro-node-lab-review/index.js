class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  } 

  checkLength(){
    if(!this.length) throw new Error('EmptySortedList');
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b)=>{
      if(a > b){
        return 1
      } else if (a < b){
        return -1
      } else return 0;
    });
  }

  get(pos) {
    if(!this.items[pos]) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    this.checkLength();
    // return this.items[this.items.length -1];
    // this one ^ works because we're already sorting the list everytime we add something
    return Math.max(...this.items);
  }

  min() {
    this.checkLength();
    // return this.items[0];
    // this one ^ works because we're already sorting the list everytime we add something
    return Math.min(...this.items);
  }

  sum() {
    if(!this.items.length) return 0;
    return this.items.reduce((accum, init)=>{
      return accum + init;
    });
  }


  avg() {
    this.checkLength();
    return this.sum()/this.length;
  }
}

module.exports = SortedList;

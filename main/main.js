module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.max()}
o) 元素数量 = ${sequence.elements_number()}
o) 平均值 = ${sequence.average()}`);

};

class Sequence {
  constructor(input) {
    // Write your code here
	this.deal_array = input;
  }

  minimum() {
    // Write your code here
	var min = this.deal_array[0];
	for(var i = 1;i<this.deal_array.length;i++){
		if (min > this.deal_array[i]){
			min = this.deal_array[i];
		}
	}
	return min;
  }
  max() {
	var max = this.deal_array[0];
	for (var i = 1;i<this.deal_array.length;i++){
		if (max < this.deal_array[i]){
			max = this.deal_array[i];
		}
	}
	return max;
  }
  
  elements_number() {
	var num = this.deal_array.length;
	return num;
  }
  
  average() {
	var sum = 0;
	var avg = 0;
	for (var i = 0;i<this.deal_array.length;i++){
		sum = sum + this.deal_array[i];
	}
	avg = sum / this.deal_array.length;
	avg = avg.toFixed(2);
	return avg;
  }

  // Write your code here
}

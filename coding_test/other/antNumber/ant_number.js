function ant(n){
	let start= ['1'];
	for(i=0;i<n;i++){
		let target = start[i];
		let copy_target = target
		let target_split=target.split("");
		let new_ant = '';

		target_split.map(w=>{
			let test = new RegExp(`${w}+`);
			let count = copy_target.match(test)[0]?copy_target.match(test)[0].split("").length:0;
			copy_target=copy_target.replace(test,'');
			console.log('copy_target',copy_target)
			console.log(count);
			new_ant+=count?`${w}${count}`:w;
		})
		start.push(new_ant);
	}
	return start;
}
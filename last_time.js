function f_date_last(str_date){
	let d_now = new Date();
	let d_old = new Date(str_date);
	
	if(d_old.toString() == 'Invalid Date'){
		return false;
	}
	
	let diff_m = (d_now.getTime() - d_old.getTime()) / (60 * 1000);
	let arr_month = ['янв.', 'фев.', 'марта', 'апр.', 'мая', 'июня', 'июля', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'];

	let str_time = '';
	if(diff_m < 60 ){ // 1-60 мин
		str_time = Math.floor(diff_m);
		str_time = str_time < 0 ? 1 : str_time;
		str_time = str_time + ' мин.';
	}else if(diff_m < 24*60){ // 1-24 ч
		str_time = Math.floor(diff_m / 60);
		str_time = str_time + ' ч.';
	}else if(diff_m < 8*24*60 ){ // 1-7 д
		str_time = Math.floor(diff_m / (24*60));
		str_time = str_time + ' д.';
	}else if(d_now.getFullYear() != d_old.getFullYear() ){ // 11 июня 2022 г.
		str_time = d_old.getDate() + ' ' + arr_month[d_old.getMonth()] + ' ' + d_old.getFullYear() + ' г.';
	}else{ // 11 июня
		str_time = d_old.getDate() + ' ' + arr_month[d_old.getMonth()] + '';
	}
	
	return str_time;
}

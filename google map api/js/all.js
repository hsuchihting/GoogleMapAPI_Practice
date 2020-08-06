var map;

function initMap() {
	let position = {
		lat: 35.6833334,
		lng: 139.7822903
	};

	map = new google.maps.Map(document.getElementById("map"), {
		center: position,
		zoom: 19
	});

	var marker = new google.maps.Marker({
		position: position, //原本設定的經緯度 object
		map: map,
		title: "Hello World!" //滑鼠移動到圖標會有文字提示
	});
}

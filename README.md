
<!DOCTYPE html>
<html>
<head>
	<title>Hitung Diskon</title>
</head>
<body>
	<h3>Hitung Diskon</h3>
	<center>Masukkan Harga (Rp)<br>
	<input type="text" id="harga"></input>
    <br></br>
	masukan diskon(1-100)
    <br></br>
	<input type="text" id="diskon" size="3"></input>%
    <br></br>
	<input type="button" onclick="hitung()" value="proses"></input>
	<input type="reset" id="reset"></input>
	<br>Harga diskon (Rp)</br>
	<input type="text" id="hargadiskon"></input>
    <br>Hasil diskon (Rp)<br>
	<input type="text" id="hasildiskon"></input>
	
	<script type="text/javascript">
			function hitung() {
			var harga =parseFloat(document.hitungdiskon.harga.value);
			if (isNaN(harga)) {harga=0.0;}
			var diskon =parseFloat(document.hitungdiskon.diskon.value);
			if (isNaN(diskon)) {diskon=0.0}
			var hargadiskon =harga* diskon/ 100;
			var hasil = harga - diskon;
		
			document.hitungdiskon.hasildiskon.value= hasil;
			document.hitungdiskon.hrgdiskon.value= hargadiskon;
	</script>
	
</body>
</html>

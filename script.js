function Ramayana(manager, cabang, pengunjung, kas) {
    this.manager = manager;
    this.cabang = cabang;
    this.pengunjung = pengunjung;
    this.kas = kas ;

    this.pengunjungDatang = function(namaPengunjung) {
        this.pengunjung.push(namaPengunjung);
        return this.pengunjung
    }

    this.pengunjungKeluar = function(namaPengunjung, bayar) {
        if(this.pengunjung.length === 0 ) {
            alert('ramayana masih tutup!');
            return false;
        }

        for(var i = 0; i < this.pengunjung.length; i++ ) {
            if( this.pengunjung[i] == namaPengunjung ) {
                this.pengunjung[i] = undefined;
                this.kas += bayar;
                return this.pengunjung;
            }
            }
    } 
    

}

var ramayana1 = new Ramayana('Suci', 'Sidoarjo', [], 0);
var ramayana2 = new Ramayana('Holifah', 'Surabaya', [], 0);

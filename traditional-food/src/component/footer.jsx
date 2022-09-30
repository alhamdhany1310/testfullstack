import React from 'react';

const Footer = () => {
  return (
    <div className=" footer">
      <div className="container pt-5 pb-5">
        <p className="title font-weight-bold">Shofood Indonesia - Jual Beli di Ponsel</p>
        <p className="desc">
          Shofood adalah mobile-platform pertama di Asia Tenggara (Indonesia, Filipina, Malaysia, Singapura, Thailand, Vietnam) dan Taiwan yang menawarkan transaksi jual beli online yang menyenangkan, gratis, dan terpercaya via ponsel.
          Bergabunglah dengan jutaan pengguna lainnya dengan mulai mendaftarkan produk jualan dan berbelanja berbagai penawaran menarik kapan saja, di mana saja. Keamanan transaksi kamu terjamin - Terima pesanan kamu atau dapatkan uang kamu
          kembali dengan Garansi Shofood. Ayo gabung dalam komunitas Shofood dan mulai belanja sekarang!
        </p>

        <p className="title font-weight-bold mt-5">Pembeli Suka Belanja Online</p>
        <p className="desc">
          Temukan apapun kebutuhanmu dengan harga terbaik cuma di Shofood. Shofood adalah pusat perbelanjaan online dimana kamu bisa mendapatkan update terkini dari penjual yang kamu ikuti, sekaligus dari pengguna favorit kamu. Berbelanja
          dan berjualan menjadi lebih menyenangkan dengan fitur sosial, dimana kamu bisa menyebarkan produk yang kamu jual ataupun barang favorit kamu hanya dengan satu klik saja! Belanja semua kebutuhanmu di Shofood dengan hati yang
          tenang! Cek rating dan review toko-toko yang ada dan temukan penjual yang terpercaya dengan mudah. Kami selalu mengutamakan keamanan transaksi untuk para pembeli kami! Dengan Garansi Shofood, kamu akan mendapatkan uangmu kembali
          jika kamu tidak menerima pesanan dengan baik. Tidak yakin apa yang ingin kamu beli? Fitur hashtag dapat membantumu menemukan tren produk terkini. Jelajahi berbagai kategori produk, seperti Kemeja Pria, Perlengkapan Rumah, Tas
          Selempang Pria, Hobi & Koleksi, Makanan & Minuman, Pakaian Wanita, Fashion Anak, Clucth Tas Wanita, Kosmetik, Otomotif, Handphone & Aksesoris, Ibu & Bayi, Jam Tangan Analog, Kamera Mirrorless, Souvenir & Pesta, Perawatan &
          Kesehatan, Sepatu Pria, Aksesoris Fashion, Fashion Muslim, Serba Serbi, Komputer & Aksesoris, Sepatu Wanita, Elektronik, Perlengkapan Olahraga, Voucher, dan masih banyak lagi! Gunakan fitur Pencarian atau Rekomendasi untuk
          menemukan produk yang paling sesuai dengan keinginanmu secara instan. Berbelanja menjadi semakin hemat dengan voucher dan cashback di Shofood. Ayo mulai belanja di Shofood sekarang!
        </p>

        <p className="title font-weight-bold mt-3">Kategori</p>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <p className="desc font-weight-bold">LAYANAN PELANGGAN</p>
            <p className="mb-1 desc">Bantuan</p>
            <p className="mb-1 desc">Metode Pembayaran</p>
            <p className="mb-1 desc">Shofood Pay</p>
          </div>
          <div className="d-flex flex-column ml-5">
            <p className="desc font-weight-bold">JELAJAHI SHOFOOD</p>
            <p className="mb-1 desc">Tentang Kami</p>
            <p className="mb-1 desc">Karir</p>
            <p className="mb-1 desc">Kebijakan Shofood</p>
          </div>
          <div className="d-flex flex-column ml-5">
            <p className="desc font-weight-bold">PEMBAYARAN</p>
            <div className="d-flex align-items-center">
              <div className="justify-content-start align-items-center p-2 bg-light rounded">
                <div className="d-flex flex-row">
                  <div className="shadow-sm p-2 mb-1 bg-body rounded mx-1" data-bs-toggle="collapse" href="#seabank" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <img src="https://cf.shopee.co.id/file/5589c755ab085d2fac3e33f4755c6a9e" alt="" />
                  </div>
                  <div className="shadow-sm p-2 mb-1 bg-body rounded mx-1" data-bs-toggle="collapse" href="#seabank" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <img src="https://cf.shopee.co.id/file/49656d7100598b911a1f247dec64fda4" alt="" />
                  </div>
                  <div className="shadow-sm p-2 mb-1 bg-body rounded mx-1" data-bs-toggle="collapse" href="#seabank" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <img src="https://cf.shopee.co.id/file/e7865f5fb066b8b5e73f9d5c36fc7154" alt="" />
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div className="shadow-sm p-2 mb-1 bg-body rounded mx-1" data-bs-toggle="collapse" href="#seabank" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <img src="https://cf.shopee.co.id/file/1ad101bcf0e90b74b5697db1511de529" alt="" />
                  </div>
                  <div className="shadow-sm p-2 mb-1 bg-body rounded mx-1" data-bs-toggle="collapse" href="#seabank" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <img src="https://cf.shopee.co.id/file/41e4c83bae13f67b9898c7579dd53d05" alt="" />
                  </div>
                  <div className="shadow-sm p-2 mb-1 bg-body rounded mx-1" data-bs-toggle="collapse" href="#seabank" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <img src="https://cf.shopee.co.id/file/9a08d3abab3dd059fff945c72ca372d9" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column ml-5">
            <p className="desc font-weight-bold">IKUTI KAMI</p>
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center">
                <img src="https://asset.hamdhany12.repl.co/assets/facec.png" width="20" height="20" alt="" />
                <span className="desc ml-3">Facebook</span>
              </div>
              <div className="d-flex align-items-center pt-2">
                <img src="https://asset.hamdhany12.repl.co/assets/facec.png" width="20" height="20" alt="" />
                <span className="desc ml-3">Facebook</span>
              </div>
              <div className="d-flex align-items-center pt-2">
                <img src="https://asset.hamdhany12.repl.co/assets/facec.png" width="20" height="20" alt="" />
                <span className="desc ml-3">Facebook</span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column pb-5">
            <p className="desc font-weight-bold">DOWNLOAD APLIKASI SHOFOOD</p>
            <div className="d-flex align-items-center">
              <img src="https://asset.hamdhany12.repl.co/assets/barcode.png" alt="" />
              <div className="d-flex flex-column">
                <img src="https://asset.hamdhany12.repl.co/assets/goggle.png" alt="" />
                <img src="https://asset.hamdhany12.repl.co/assets/app.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr className="" />

        <div className="d-flex justify-content-between ">
          <span> &copy; Shofood 2022. Hak Cipta Dilindungi </span>
          <span>Negara: Singapura | Indonesia | Taiwan | Thailand | Malaysia | Vietnam | Filipina |</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

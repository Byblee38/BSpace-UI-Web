aku ingin mengimplementasikan beberapa perubahan, namun dengan catatan
1. Tidak ada perubahan ke sistem atau flow aplikasi, pure FE
2. Untuk fitur yang dihapus, itu di hide saja, tidak usah full hapus sampai ke flow jalannya aplikasi
3. Untuk perubahan nama juga, di FE nya aja, kalo ada nama yang ingin aku rubah, namun dia nyangkut nya disistem atau environment, itu gausah di ganti aja

Fitur yang dihapus/hide :
1. Ubah bahasa, aku default ke inggris saja
2. Halaman `About` dan `Documentation` -> yang Documentation sepertinya berupa url, bisa kamu lihat di sidebar

Bentuk perubahan :

---

## 1. Spesifikasi Palet Warna (Obsidian Slate / Linear Dark)

Kombinasi warna dirancang minimalis, elegan, dan *subtle* (tidak norak/terlalu *colorful*) dengan berfokus pada kontras warna gelap netral serta satu warna aksen dingin.

| Elemen UI | Nilai Hex / Kode Warna | Deskripsi / Fungsi |
| :--- | :--- | :--- |
| **Main Background** | `#0B0F17` | Latar belakang utama halaman (Charcoal kebiruan, nyaman di mata). |
| **Surface / Container** | `#161B26` | Warna latar belakang kartu (*card*), modal, dan panel *sidebar*. |
| **Border / Divider** | `#262F40` | Garis tepi tipis untuk pemisah antar elemen (`1px solid`). |
| **Primary Text** | `#E2E8F0` | Teks utama / judul (Slate putih netral dengan kontras tinggi). |
| **Secondary Text** | `#94A3B8` | Teks pendukung / deskripsi / *timestamp*. |
| **Accent / Highlight** | `#38BDF8` *(Sky Blue)* | Warna tombol utama, *link*, indikator aktif, dan status penting. |
| **Hover State** | `#1E2638` | Warna latar belakang saat elemen item/baris berkas di-*hover*. |

---

## 2. Arah & Benchmark UI (Referensi: Linear.app)

Pengembangan antarmuka mengacu pada gaya desain **Linear.app** yang *clean*, presisi, dan modern:

* **Sleek & Flat Layout**: Mengurangi penggunaan *gradient* mencolok dan *shadow* tebal. Pemisahan hirarki komponen diutamakan menggunakan *border* tipis (`1px`).
* **Micro-interactions**: Efek transisi *hover* yang sangat cepat dan halus (`transition: all 0.15s ease`).
* **Frosted Glass / Glassmorphism**: Penggunaan latar belakang semi-transparan dengan efek *backdrop blur* pada bagian *header* atau *floating navigation bar*.
* **Typography & Hierarchy**: Font yang tajam dan bersih dengan *letter-spacing* yang sedikit lebih renggang untuk keterbacaan tinggi.

---

## 3. Gaya Elemen & Rounded Corners

Tampilan dibuat lebih ramah dan modern dengan sudut yang melengkung halus (*rounded*), namun tetap presisi dan tidak terlalu membulat berlebihan:

* **Container & Cards**: `border-radius: 12px` hingga `16px` (memberikan kesan modern dan tidak kaku).
* **Buttons & Input Fields**: `border-radius: 8px` hingga `10px` (pas dengan ukuran jari/kursor).
* **Badges & Modals**: `border-radius: 12px` dengan opsi *full-rounded* (`9999px`) untuk *tag/status badge* kecil.
* **Spacing**: Penambahan *padding* dan *margin* yang lebih lega agar antarmuka tidak terasa sesak (*cluttered*).

---


Tambahan note :
1. pada halaman utama ada Powered by AList | Manage -> Yang powered nya hapus/hide, yang `Manage nya ganti ke button saja, tempatkan di yang bagus secara UX`
2. Nama project ganti ke BSpace aja
3. Untuk logo aku ingin ganti, (ini nnti saja)

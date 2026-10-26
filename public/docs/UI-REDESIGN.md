# BSpace UI Redesign — Vercel, tegas

Acuan visual untuk redesign frontend. **Tidak mengubah flow, API, atau permission.** Fitur yang tidak dipakai di-hide, bukan dihapus.

Referensi: [Vercel Dashboard](https://vercel.com/dashboard) — geometris, kontras tinggi, sudut kecil, tanpa glassmorphism.

---

## Prinsip

1. **Tegas** — garis 1px, radius kecil, tidak ada blur/shadow tebal, tidak ada scale hover.
2. **Monokrom** — hitam, abu, putih. Biru hanya untuk focus ring.
3. **Padat** — spacing ketat, hierarki lewat kontras teks, bukan dekorasi.
4. **Satu permukaan** — background hitam penuh; kartu hanya dibatasi border.
5. **FE only** — nama `BSpace` hanya di UI; env/backend tidak diubah.

---

## Token

| Token         | Nilai     | Pakai                            |
| :------------ | :-------- | :------------------------------- |
| Background    | `#000000` | halaman                          |
| Elevated      | `#0A0A0A` | header, sidebar, modal           |
| Surface       | `#111111` | input, menu, baris hover         |
| Hover         | `#1A1A1A` | row / item hover                 |
| Border        | `#1F1F1F` | pemisah default                  |
| Border strong | `#333333` | input, tombol outline            |
| Text          | `#EDEDED` | judul, nama file                 |
| Muted         | `#A1A1A1` | meta, ukuran, tanggal            |
| Faint         | `#666666` | placeholder, disabled            |
| Accent        | `#FAFAFA` | CTA solid (bg putih, teks hitam) |
| Focus         | `#0070F3` | ring 1px, jangan jadi brand      |
| Danger        | `#E5484D` | hapus / error                    |
| Radius        | `6px`     | tombol, input, modal             |
| Radius sm     | `4px`     | badge, kbd                       |
| Radius none   | `0`       | chrome (header, sidebar, list)   |
| Font          | `Inter`   | 13px body, 500 weight tombol     |
| Transisi      | `120ms`   | color / bg / border saja         |

---

## Komponen

**Header** — tinggi 56px, bg `#000`, border-bottom 1px. Logo teks `BSpace`. CTA Manage/Login: solid putih.

**List berkas** — tabel: header uppercase 11px muted, baris `border-bottom`, hover `#111`, tanpa rounded dan tanpa scale.

**Sidebar manage** — 224px, border-right, item aktif: bg `#111` + teks `#EDEDED`. Tanpa glow.

**Tombol** — solid: bg `#FAFAFA` / teks `#000`. Outline: border `#333` / teks `#EDEDED`. Height 32–36px.

**Input** — bg `#111`, border `#333`, focus ring biru 1px. Radius 6px.

**Modal / menu** — bg `#0A0A0A`, border `#1F1F1F`, radius 6px, shadow minimal.

**Login** — fullscreen hitam, kartu bordered, tanpa ilustrasi/gradient. Primary = putih.

---

## Constraint produk (tetap)

- Hide: switch bahasa (default `en`), About, Documentation, Powered by AList, switch color mode.
- Manage jadi tombol di header.
- Nama UI: **BSpace**. Logo aset menyusul.
- Fitur di-hide, flow tetap.

---

## ToDo implementasi

- [x] Dokumen acuan ini
- [ ] Token + Hope UI theme + scrollbar + font Inter
- [ ] Home: header, nav, list/grid, toolbar, sidebar
- [ ] Login + password gate
- [ ] Manage shell (header, sidemenu, content)
- [ ] Branding BSpace + force English
- [ ] Verifikasi browser

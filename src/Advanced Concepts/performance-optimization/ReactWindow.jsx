import { useNavigate } from "react-router-dom";
import { FixedSizeList as List } from "react-window";
import screenshot from '../../assets/react-window.png'
import screenshot1 from '../../assets/react-window1.png'

const names = Array.from({ length: 3000 }, (_, i) => `Nama ${i + 1}`);

export default function ReactWindow() {
const navigate = useNavigate();


  return (
    <div>
            <div className="*:mx-4 my-6 *:my-3">
                <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
            </div>

            <img src={screenshot1} alt="" />
            <img src={screenshot} alt="" />

      <h1>Daftar Nama</h1>
      <List
        height={400} // Tinggi area yang terlihat (viewport)
        itemCount={names.length} // Jumlah total item
        itemSize={35} // Tinggi setiap item (dalam piksel)
        width={300} // Lebar daftar
      >
        {({ index, style }) => (
          <div style={style}> {/* Style untuk posisi item */}
            {names[index]}
          </div>
        )}
      </List>
    </div>
  );
}

// // react-window
// Memuat hanya elemen yang terlihat di viewport untuk menghemat sumber daya.

// react-window adalah library React yang digunakan untuk mengoptimalkan rendering
// daftar panjang (long lists) dengan cara "memvirtualisasi" daftar tersebut. 
// Artinya, hanya item-item yang terlihat di layar (viewport) yang akan di-render, 
// sementara item lainnya tetap berada di luar DOM hingga diperlukan.

// Ini membantu menghemat memori dan meningkatkan performa aplikasi, terutama ketika 
// kamu bekerja dengan ribuan atau jutaan data.
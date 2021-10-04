var dataBarang = ['Telur', 'Susu', 'Biskuit'];

function showBarang() {
  var listBarang = document.getElementById('list-barang');
  // clear list barang
  listBarang.innerHTML = '';

  // cetak semua barang
  for (let i = 0; i < dataBarang.length; i++) {
    var btnEdit = "<a href='#' onclick='editBarang(" + i + ")'>Edit</a>";
    var btnHapus = "<a href='#' onclick='deleteBarang(" + i + ")'>Hapus</a>";

    listBarang.innerHTML += '<li>' + dataBarang[i] + ' [' + btnEdit + ' | ' + btnHapus + ']</li>';
  }
}

function addBarang() {
  var input = document.querySelector('input[name=barang]');
  if (input.value == '') {
    alert('Silahkan Input Nama Barang');
    input.focus();
    return false;
  } else if (input.value != listBarang.value) {
    alert(' Barang Sudah Ada Dalam List');
    input.value = '';
    input.focus();
    return false;
  } else {
    dataBarang.push(input.value);
  }
  showBarang();
  input.value = '';
  input.focus();
  return false;
}

function editBarang(id) {
  var newBarang = prompt('Nama baru', dataBarang[id]);
  dataBarang[id] = newBarang;
  showBarang();
}

function deleteBarang(id) {
  dataBarang.splice(id, 1);
  showBarang();
}

showBarang();

let trueacc = "admin";
let truepassword = "12345";
let acc, password;
let lock = false;
let count = 0, time;
let library = ["Toán", "Văn", "Anh"];
let input, books, newName, editbook, findbook;

while (count < 3) {
    acc = prompt("Mời bạn nhập tài khoản");
    password = prompt("Mời bạn nhập mật khẩu");

    if (truepassword === password && trueacc === acc) {
        alert("Đăng nhập thành công!");
        lock = true;
        break;
    }

    count++;
    time = 3 - count;

    if (truepassword !== password && trueacc !== acc) {
        alert(`Sai cả tài khoản và mật khẩu bạn còn ${time} lần thử`);
    } else if (truepassword === password && trueacc !== acc) {
        alert(`Sai tài khoản! bạn còn ${time} lần thử`);
    } else if (truepassword !== password && trueacc === acc) {
        alert(`Sai mật khẩu! bạn còn ${time} lần thử`);
    }
}

if (!lock) {
    alert("Hệ thống bị khóa");
} else {
    let choice;
    do {
        choice = +prompt(`
===== HỆ THỐNG QUẢN LÝ THƯ VIỆN 4.0 =====
1. Nhập thêm lô sách mới
2. Hiển thị danh sách sách
3. Tìm kiếm sách theo tên
4. Cập nhật tên sách
5. Đảo ngược danh sách sách
6. Nhập sách từ nguồn kho khác
7. Thoát
`);

        switch (choice) {
            case 1:
                let addcount = 0;
                input = prompt("Nhập danh sách tên sách (cách nhau bởi dấu phẩy)");
                books = input.split(",");
                for (let book of books) {
                    let name = book.trim();
                    if (name !== "") {
                        library.push(name);
                        addcount++;
                    }
                }
                alert(`Đã thêm ${addcount} cuốn sách`);
                break;

            case 2:
                if (library.length === 0) {
                    console.log("Danh sách sách trống");
                } else {
                    console.log(`---Danh sách hiện có---`)
                    for (let i = 0; i < library.length; i++) {
                        console.log(`${i + 1}. ${library[i]}`);
                    }
                }
                break;

            case 3:
                do {
                    findbook = prompt("Nhập tên sách cần tìm").trim();
                } while (findbook === "");

                let findIndex = library.findIndex(
                    book => book.toLowerCase() === findbook.toLowerCase()
                );

                if (findIndex === -1) {
                    alert(`Không tìm thấy sách '${findbook}'`);
                } else {
                    alert(`Tìm thấy sách ở vị trí ${findIndex + 1}`);
                }
                break;

            case 4:
                do {
                    editbook = prompt("Nhập tên sách cần sửa").trim();
                } while (editbook === "");

                let editIndex = library.findIndex(
                    book => book.toLowerCase() === editbook.toLowerCase()
                );

                if (editIndex === -1) {
                    alert("Không tìm thấy sách");
                } else {
                    do {
                        newName = prompt("Nhập tên sách mới").trim();
                    } while (newName === "");

                    library[editIndex] = newName;
                    alert("Đã cập nhật sách");
                }
                break;

            case 5:
                library.reverse();
                for(let index in library){
                     console.log(`${index}:${library[index]}`);
                }
                alert("Đã đảo ngược danh sách sách");
                break;
        
            case 6:
                let newlibrary=[`Sách Kỹ Năng`,`Truyện Tranh`];
                
                library=library.concat(newlibrary);
              
                alert(`Đã gộp kho sách thành công`);
                break;
            case 7:
                alert(`Hẹn gặp lại!`);  
            }
    } while (choice !== 7);
}

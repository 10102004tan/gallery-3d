const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000; // Chọn cổng bạn muốn

// cấu hình cors cho phép http://127.0.0.1:5500/index.html được truy cập
// Cấu hình CORS cho phép các nguồn gốc cụ thể
const allowedOrigins = [
    'http://127.0.0.1:5500', // Cho phép chính xác nguồn gốc này
    'http://127.0.0.1:5500/*' // Cho phép tất cả các đường dẫn con của nguồn gốc này
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      // Kiểm tra xem nguồn gốc có nằm trong danh sách được phép không
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));

const imageSrcArray = [
    'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/ceaea2af112e10984e5c211125caa429~c5_720x720.jpeg?lk3s=a5d48078&nonce=92009&refresh_token=38973b57d09e753fd93daea17b0f6b01&x-expires=1716876000&x-signature=GjS1nQIOp%2BtcuYOz8nm05UQh6VU%3D&shp=a5d48078&shcp=b59d6b55',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVJ2Gi_T8oseZmPPAi0EyS6tbxyS3LyJXg7gArsyIKg&s',
    'https://static.wikia.nocookie.net/happytreefanon/images/4/49/Neko-chan.PNG/revision/latest?cb=20131107013713',
    'https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif',
    'https://www.womansworld.com/wp-content/uploads/2024/08/cute-cats.jpg?w=953',
    'https://marketplace.canva.com/EAFbDBRADCw/1/0/1600w/canva-meme-cat-heart-cute-shy-embarrassed-CVBohzyf-nk.jpg',
    'https://t3.ftcdn.net/jpg/05/67/53/88/360_F_567538837_sJqS6Kpt2xmj5GNAyfjcV5BgdsoTpYCs.jpg',
    'https://i.ebayimg.com/images/g/KL8AAOSwV4ZjruEo/s-l1200.webp',
    'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
    'https://ih1.redbubble.net/image.4789831581.5724/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
    'https://steamuserimages-a.akamaihd.net/ugc/1667980019599930485/F57B5D6531681D2C2CB8090EBA30F734F1412017/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    'https://i.chzbgr.com/full/9578395904/h8D57C6EF/isnt-it-cute',
    'https://i.ytimg.com/vi/Q6Nsvrnnug8/maxresdefault.jpg',
    'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/ceaea2af112e10984e5c211125caa429~c5_720x720.jpeg?lk3s=a5d48078&nonce=92009&refresh_token=38973b57d09e753fd93daea17b0f6b01&x-expires=1716876000&x-signature=GjS1nQIOp%2BtcuYOz8nm05UQh6VU%3D&shp=a5d48078&shcp=b59d6b55',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVJ2Gi_T8oseZmPPAi0EyS6tbxyS3LyJXg7gArsyIKg&s',
    'https://static.wikia.nocookie.net/happytreefanon/images/4/49/Neko-chan.PNG/revision/latest?cb=20131107013713',
    'https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif',
    'https://www.womansworld.com/wp-content/uploads/2024/08/cute-cats.jpg?w=953',
    'https://marketplace.canva.com/EAFbDBRADCw/1/0/1600w/canva-meme-cat-heart-cute-shy-embarrassed-CVBohzyf-nk.jpg',
    'https://t3.ftcdn.net/jpg/05/67/53/88/360_F_567538837_sJqS6Kpt2xmj5GNAyfjcV5BgdsoTpYCs.jpg',
    'https://i.ebayimg.com/images/g/KL8AAOSwV4ZjruEo/s-l1200.webp',
    'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
    'https://ih1.redbubble.net/image.4789831581.5724/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
    'https://steamuserimages-a.akamaihd.net/ugc/1667980019599930485/F57B5D6531681D2C2CB8090EBA30F734F1412017/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    'https://i.chzbgr.com/full/9578395904/h8D57C6EF/isnt-it-cute',
    'https://i.ytimg.com/vi/Q6Nsvrnnug8/maxresdefault.jpg',
    'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/ceaea2af112e10984e5c211125caa429~c5_720x720.jpeg?lk3s=a5d48078&nonce=92009&refresh_token=38973b57d09e753fd93daea17b0f6b01&x-expires=1716876000&x-signature=GjS1nQIOp%2BtcuYOz8nm05UQh6VU%3D&shp=a5d48078&shcp=b59d6b55',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVJ2Gi_T8oseZmPPAi0EyS6tbxyS3LyJXg7gArsyIKg&s',
    'https://static.wikia.nocookie.net/happytreefanon/images/4/49/Neko-chan.PNG/revision/latest?cb=20131107013713',
    'https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif',
    'https://www.womansworld.com/wp-content/uploads/2024/08/cute-cats.jpg?w=953',
    'https://marketplace.canva.com/EAFbDBRADCw/1/0/1600w/canva-meme-cat-heart-cute-shy-embarrassed-CVBohzyf-nk.jpg',
    'https://t3.ftcdn.net/jpg/05/67/53/88/360_F_567538837_sJqS6Kpt2xmj5GNAyfjcV5BgdsoTpYCs.jpg',
    'https://i.ebayimg.com/images/g/KL8AAOSwV4ZjruEo/s-l1200.webp',
    'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
    'https://ih1.redbubble.net/image.4789831581.5724/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
    'https://steamuserimages-a.akamaihd.net/ugc/1667980019599930485/F57B5D6531681D2C2CB8090EBA30F734F1412017/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    'https://i.chzbgr.com/full/9578395904/h8D57C6EF/isnt-it-cute',
    'https://i.ytimg.com/vi/Q6Nsvrnnug8/maxresdefault.jpg',
    // ... thêm các đường dẫn khác
  ];

// API GET trả về mảng imageSrcArray
app.get('/api/images', (req, res) => {
    res.json(imageSrcArray);
  });

app.get('/', (req, res) => {
  res.send('Xin chào từ máy chủ cục bộ!');
});

app.listen(port, () => {
  console.log(`Máy chủ đang chạy tại http://localhost:${port}`);
});

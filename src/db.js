import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log('✅ Connected to DB');
const handleError = (error) => console.log('❌ DB Error', error);

db.on('error', handleError);
db.once('open', handleOpen);
/**
 * YOUTUBE API 받아오는 코드
 *
 * 참조 : https://developers.google.com/youtube/iframe_api_reference?hl=ko
 *
 * IFRAME 관련 글
 * https://jdh5202.tistory.com/450
 *
 *
 *  YOUTUBE API 활용해서 인기 곡 가지고 오는 블로그
 * https://han-py.tistory.com/432
 *
 *
 * YOUTUBE oauth 2.0
 * https://42kim.github.io/TIL/oauth/
 *
 */

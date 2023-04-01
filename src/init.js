import 'regenerator-runtime';
import 'dotenv/config';
import '../src/db';
import app from '../src/server';

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

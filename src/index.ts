import app from './app'

app.listen(
  Number(process.env.SERVER_PORT),
  () => {
    console.log(`\n 🚀  Server on port ${process.env.SERVER_PORT}`);
  }
);

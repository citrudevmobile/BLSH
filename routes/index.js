export default (app, handle) => {
  app.get('*', (req, res) => { return res.sendFile('../dist/index.html', { root: __dirname }) })
}

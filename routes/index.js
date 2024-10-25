import { join } from 'path'

export default (app, handle) => {
  app.get('*', (req, res) => { return res.sendFile(join(`${__basedir}/dist/index.html`)) })
}

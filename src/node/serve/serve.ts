import fs from 'fs'
import path from 'path'
import compression from 'compression'
import polka, { type IOptions } from 'polka'
import sirv, { type RequestHandler } from 'sirv'
import { resolveConfig } from '../config'

function trimChar(str: string, char: string) {
  while (str.charAt(0) === char) {
    str = str.substring(1)
  }

  while (str.charAt(str.length - 1) === char) {
    str = str.substring(0, str.length - 1)
  }

  return str
}

export interface ServeOptions {
  base?: string
  root?: string
  port?: number
}

export async function serve(options: ServeOptions = {}) {
  const port = options.port !== undefined ? options.port : 4173
  const site = await resolveConfig(options.root, 'serve', 'production')
  const base = trimChar(options?.base ?? site?.site?.base ?? '', '/')

  const notAnAsset = (pathname: string) => !pathname.includes('/assets/')
  const notFound = fs.readFileSync(path.resolve(site.outDir, './404.html'))
  const onNoMatch: IOptions['onNoMatch'] = (req, res) => {
    res.statusCode = 404
    if (notAnAsset(req.path)) res.write(notFound.toString())
    res.end()
  }

  const compress = compression() as RequestHandler
  const serve = sirv(site.outDir, {
    etag: true,
    maxAge: 31536000,
    immutable: true,
    setHeaders(res, pathname) {
      if (notAnAsset(pathname)) {
        // force server validation for non-asset files since they
        // are not fingerprinted
        res.setHeader('cache-control', 'no-cache')
      }
    }
  })

  if (base) {
    return polka({ onNoMatch })
      .use(base, compress, serve)
      .listen(port, () => {
        console.log(`Built site served at http://localhost:${port}/${base}/\n`)
      })
  } else {
    return polka({ onNoMatch })
      .use(compress, serve)
      .listen(port, () => {
        console.log(`Built site served at http://localhost:${port}/\n`)
      })
  }
}

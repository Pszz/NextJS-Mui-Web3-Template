export const setPageCache = (req: any, res: any) => {
  if (req.method === 'GET') {
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=120')
    return
  }
  res.statusCode = 405
  res.end()
}

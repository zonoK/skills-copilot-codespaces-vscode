// Create web server
// Run server
// Access server

// 1. Import module
const http = require('http')

// 2. Create web server
const server = http.createServer((req, res) => {
  // 3. Set HTTP header
  res.writeHead(200, { 'Content-Type': 'text/html' })
  // 4. Set response content
  res.write('<html><body><p>This is home Page.</p></body></html>')
  // 5. End response
  res.end()
})

// 6. Run server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
// 7. Access server
// http://localhost:3000
// Output: This is home Page.
// Define the Boxever queue
var _boxeverq = _boxeverq || []

// Define the Boxever settings
const _boxever_settings = {
  client_key: 'psfu6uh05hsr9c34rptlr06dn864cqrx', // Replace with your client key
  target: 'https://api-us.boxever.com/v1.2', // Replace with your API target endpoint specific to your data center region
  cookie_domain: 'https://ecstatic-williams-d39ae0.netlify.app/' // Replace with the top level cookie domain of the website that is being integrated e.g ".example.com" and not "www.example.com"
};

// Import the Boxever library asynchronously
(function() {
  const s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = 'https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.8.min.js'
  const x = document.getElementsByTagName('script')[0]
  x.parentNode.insertBefore(s, x)
})();


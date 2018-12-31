// THE CODE BELOW IS FOR PUBLISH AS A STATIC PAGE
// module.exports = {
//   exportPathMap: function() {
//     return {
//       "/": { page: "/" }
//     };
//   }
// };

const withCSS = require("@zeit/next-css");
module.exports = withCSS();

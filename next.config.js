// const withPWA = require('next-pwa');

// module.exports = withPWA({
//   pwa: {
//     dest: 'pwa-config',
//   },
// });
module.exports = {
    async redirects() {
        return [
            {
                source: '/swap',
                destination: '/',
                permanent: false
            }
        ]
    }
}
// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'hfmhxgdkrwlylqegccni.supabase.co', // Supabase storage domain
          port: '', // Leave this empty unless a specific port is used
          pathname: '/storage/v1/object/public/product-image/**', // Adjust the path pattern as needed
        },
      ],
    },
  };
  
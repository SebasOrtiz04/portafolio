/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images:{
    formats:['image/avif','image/webp'],
    // domains:['aca el dominio de la api']
  },
  // env: {
  //   NEXT_URL_BASE_API: 'http://127.0.0.1:8000/api/',
  // },
};

export default nextConfig

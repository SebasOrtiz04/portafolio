/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images:{
    formats:['image/avif','image/webp'],
    // domains:['aca el dominio de la api']
  },
  env: {
    NEXT_URL_BASE_API: 'https://raspy-dogs-production.up.railway.app/api/',
  },
};

export default nextConfig

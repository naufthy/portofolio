// File: /api/instagram.js (Contoh untuk Vercel/Netlify)

export default async function handler(req, res) {
  // Ambil token dari environment variables yang aman di server
  const token = process.env.INSTAGRAM_API_TOKEN;
  // Ambil User ID Instagram Anda (ini juga bisa disimpan sebagai env variable)
  const userId = 'YOUR_INSTAGRAM_USER_ID'; 
  
  // URL API Instagram untuk mengambil media terbaru
  const url = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink&access_token=${token}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.statusText}`);
    }
    const data = await response.json();
    
    // Kirim kembali data yang sudah diformat ke frontend
    res.status(200).json(data.data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Instagram data' });
  }
}
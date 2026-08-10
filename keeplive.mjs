export default async (req) => {
  const targetUrl = 'https://backendcomautenticacao.onrender.com/api/ping';

  try {
    const response = await fetch(targetUrl);
    const data = await response.text();
    
    console.log(`[${new Date().toISOString()}] Ping enviado! Status: ${response.status} - Resposta: ${data}`);
    
    return new Response(`Ping enviado: ${data}`, { status: 200 });
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Erro no ping:`, error.message);
    
    return new Response(`Erro: ${error.message}`, { status: 500 });
  }
};

export async function GET() {
  return Response.json({
    ok: true,
    service: 'get3step',
    status: 'healthy'
  });
}

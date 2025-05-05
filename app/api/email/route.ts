import { RESEND_API_KEY } from '@/app/lib/env/env';
import Email from '@/emails';
import { Resend } from 'resend';

const resend = new Resend(RESEND_API_KEY);

export async function POST(req: Request): Promise<Response> {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'E-mail é obrigatório' }), {
        status: 400,
      });
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Hello world',
      react: Email(),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import {
  TransactionalEmailsApi,
  TransactionalEmailsApiApiKeys,
  SendSmtpEmail,
} from '@getbrevo/brevo';

export async function POST(req: Request) {
  const body = await req.json();
  const { nom, email, phone, message } = body;

  const apiInstance = new TransactionalEmailsApi();
  apiInstance.setApiKey(
    TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY!
  );

  const emailData = new SendSmtpEmail();
  emailData.sender = { name: 'Benoît Vasse', email: 'benoit@vassecommunicant.com' };
  emailData.to = [{ email: 'benoitvasse@yahoo.fr', name: 'Benoît Vasse' }];
  emailData.replyTo = { email, name: nom };
  emailData.subject = 'Nouveau message depuis le formulaire de contact';
  emailData.htmlContent = `<p><strong>Nom :</strong> ${nom}</p><p><strong>Email :</strong> ${email}</p><p><strong>Téléphone :</strong> ${phone}</p><p><strong>Message :</strong><br/>${message}</p>`;

  try {
    const result = await apiInstance.sendTransacEmail(emailData);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Erreur envoi mail:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
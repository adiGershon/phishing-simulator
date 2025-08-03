import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Attempts } from '../schemas/attempts.schema';
import { SendEmailResponse, RegisterClickResponse } from '../types/response.types';

@Injectable()
export class PhishingSimulationService {
  constructor(
    @InjectModel(Attempts.name)
    private readonly phishingAttemptModel: Model<Attempts>
  ) {}

  async sendPhishingEmail(email: string): Promise<SendEmailResponse> {
    const attempt = await this.phishingAttemptModel.create({ email, status: 'sent' });
    const phishingUrl = `http://localhost:3001/phishing/clicked/${attempt._id}`;

    // Create test account and transporter
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });

    const info = await transporter.sendMail({
      from: '"Phishing Sim" <no-reply@phish.com>',
      to: email,
      subject: 'Security Notification',
      html: `<p>This is a simulated phishing test. Click <a href="${phishingUrl}">here</a> to confirm access.</p>`
    });

    console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));

    return { success: true, attemptId: attempt._id.toString() };
  }

  async markEmailAsClicked(id: string): Promise<RegisterClickResponse> {
    await this.phishingAttemptModel.findByIdAndUpdate(id, { status: 'clicked' });
    return { success: true };
  }
}
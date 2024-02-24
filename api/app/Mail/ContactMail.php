<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;


    public $fullName;
    public $email;
    public $phone;
    public $contactMessage;
    public $date;

    /**
     * Create a new contactMessage instance.
     */
    public function __construct($fullName,$email,$phone,$contactMessage,$date)
    {
        $this->fullName = $fullName;
        $this->email = $email;
        $this->phone = $phone;
        $this->contactMessage = $contactMessage;
        $this->date = $date;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Gracias por contactarnos',
            bcc:['dako_sebas@hotmail.com']
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mails.contactMail',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}

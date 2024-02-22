<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactMailRequest;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailerController extends Controller
{
    public function sendContactMail(ContactMailRequest $request){

        try{

        $email = $request->input('email');
        // Crea una nueva instancia de la clase de correo electrónico y pasa los datos
        $correo = new ContactMail(
            $request->input('full_name'),
            $request->input('email'),
            $request->input('phone'),
            $request->input('contact_message'),
            $request->input('date')
        );

        // Envía el correo electrónico
        Mail::to($email)->send($correo);
            return response()->json('correo enviado correctamente',200);

        }catch(\Exception $e){
            return response()->json($e->getMessage(),500);
        }
        
    }
}

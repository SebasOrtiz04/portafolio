<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Concato Orca Eventos sociales</title>
    <style>
        /* Reset de márgenes y padding para mayor compatibilidad */
        body, h1, h2, p,h4,h5, ul, li {
            margin: 0;
            padding: 0;
        }

        body {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            font-family: 'Nunito', sans-serif;
        }
        header, footer{
            width:100%;
            height: 50px;
            background-color: #000000;
            color:rgba(255,255,255,.8);
            display:flex;
            align-items: center;
            justify-content: space-evenly;
        }

        header{
            height: fit-content;
            flex-direction: column;
        }

        main{
            width: 100%;
            margin: 2rem 0;
        }

        h1 {
            text-align: left;
            margin: 0 0 1rem 0;
            font-size: 1.7rem;
            width: 80%;
        }

        h2{
            font-size: 1.3rem;
            margin: 1rem 3rem 0.2rem 3rem;
            width: 80%;

        }

        h4,h5{
            width: 80%;
            text-align: left;
        }

        h4{
            font-size: 1.2rem;
            margin: 1rem 0;
        }

        p{
            padding: 0;
            margin: .2rem 0;
            font-size: 0.9rem;
        }

        strong{
            font-size: 1rem;
            font-weight: bold;
            color:rgb(80 ,80 ,80 )
        }
        a{
            text-decoration: none;
            color:rgba(255,255,255,.8);
        }

        img {
            width:100px;
            height: auto;
            display: block;
            margin-top: 1rem;
        }

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            width: 80%;
        }

        li {
            margin: 0.2rem 0;
            display: flex;
            flex-direction: column;
        }

        iframe{
            margin: 1rem 0;
        }

        .image__container{
            width: 80%;
            margin: 0.5rem 0;
        }

    </style>
</head>

<body >
    <header >
    <div class="image__container">
        <img src="https://onedrive.live.com/embed?resid=BD1FF916B6BD6689%21219&authkey=%21AGLIqVXygQv1MQY&width=131&height=71" width="131" height="71" />
    </div>
        <h2>Hola {{$full_name}}!</h2>
    
        <h1>
            Confirmación de contacto. 
        </h1>
    </header>

    <main>
        <h4>Hemos recibido tu mensaje con la siguiente información:</h4>
        <ul>
            <li>
                <strong>{{$full_name}}</strong>
                <p>Nombre Completo.</p>
            </li>
            <li>
                <strong>{{$email}}</strong>
                <p>Email.</p>
            </li>
            <li>
                <strong>{{$phone}}</strong>
                <p>Número telefónico.</p>
            </li>
            <li>
                <strong>{{$date}}</strong>
                <p>Fecha de interes.</p>
            </li>
            <li>
                <strong>{{$contact_message}}</strong>
                <p>Mensaje.</p>
            </li>
        </ul>
        <h4>Nos pondremos en contacto contigo lo antes posible.</h4>

        <h5>Tel: +52 22 26 62 27 78</h5>
        <h5>Email: sebastianortizcastro04@gmail.com</h5>
    </main>
    <footer>
        <p>
        Todos los derechos reservados. 
        </p>
        <p>Orca Eventos Sociales &copy;</p>
        
    </footer>
</body>
</html>
<?php
if (isset($_POST['text'])) {
  /*
      // EDIT THE 2 LINES BELOW AS REQUIRED
      $email_to = "info@ekselence.com";
      $email_subject = "Correo contacto de la web theraj.cl.";

      function died($error) {
          // your error code can go here
          echo "Lo sentimos mucho, pero se encontraron errores con el formulario que enviaste.";
          echo "Estos errores aparecen a continuación.<br /><br />";
          echo $error."<br /><br />";
          echo "Por favor, vuelve y corrige estos errores.<br /><br />";
          die();
      }


      // validation expected data exists
      if(!isset($_POST['input-name']) ||
          !isset($_POST['input-email']) ||
          !isset($_POST['input-comment'])) {
          died('Lo sentimos, pero parece que hay un problema con el formulario que ha enviado.');
      }



      $name = $_POST['input-name']; // required
      $email_from = $_POST['input-email']; // required
      $comments = $_POST['input-comment']; // required

      $error_message = "";
      $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

      if(!preg_match($email_exp,$email_from)) {
          $error_message .= 'La dirección de correo electrónico que ingresaste no parece ser válida.<br />';
      }

      $string_exp = "/^[A-Za-z .'-]+$/";

      if(!preg_match($string_exp,$name)) {
          $error_message .= 'El nombre que ingresaste no parece ser válido.<br />';
      }

      if(strlen($comments) < 2) {
          $error_message .= 'Los comentarios que ingresaste no parecen ser válidos.<br />';
      }

      if(strlen($error_message) > 0) {
          died($error_message);
      }

      $email_message = "Formulario de detalles a continuación.\n\n";


      function clean_string($string) {
          $bad = array("content-type","bcc:","to:","cc:","href");
          return str_replace($bad,"",$string);
      }



      $email_message .= "Nombre: ".clean_string($name)."\n";
      $email_message .= "Email: ".clean_string($email_from)."\n";
      $email_message .= "Comments: ".clean_string($comments)."\n";*/

  $email_to = "info@ekselence.com";
  $email_subject = "Correo contacto de la web theraj.cl";

  $email_content = $_POST['text'];
  $email_from = $_POST['from'];

// create email headers
  $headers = 'From: ' . $email_from . "\r\n" .
    'Reply-To: ' . $email_from . "\r\n" .
    'X-Mailer: PHP/' . PHP_VERSION;
  mail($email_to, $email_subject, $email_content, $headers);
  @mail($email_to, $email_subject, $email_content, $headers);

//    header('Location: /coquimbo-contacto/enviado/');

}
?>

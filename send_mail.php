<?php
if(isset($_POST['email'])) {

    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
  
    // validation expected data exists
/*    if( !isset($_POST['name'], $_POST['email'], $_POST['phone']) ){
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }*/

	$page_title = $_POST['page_title']; // required
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $phone = $_POST['phone']; // not required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

	// EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "toalexjesus@gmail.com";
	$email_subject = $page_title;

  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
  $string_exp = "/^[A-Za-z .'-]+$/";
 
/*  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
  }*/

/*  if(strlen($error_message) > 0) {
    died($error_message);
  }*/
 
    $email_message = ".\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "Имя: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Телефон: ".clean_string($phone)."\n";

// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>

	Thank you for contacting us. We will be in touch with you very soon.
 
<?php
}
?>
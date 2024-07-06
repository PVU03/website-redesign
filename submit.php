
<head>
<style type="text/css">
.auto-style1 {
	text-align: center;
}
</style>
</head>

<?php
/* [VERIFY CAPTCHA FIRST] */
$secret = '6Lfhf8oUAAAAAHArIEjOKNcJJr9Je41f4N0uP3z9'; // CHANGE THIS TO YOUR OWN!
$url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=".$_POST['g-recaptcha-response'];
$verify = json_decode(file_get_contents($url));

/* [PROCESS YOUR FORM] */
if ($verify->success) {
  $to = "office@sacredheartcabramatta.org.au"; // CHANGE THIS TO YOUR OWN!
  $subject = "Contact Form";
  $name = $_POST['name'] . "<br>";
  $message .= "Name - " . $_POST['name'] . "<br>";
  $message .= "Email - " . $_POST['email'] . "<br>";
  $message .= "Message - " . $_POST['message'] . "<br>";
  if (@mail($to, $subject, $message)) {
    // Send mail OK
    // @TODO - Show a nice thank you page or something
   echo "Your messages have been sent to us, thank you! " . $name . ". We will contact you shortly.";
} else {
    // Send mail error
    // @TODO - Ask user to retry or give alternative
    echo "Please try again.<br />";
  }
} else {
  // Invalid captcha
  // @TODO - Show error message, ask user to retry
  // echo "Error, make sure you tick the Capcha box!";
  echo "Invalid captcha, please try again.<br />";
}
?>
<p class="auto-style1"><a href="https://www.sacredheartcabramatta.org.au/">Back to Home</a>.</p>

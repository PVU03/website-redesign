<?php
	//create variables to store date posted from the form
	$sacramentselect=$_POST['sacramentselect'];
	$childfullname=$_POST['childfullname'];
	$childdob=$_POST['childdob'];
	$childschool=$_POST['childschool'];
	$grade=$_POST['grade'];
	$year=$_POST['year'];
	$notbaptisedatparish=$_POST['notbaptisedatparish'];
	$baptisedatparish=$_POST['baptisedatparish'];
	$bapparishreceived=$_POST['bapparishreceived'];
	$bapdatereceived=$_POST['bapdatereceived'];
	$recparishreceived=$_POST['recparishreceived'];
	$recdatereceived=$_POST['recdatereceived'];
	$motherfullname=$_POST['motherfullname'];
	$motherreligion=$_POST['motherreligion'];
	$fatherfullname=$_POST['fatherfullname'];
	$fatherreligion=$_POST['fatherreligion'];
	$streetname=$_POST['streetname'];
	$suburb=$_POST['suburb'];
	$postcode=$_POST['postcode'];
	$tel=$_POST['tel'];
	$email=$_POST['email'];
	$preferredsession=$_POST['preferredsession'];
		
	//use the trim function to remove extra spaces
	$streetname= trim($streetname);
		
	//set up variables to store info for the email
	$toaddress = "peter.vu003@gmail.com";
	$subject = "Sacraments Form Submitted";
	$mailcontent = 	"Sacrament Selected: ".$sacramentselect."\n"
					."Child's Full Name: ".$childfullname."\n"
					."Child's DOB: ".$childdob."\n"
					."Child's School: ".$childschool."\n"
					."Grade: ".$grade."\n"
					."Year: ".$year."\n"
					."Baptised at Parish: ".$baptisedatparish."\n"
					."Baptised elsewhere Parish Recieved: ".$bapparishreceived."\n"
					."Bapt. Date Received: ".$bapdatereceived."\n"
					."Rec. Parish Received: ".$recparishreceived."\n"
					."Rec. Date Received: ".$recdatereceived."\n"
					."Mother's Full Name: ".$motherfullname."\n"
					."Mother's religion: ".$motherreligion."\n"
					."Father's Full Name: ".$fatherfullname."\n"
					."Father's Religion: ".$fatherreligion."\n"
					."Residential Street Name and Number: ".$streetname."\n"
					."Suburb: ".$suburb."\n" 
					."Postcode: ".$postcode."\n"
					."Telephone: ".$tel."\n"
					."Email: ".$email."\n"
					."Preferred Session: ".$preferredsession."\n";

	//User nl2br to turn <\n> into <br /> in each case
	$mailcontent = nl2br($mailcontent);

	//invoke mail() function to send mail
	mail($toaddress, $subject, $mailcontent);
	
?>
<html>
	<head>
	<title>Sacramental Form Submitted</title>
	</head>
	<BODY style="color: #000000; background-color: #FFFFFF">
	<body>
	<br />
	<br />
	<h2><font color="#000000">Your form has been submitted</font></h2>
	<p><font color="#000000">Thank you for filling the form.  We will get back to you as soon as we can!</font></p>

	<?php 
		echo "Your form has been sent with the following details: <br />.$mailcontent";
		
		//Use the strlen function to validate the email
		if (strlen($streetname) < 4)
		{
			echo '<br>Not valid street name and number: too few characters. <br />';
		}
	?>
<p>&lt;&lt;&nbsp; <a target="_top" href="https://www.sacredheartcabramatta.org.au/">Back to main page</a></p>

	</body>
</html>

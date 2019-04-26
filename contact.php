<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $mailTo = "Dat_T_Nguyen@live.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received and email from ".$name.".\n\n".$message;
    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}
?>
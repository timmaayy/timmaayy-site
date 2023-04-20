<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if the provided credentials match the predefined values
    if ($username == 'myusername' && $password == 'mypassword') {
        // If the credentials match, create a session and redirect to the home page
        $_SESSION['username'] = $username;
        header('Location: index.html');
        exit();
    } else {
        // If the credentials do not match, show an error message
        $error = 'Invalid username or password.';
    }
}
?>

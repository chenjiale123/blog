<?php
    //    if (!isset($_COOKIE["username"])){
    //     echo json_encode(
    //     array('vaild' => false,'isLogin' =>'您未登陆'),JSON_UNESCAPED_UNICODE
    //     );
    //    exit();
    // }
   include 'conn.php';
   
   if(isset($_GET['id']) AND is_numeric($_GET['id']) AND $_GET['id']!=""){
      $result = mysqli_query($conn,'SELECT  FROM newnew WHERE id='.$_GET['id']);
   }else{
      $result = mysqli_query($conn,'SELECT  id,title,registerTime,content  FROM newnew');
   }
   
   $users = mysqli_fetch_all($result,MYSQLI_ASSOC);

   echo json_encode($users);
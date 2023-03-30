/*CRIE UM ARQUIVO PHP CHAMADO  = lista-users.php e salve na raiz do wordpress */
<?php
include("wp-load.php");

$args = array(
    'role' => 'subscriber',
    'orderby' => 'user_nicename',
    'order' => 'ASC'
);
$users = get_users($args);
foreach ($users as $user) {
    echo "<option value='".$user->id . "'>".$user->nickname ."</option>";
}
?>

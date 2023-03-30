<script>	
	jQuery(document).ready(function(){
		
    jQuery.ajax({
        url: '/lista-users.php',
        type: 'POST',
        data: {},
        success: function(data){
            jQuery('#usuario').html(data);		
       
        }
    });

		
	jQuery(document).on('change', '#usuario', function(e){	
	var id = jQuery("#usuario option").filter(':selected').val();
	var email = jQuery("#usuario option").filter(':selected').attr('data-email');
	var name = jQuery("#usuario option").filter(':selected').attr('data-name');
	jQuery("input[name='email']").val(email);
	jQuery("input[name='nome']").val(name);
});	
		
		
});
</script>

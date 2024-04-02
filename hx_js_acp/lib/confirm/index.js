function hx_cust_confirm_show(who_say,what_to_say,return_val) 
{
  let hx_cust_confirmation_mb,
    hx_cust_confirmation_modal,
    hccm_says,
    hccm_header,
    hccm_button_box,
    hccm_b_b_false,
    hccm_b_b_true;

    hx_cust_confirmation_mb = document.createElement("div");
    hx_cust_confirmation_mb.classList.add('hx_cust_confirmation_mb');

    hx_cust_confirmation_modal = document.createElement("div");
    hx_cust_confirmation_modal.classList.add('hx_cust_confirmation_modal');
    hx_cust_confirmation_mb.appendChild(hx_cust_confirmation_modal);

    // hccm_says = document.createElement("div");
    // hccm_says.classList.add('hccm_says');
    // hccm_says.innerHTML = who_say;
    // hx_cust_confirmation_modal.appendChild(hccm_says);

    hccm_header = document.createElement("div");
    hccm_header.classList.add('hccm_header');
    hccm_header.innerHTML = what_to_say;
    hx_cust_confirmation_modal.appendChild(hccm_header);

    hccm_button_box = document.createElement("div");
    hccm_button_box.classList.add('hccm_button_box');
    hx_cust_confirmation_modal.appendChild(hccm_button_box);

    hccm_b_b_false = document.createElement("div");
    hccm_b_b_false.classList.add('hccm_b_b_false');
    hccm_b_b_false.innerHTML = 'Cancel';
    hccm_button_box.appendChild(hccm_b_b_false);
    hccm_b_b_false.addEventListener('click', hccm_b_b_false_Click);

    hccm_b_b_true = document.createElement("div");
    hccm_b_b_true.classList.add('hccm_b_b_true');
    hccm_b_b_true.innerHTML = 'OK';
    hccm_button_box.appendChild(hccm_b_b_true);
    hccm_b_b_true.addEventListener('click', hccm_b_b_true_Click);

    // removing hx_cust_confirmation_mb
    function hx_cust_confirmation_mb_remove()
    {
      document.body.removeChild(hx_cust_confirmation_mb);
    }

    // Returning Value false
      function hccm_b_b_false_Click() 
      {
        return_val(false);
        hx_cust_confirmation_mb_remove();
      }
    
    // Returning Value true
    function hccm_b_b_true_Click() 
      {
        return_val(true);
        hx_cust_confirmation_mb_remove();
      }



    // Append It to BODY
    document.body.appendChild(hx_cust_confirmation_mb);
}
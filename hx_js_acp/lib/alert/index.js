function hx_cust_alert_show(what_to_say) 
{
  let hx_cust_alert_mb,
    hx_cust_alert_modal,
    // hccm_says,
    hx_alert_header,
    hx_alert_button_box,
    // hccm_b_b_false,
    hx_alert_b_true;

    hx_cust_alert_mb = document.createElement("div");
    hx_cust_alert_mb.classList.add('hx_cust_alert_mb');

    hx_cust_alert_modal = document.createElement("div");
    hx_cust_alert_modal.classList.add('hx_cust_alert_modal');
    hx_cust_alert_mb.appendChild(hx_cust_alert_modal);

    // hccm_says = document.createElement("div");
    // hccm_says.classList.add('hccm_says');
    // hccm_says.innerHTML = who_say;
    // hx_cust_confirmation_modal.appendChild(hccm_says);

    hx_alert_header = document.createElement("div");
    hx_alert_header.classList.add('hx_alert_header');
    hx_alert_header.innerHTML = what_to_say;
    hx_cust_alert_modal.appendChild(hx_alert_header);

    hx_alert_button_box = document.createElement("div");
    hx_alert_button_box.classList.add('hx_alert_button_box');
    hx_cust_alert_modal.appendChild(hx_alert_button_box);

    // hccm_b_b_false = document.createElement("div");
    // hccm_b_b_false.classList.add('hccm_b_b_false');
    // hccm_b_b_false.innerHTML = 'Cancel';
    // hccm_button_box.appendChild(hccm_b_b_false);
    // hccm_b_b_false.addEventListener('click', hccm_b_b_false_Click);

    hx_alert_b_true = document.createElement("div");
    hx_alert_b_true.classList.add('hx_alert_b_true');
    hx_alert_b_true.innerHTML = 'OK';
    hx_alert_button_box.appendChild(hx_alert_b_true);
    hx_alert_b_true.addEventListener('click', hccm_alert_true_Click);

    // removing hx_cust_confirmation_mb
    function hx_cust_alert_mb_remove()
    {
      document.body.removeChild(hx_cust_alert_mb);
    }

    // Returning Value false
      // function hccm_b_b_false_Click() 
      // {
      //  return_val(false);
      //  hx_cust_confirmation_mb_remove();
      // }
    
    // Returning Value true
    function hccm_alert_true_Click() 
      {
        // return_val(true);
        hx_cust_alert_mb_remove();
      }



    // Append It to BODY
    document.body.appendChild(hx_cust_alert_mb);
}
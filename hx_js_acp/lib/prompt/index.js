function hx_cust_prompt_show(header_val,inp1_val,inp2_val,res) 
{
  let hx_cust_prompt_mb,
    hx_cust_prompt_modal,
    hx_cust_prompt_header,
    hx_cust_prompt_inp_bx,
    hx_cust_prompt_inp1,
    hx_cust_prompt_sub_btn;


    hx_cust_prompt_mb = document.createElement("div");
    hx_cust_prompt_mb.classList.add('hx_cust_prompt_mb');

    hx_cust_prompt_modal = document.createElement("div");
    hx_cust_prompt_modal.classList.add('hx_cust_prompt_modal');
    hx_cust_prompt_mb.appendChild(hx_cust_prompt_modal);

    // hccm_says = document.createElement("div");
    // hccm_says.classList.add('hccm_says');
    // hccm_says.innerHTML = who_say;
    // hx_cust_confirmation_modal.appendChild(hccm_says);

    hx_cust_prompt_header = document.createElement("div");
    hx_cust_prompt_header.classList.add('hx_cust_prompt_header');
    hx_cust_prompt_header.innerHTML = header_val;
    hx_cust_prompt_modal.appendChild(hx_cust_prompt_header);

    hx_cust_prompt_inp_bx = document.createElement("div");
    hx_cust_prompt_inp_bx.classList.add('hx_cust_prompt_inp_bx');
    hx_cust_prompt_modal.appendChild(hx_cust_prompt_inp_bx);


    hx_cust_prompt_small_bx = document.createElement("small");
    hx_cust_prompt_small_bx.classList.add('hx_cust_prompt_small_bx');
    hx_cust_prompt_small_bx.innerHTML = 'NickName';
    // hx_cust_prompt_small_bx.style.display = 'arial';
    hx_cust_prompt_inp_bx.appendChild(hx_cust_prompt_small_bx);
    // hccm_b_b_false = document.createElement("div");
    // hccm_b_b_false.classList.add('hccm_b_b_false');
    // hccm_b_b_false.innerHTML = 'Cancel';
    // hccm_button_box.appendChild(hccm_b_b_false);
    // hccm_b_b_false.addEventListener('click', hccm_b_b_false_Click);

    hx_cust_prompt_inp1 = document.createElement("input");
    hx_cust_prompt_inp1.classList.add('hx_cust_prompt_inp1');
    hx_cust_prompt_inp1.placeHolder = 'KYA BE';
    hx_cust_prompt_inp1.value = inp1_val;
    hx_cust_prompt_inp_bx.appendChild(hx_cust_prompt_inp1);


    hx_cust_prompt_small_bx = document.createElement("small");
    hx_cust_prompt_small_bx.classList.add('hx_cust_prompt_small_bx');
    hx_cust_prompt_small_bx.innerHTML = 'UPI/VPA ID';
    hx_cust_prompt_inp_bx.appendChild(hx_cust_prompt_small_bx);

    hx_cust_prompt_inp2 = document.createElement("input");
    hx_cust_prompt_inp2.classList.add('hx_cust_prompt_inp1');
    hx_cust_prompt_inp2.value = inp2_val;
    hx_cust_prompt_inp_bx.appendChild(hx_cust_prompt_inp2);
    // hx_cust_prompt_inp1.addEventListener('click', hccm_alert_true_Click);

    hx_cust_prompt_sub_btn = document.createElement("div");
    hx_cust_prompt_sub_btn.classList.add('hx_cust_prompt_sub_btn');
    hx_cust_prompt_sub_btn.innerHTML = 'OK';
    hx_cust_prompt_inp_bx.appendChild(hx_cust_prompt_sub_btn);
    hx_cust_prompt_sub_btn.addEventListener('click', hx_cust_prompt_sub_btn_click);

    // removing hx_cust_confirmation_mb
    function hx_cust_prompt_mb_remove()
    {
      document.body.removeChild(hx_cust_prompt_mb);
    }

    
    // Returning Value true
    function hx_cust_prompt_sub_btn_click() 
      {
        // ans = `${hx_cust_prompt_inp1.value}|${hx_cust_prompt_inp2.value}`;
        // return ans;
        res(hx_cust_prompt_inp1.value,hx_cust_prompt_inp2.value);
        hx_cust_prompt_mb_remove();
      }



    // Append It to BODY
    document.body.appendChild(hx_cust_prompt_mb);
}
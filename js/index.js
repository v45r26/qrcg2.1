// Declaring primary value
// -- checking Hai ki nahi
const ls_primary_key = 'qrcg_2.1_ls_primary_key';

function check_ls(ser_key) 
{
	var ser = localStorage.getItem(ser_key); 
	if (ser == null) 
	{
    	// console.log('Nahi Hai ! Banana padega');
    	set_pri(ser_key,'qrcg_default');
    }
    else
	{
		// Condition Satisfied If Present
    	// console.log('oo teri ! ye to pahle se hai');
    }
}
// -- Setting/Updating value
function set_pri(pr_k,pr_v)
{
	if (pr_k.length > 0 && pr_v.length > 0) 
	{
		localStorage.setItem(pr_k,pr_v);
	}
	else
	{
		console.log('Empty primary key OR value');
	}

}
function check_ls_for_primary(def_pri,ser_upi_key) 
{
	var ser = localStorage.getItem(def_pri); 
	if (ser == ser_upi_key) 
	{
		return true;
    	// console.log('oo teri ! ye to pahle se hai');
    	// set_pri(ser_key,'qrcg_default');
    }
    else
	{
		return false;
		// Condition Satisfied If Present
    	// console.log('Nahi Hai ! Banana padega');
    }
}

const m_f_ls_dv = document.querySelector('#m_f_ls_dv');

function open_m_f_ls_dv()
{
	m_f_ls_dv.style.display = 'flex';
	// cls_ins_op_nav();
}
function cls_m_f_ls_dv()
{
	m_f_ls_dv.style.display = 'none';
}


const _form = document.querySelector('#_form'),
	  _upi = _form.querySelector('#_upi'),
	  _name = _form.querySelector('#_name'),
	  _amount = _form.querySelector('#_amount'),
	  _generate = _form.querySelector('#_generate'),
	  qr_display_bx = document.querySelector('#qr_display_bx'),
	  qr_data_display = document.querySelector('.qr_data_display');

_form.onsubmit=(e)=>
{
	e.preventDefault();
}

_generate.onclick=()=>
{
	qr_display_bx.innerHTML = '';
	link= create_upi_link(_upi.value,_name.value,_amount.value);
	// console.log(link);
	generate_qr(link,qr_display_bx);
	// qr_data_display.innerHTML = '₹ '+_amount.value+'<br>'+link;
	qr_data_display.innerHTML = '₹ '+_amount.value+'<br>';/*with no link*/
}

function create_upi_link(upi,name,amount)
{
	_link_ = 'upi://pay?pa='+upi+'&pn='+name+'&am='+amount;
	return _link_;
}

function generate_qr(value,box)
{
	const qrcode = new QRCode(box, 
	{
		text: value,
		width: 300,
		height: 300,
		colorDark : '#000000',
		colorLight : '#ffffff',
		correctLevel : QRCode.CorrectLevel.H
	});
}



// Function for random 6 digit code 
function gen_ran_an_6d() { 
          
    // Declare a string variable  
    // which stores all string 
    var string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    let OTP = ''; 
      
    // Find the length of string 
    var len = string.length; 
    for (let i = 0; i < 6; i++ ) { 
        OTP += string[Math.floor(Math.random() * len)]; 
    } 
    return OTP; 
}
// DATTE_TIME_ID

function get_dt_id()
{
	let date = new Date();
	h = date.getHours(); // Houers 0 - 23
	m = date.getMinutes(); // Minutes 0 - 59
	s = date.getSeconds(); // Seconds 0 - 59
	D = date.getDate(); // Date 1-31
	M = date.getMonth() + 1; // Months 0 - 11
	Y = date.getFullYear(); // Year YYYY

	id = Y+''+M+''+D+''+h+''+m+''+s;
	return id;
	// console.log(id);
}

// SETTING VALUE
function ls_set_val(name,upi)
{	
	let set_key = get_dt_id()+gen_ran_an_6d();
	let set_name = name;
	let set_upi = upi;
	if (set_name.length < 1 || set_upi.length < 1) 
	{
		// alert('Please fill All Field!')
		return 'Please fill All Field!';
	}
	else
	{
		var set_val = set_name+';'+set_upi;
		localStorage.setItem(set_key,set_val);
		// load_all_sett_upi();
		return 'hogya_bsdk';
	}
}

// getting all value
function load_all_sett_upi() 
{
	document.querySelector('#list_os_ls').innerHTML = '';
	for (var key in localStorage) 
	{
    	if (localStorage.hasOwnProperty(key)) 
    	{
    		upi_key = key;
    		// console.log(upi_key);
    		upi_val = localStorage[key];
    		// splliting value
    		spl_val = upi_val.split(';');
    		if (upi_key == ls_primary_key) 
    		{
    			console.log(`${upi_key} - ${upi_val}`);
    		}
    		else
    		{
    			if (check_ls_for_primary(ls_primary_key,upi_key) == true) 
    			{
    				// This means It is primary
    				val = `
						<div class="list_os_ls_ins">
							<div class="list_os_ls_ins_name">${spl_val[0]}</div>
							<div class="list_os_ls_ins_upi">UPI : ${spl_val[1]}</div>
							<div class="list_os_ls_ins_act_bt">
								<button class="list_os_ls_ins_act_bt_btn btn_edit" onclick="ls_edit_value('${upi_key}')">EDIT</button>
								<button class="list_os_ls_ins_act_bt_btn del_btn" onclick="ls_del_value('${upi_key}')">DELETE</button>
								<!--<button onclick="make_it_primary('${upi_key}')">Set as Primary</button>-->
							</div>
						</div>`;

    				document.querySelector('#list_os_ls').innerHTML += val;
    			}
    			else
    			{
    				// not a primary
    				val = `
						<div class="list_os_ls_ins">
							<div class="list_os_ls_ins_name">${spl_val[0]}</div>
							<div class="list_os_ls_ins_upi">UPI : ${spl_val[1]}</div>
							<div class="list_os_ls_ins_act_bt">
								<button class="list_os_ls_ins_act_bt_btn btn_edit" onclick="ls_edit_value('${upi_key}')">EDIT</button>
								<button class="list_os_ls_ins_act_bt_btn del_btn" onclick="ls_del_value('${upi_key}')">DELETE</button>
								<button class="list_os_ls_ins_act_bt_btn stp_btn" onclick="make_it_primary('${upi_key}')">Set as Primary</button>
							</div>
						</div>`;

    				document.querySelector('#list_os_ls').innerHTML += val;
    			}

    			
    			// console.log(val);
    			// console.log(upi_key+' '+spl_val[0]+' '+spl_val[1]);
    		}
    	}
	}
}
// Edit Value
function ls_edit_value(key)
{
	

	upi_key = key;
    // console.log(upi_key);
    upi_val = localStorage[key];
    // splliting value
    spl_val = upi_val.split(';');
    // if (upi_key == ls_primary_key) 
    // {
    console.log(`${upi_key} - ${spl_val[0]} - ${spl_val[1]}`);
    	// }
	hx_cust_prompt_show('EDIT_UPI',spl_val[0],spl_val[1],(result1,result2)=>
		{
			// console.log(result1,' -- ',result2)
			if (spl_val[0] === result1 && spl_val[1] === result2) 
			{
				console.log('As it is');
			}
			else
			{
				if (result1.length > 0 && result2.length > 0) 
				{
					console.log('Need to Update');
					var new_value = result1+';'+result2;
					localStorage.setItem(key,new_value);
					// console.log('EDITED!');
					hx_cust_alert_show('Edited Successfully!');
					call_load();
				}
				else
				{
					hx_cust_alert_show('Please fill All the Field!');
					// console.log('Please Fill All the Field!');
				}
			}
		}
	);
}

// Delete Value
function ls_del_value(key)
{
	hx_cust_confirm_show("","Are you Sure Want to DELETE?", (result)=> 
    {
        if (result) 
        {
            // console.log(key);
            console.log('DELETING...');
			localStorage.removeItem(key);
			console.log('DELETED!');
			call_load();
        } 
        else 
        {
            // console.log("You pressed Cancel.");
            console.log('Dont Worry Your DATA is SAFE');
        }
    });
}
// Delete All
function ls_del_all()
{
	hx_cust_confirm_show("","DELETE ALL UPI !", (result)=> 
    {
        if (result) 
        {
            console.log('DELETING ALL...');
			localStorage.clear();
			console.log('ALL DELETING!');
			check_ls(ls_primary_key);
			call_load();
        } 
        else 
        {
            // console.log("You pressed Cancel.");
            console.log('Dont Worry Your DATA is SAFE');
        }
    });
}

// Make it Primary
function make_it_primary(prm_upi_key)
{
	localStorage.setItem(ls_primary_key,prm_upi_key);
	call_load();
	hx_cust_alert_show('Added to Primary!');
}

const  ls_form = document.querySelector('#ls_form'),
	   ls_upi = ls_form.querySelector('#ls_upi'),
	   ls_name = ls_form.querySelector('#ls_name'),
	   ls_upi_save = ls_form.querySelector('#ls_upi_save');

ls_form.onsubmit=(e)=>
{
	e.preventDefault();
}

ls_upi_save.onclick =()=>
{
	// console.log(get_dt_id(),' - ',add_form_name.value,' - ',add_form_upi_id.value);
	if_set_ls = ls_set_val(ls_name.value,ls_upi.value);
	if (if_set_ls == 'hogya_bsdk') 
	{
		ls_form.reset();
		// alert('Ho Gya!');

		hx_cust_alert_show("Added Successfully!");
		// hx_cust_alert_show("Added Successfully!", (result)=>{console.log(result)});

		call_load();
		// console.error('ho');
	}
}


// Loading all UPI in QR GENERATING TAB
function load_all_upi_ig()
{
	_upi.innerHTML = '';
	for (var key in localStorage) 
	{
    	if (localStorage.hasOwnProperty(key)) 
    	{
    		upi_key = key;
    		// console.log(upi_key);
    		upi_val = localStorage[key];
    		// splliting value
    		spl_val = upi_val.split(';');
    		if (upi_key == ls_primary_key) 
    		{
    			console.log(`${upi_key} - ${upi_val}`);
    		}
    		else
    		{
    			if (check_ls_for_primary(ls_primary_key,upi_key) == true) 
    			{
					val = `
						<option value="${spl_val[1]}" selected>${spl_val[0]} - ${spl_val[1]}</option>`;

    				_upi.innerHTML += val;
    			}
    			else
    			{
					val = `
						<option value="${spl_val[1]}">${spl_val[0]} - ${spl_val[1]}</option>`;

    				_upi.innerHTML += val;
    			}

    			
    			// console.log(val);
    			// console.log(upi_key+' '+spl_val[0]+' '+spl_val[1]);
    		}
    	}
	}
}
function call_load()
{
	load_all_upi_ig();
	load_all_sett_upi();
}

function getY()
{
	a = new Date();
	return a.getFullYear();
}

window.onload=()=>
{
	check_ls(ls_primary_key);
	// cls_step();
	call_load();
	 document.getElementById('bott_c_year').innerHTML = getY();
}
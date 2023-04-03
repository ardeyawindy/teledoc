// 6
function handleGetFormData() {
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const cityInput = document.getElementById("city").value;
    const zipCodeInput = document.getElementById("zip-code").value;
    const statusInput = document.getElementById("status").checked;
  
    return {
      name: nameInput,
      email: emailInput,
      city: cityInput,
      zipCode: zipCodeInput,
      status: statusInput,
    };
  }
  // 7
  function isNumber(input) {
    const inputString = String(input);
    for (let i = 0; i < inputString.length; i++) {
      if (isNaN(inputString[i])) {
        return false;
      }
    }
    return true;
  }
  // 8
  function checkboxIsChecked() {
    const checkbox = document.getElementById("status");
    if (checkbox.checked) {
      return true;
    } else {
      return false;
    }
  }
  
  // 9
  function validateFormData(formData) {
    if (!formData) {
      return false;
    }
    if (!isNumber(formData.zipCode)) {
      return false;
    }
    if (!checkboxIsChecked()) {
      return false;
    }
    return true;
  }
  
  // 10
  
document
  .getElementById("leadForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitBtn = document.querySelector("#leadForm button[type='submit']");
    submitBtn.disabled = true; // Disable immediately
    submitBtn.innerText = "Submitting..."; // Optional UX improvement

    const fullname = document.getElementById("fullname").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const semester = document.getElementById("semester").value;
    const department = document.getElementById("department").value;
    const college = document.getElementById("college").value.trim();
    const source = window.location.href;


    if (!fullname || !mobile) {
      alert("Please fill all fields");
      submitBtn.disabled = false; // Re-enable if validation fails
      submitBtn.innerText = "Submit";
      return;
    }

    try {
      const { error } = await supabaseClient.from("leads").insert([
        {
          fullname,
          mobile,
          semester,
          department,
          college,
          source,
        },
      ]);

      if (error) throw error;

      alert("✅ Submitted successfully!");
      document.getElementById("leadForm").reset();
    } catch (error) {
      alert("❌ Error: " + error.message);
      console.error(error);
    } finally {
      submitBtn.disabled = false; // ✅ Always re-enable
      submitBtn.innerText = "Submit";
    }
  });

//-------------------------------------------------------------------------------------

// document.getElementById("leadForm").addEventListener("submit", async function(e) {
//   e.preventDefault();

//   const fullname   = document.getElementById("fullname").value.trim();
//   const mobile     = document.getElementById("mobile").value.trim();
//   const semester   = document.getElementById("semester").value;
//   const department = document.getElementById("department").value;
//   const college    = document.getElementById("college").value.trim();

//   if (!fullname || !mobile) {
//     alert("Please fill all fields");
//     return;
//   }

//   const { error } = await supabaseClient
//     .from("leads")
//     .insert([{
//       fullname,
//       mobile,
//       semester,
//       department,
//       college
//     }]);

//   if (error) {
//     alert("❌ Error: " + error.message);
//     console.error(error);
//   } else {
//     alert("✅ Submitted successfully!");
//     document.getElementById("leadForm").reset();
//   }
// });

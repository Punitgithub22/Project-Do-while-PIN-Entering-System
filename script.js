let correctPin = "1234";
let attempts = 3;

function checkPin() {
    const pinInput = document.getElementById("pinInput").value;

    if (pinInput === correctPin) {
        alert("PIN is correct. Redirecting to the website.");
        window.location.href = "https://punitgithub22.github.io/Portfolio-Website/";
    } else {
        attempts--;
        document.getElementById("result").innerHTML = `Invalid PIN. ${attempts} attempt(s) remaining.`;

        if (attempts === 0) {
            document.getElementById("result").innerHTML = "Out of attempts. Access denied.";
            document.getElementById("pinInput").disabled = true;
        }
    }
}

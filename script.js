//This is a joke page!

//JS won't work on non-form pages unless I hide the button in an error catch
window.onload= () => {initializeButton()}
function initializeButton() {
    try {
        let submitButton = document.getElementById("submitButton");
        submitButton.addEventListener("click", stealCrypto);
    }
    catch (err) {}
}
//toggles mobile menu open closed
let mobileNavOpen = false;
document.getElementById("mobileNav").addEventListener("click", () => {
    if(mobileNavOpen === false) {
        document.getElementById("hiddenMenu").style.display = "block";
        mobileNavOpen = true
    } else {
        document.getElementById("hiddenMenu").style.display = "none";
        mobileNavOpen = false;
    }

});
//changes background color
document.getElementById("theme").addEventListener("change", () => {
    if(document.getElementById("theme").value === "rose") {
        document.getElementById("body").style.backgroundColor = "#E5B4D7";
    }
    if(document.getElementById("theme").value === "green") {
        document.getElementById("body").style.backgroundColor = "#B2E5B1";
    }
    if(document.getElementById("theme").value === "default") {
        document.getElementById("body").style.backgroundColor = "lightblue";
    }
});
//big annoying validate function with error messages, patterns, and a success alert
function stealCrypto(event) {
    event.preventDefault()
    const fullNameError = document.querySelector("#fullName ~ div").classList;
    const emailError = document.querySelector("#email ~ div").classList;
    const publicKeyError = document.querySelector("#publicKey ~ div").classList;
    const seedPhraseError = document.querySelector("#seedPhrase ~ div").classList;
    const sinError = document.querySelector("#sin ~ div").classList;
    const publicKeyLength = document.getElementById("publicKey").value.length;
    const cryptoType = document.getElementById("cryptoType").value;
    let validForm = true;
    if (document.getElementById("fullName").value === "") {
        fullNameError.remove("hiddenError");
        fullNameError.add("visibleError");
        validForm = false;
    } else {
        if (fullNameError.value === "visibleError") {
            fullNameError.remove("visibleError");
            fullNameError.add("hiddenError");
        }
    }
    if (document.getElementById("email").validity.valid === false) {
        emailError.remove("hiddenError");
        emailError.add("visibleError");
        validForm = false;
    } else {
        if (emailError.value === "visibleError") {
            emailError.remove("visibleError");
            emailError.add("hiddenError");
        }
    }
    if (((publicKeyLength < 26 || publicKeyLength > 35) && cryptoType === "bitcoin")
        || publicKeyLength !== 42 && cryptoType === "ethereum"){
        publicKeyError.remove("hiddenError");
        publicKeyError.add("visibleError");
        validForm = false;
    } else {
        if (publicKeyError.value === "visibleError") {
            publicKeyError.remove("visibleError");
            publicKeyError.add("hiddenError");
        }
    }
    if (!document.getElementById("seedPhrase").value.match(/([A-Za-z0-9]+-){11}[A-Za-z0-9]/)){
        seedPhraseError.remove("hiddenError");
        seedPhraseError.add("visibleError");
        validForm = false;
    } else {
        if (seedPhraseError.value === "visibleError") {
            seedPhraseError.remove("visibleError");
            seedPhraseError.add("hiddenError");
        }
    }
    if (document.getElementById("sin").value.length !== 9){
        sinError.remove("hiddenError");
        sinError.add("visibleError");
        validForm = false;
    } else {
        if (sinError.value === "visibleError") {
            sinError.remove("visibleError");
            sinError.add("hiddenError");
        }
    }
    if (validForm === true) {
        alert("Crypto doubled, please wait a few days for deposit back into your wallet!")
        document.getElementById("redeemingBox").validate();
    }
}

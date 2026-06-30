window.addEventListener("DOMContentLoaded", () => {

    const qr = new Html5Qrcode("reader");

    function onScanSuccess(decodedText) {
        document.getElementById("resultado").innerHTML =
            "Código leído: <br><br>" + decodedText;
    }

    qr.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: 250
        },
        onScanSuccess
    ).catch(err => {
        console.log("Error cámara:", err);
        document.getElementById("resultado").innerHTML =
            "No se pudo abrir la cámara";
    });

});

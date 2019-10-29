window.onload = function() {

    let slider = document.getElementById('slider');
    let label = document.getElementById('label');
    let btn = document.getElementById('btn');
    let result = document.getElementById('result');
    let numbers = document.getElementById('numbers');
    let symbols = document.getElementById('symbols');
    let screenShot = document.getElementById('btn2');

    function getPassword(){
        let seed_letters = 'abcdefghijklmnopqrstuvwxyz';
        let seed_numbers = '0123456789';
        let seed_symbols = '!#$%&';
        let seed;
        let len = slider.value;
        let pwd = '';

        seed = seed_letters + seed_letters.toUpperCase();
        if(numbers.checked === true){
             seed += seed_numbers; 
        }

        if(symbols.checked){
            seed += seed_symbols; 
        }

        while(len--){
            pwd += seed[Math.floor(Math.random() * seed.length)];
        }

        result.value = pwd;

    }
        
    function report() {
        let region = document.querySelector("body"); // whole screen
        html2canvas(region, {
            onrendered: function(canvas) {
                let pngUrl = canvas.toDataURL();
                let img = document.querySelector(".screen");
                img.src = pngUrl; // pngUrl contains screenshot graphics data in url form
          
                // here you can allow user to set bug-region
                // and send it with 'pngUrl' to server
          
          
            },
        });
    }

    slider.addEventListener('change', function(){
        label.innerHTML = this.value;
    });

    btn.addEventListener('click', function(){
        getPassword();
        //result.value = 'f8asdf8asdf';
    });

    result.addEventListener('click', function(){
        this.select();
    });

    getPassword();

    screenShot.onclick = function(){
        const src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"
        const sc = document.createElement("script")
        sc.type="text/javascript"
        sc.src=src
        sc.onload = () => {
            html2canvas(document.body, {
                onrendered: (canvas) => {
                    const imgageData = canvas.toDataURL("image/png")
                    const newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream")
                    const element = document.createElement('a')
                    element.setAttribute('href', newData)
                    element.setAttribute('download', 'PassAcount.png')
                    element.style.display = 'none'
                    document.body.appendChild(element)
                    element.click()
                    document.body.removeChild(element)
                }
            })
        }

        document.body.appendChild(sc)
    }

}();
window.WAF_API_KEY = import.meta.env.VITE_WAF_API_KEY;

document.querySelector('#app').innerHTML = `
  <div>
    <div id="my-captcha-container"></div>

    <div style="display: flex; justify-content: center; margin-top: 4rem">
        <!-- Formulaire d'entrée -->

        <form action="" id="myForm">
            <input
                type="text"
                id="number"
                name="number"
                placeholder="Enter a number between 1 and 1000"
                style="
                    border: 2px solid #e1e1e1;
                    padding: 1rem;
                    width: 50vw;
                    font-size: 1rem;
                " />
            <br />
            <button
                style="
                    font-size: 1rem;
                    font-family: 'Courier New', Courier, monospace;
                    margin-top: 0.9rem;
                    padding: 0.5rem 1rem;
                ">
                Submit
            </button>
        </form>

        <div id="sequence"></div>
    </div>
  </div>
`;
